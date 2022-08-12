import React,{FC} from 'react';
import { useParams } from "react-router-dom";
import { motion,AnimatePresence } from 'framer-motion';
import useSWRInfinite from 'swr/infinite';
import PhotoCard from './PhotoCard';
import { PexelResp } from '../interfaces/pexel-resp';
import useContextApp from '../hooks/useContextApp';
import Spinner from './Spinner';


const PhotoList:FC = ():JSX.Element => {

  const { id = 0 } = useParams();
  
  const { inputSearch} = useContextApp();


  const getKey = (pageIndex:number, previousPageData:PexelResp) => {
    // reached the end
    if (previousPageData && !previousPageData)return null
    // first page, we don't have `previousPageData`
    if (pageIndex === 0) return `https://api.pexels.com/v1/search?query=${inputSearch}&per_page=16`
    // add the cursor to the API endpoint
    return previousPageData.next_page;
  }

  const {data=[], size, setSize, error} = useSWRInfinite<PexelResp>(getKey);
  

  const isLoadingMore = (!data && !error) || (size > 0 && data && typeof data[size - 1] === "undefined");

  let total_results = 0
  let total_photos = 0;
  for (let index = 0; index < data.length; index++) {
    total_results = data[index].total_results;
    total_photos += data[index].photos.length;
  }




  return (
      <div className='flex flex-col items-center justify-center lg:px-8 2xl:self-start'>
        <h1 className={`dark:text-gray-400  text-gray-600 mb-2 ${id===0?'w-90 sm:w-136 md:w-185 lg:w-232 xl:w-279 2xl:w-368 3xl:w-420':'w-full'}`}>
          {
            (id !== 0 )
            ?`${total_photos-1} of ${(total_results-1)?.toLocaleString()} similar:`
            :`${total_photos} of ${total_results?.toLocaleString()} Results for: ${inputSearch}`
          }
        </h1>
        <motion.div
        layout
        className={`grid gap-2 grid-cols-2 sm:grid-cols-3 md:gap-3 content-start 
         ${id === 0?'md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 3xl:grid-cols-9 4xl:grid-cols-11 5xl:grid-cols-12':
                    'md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-7 4xl:grid-cols-8 5xl:grid-cols-10 6xl:grid-cols-11 h-screen overflow-y-auto'} `}>
          <AnimatePresence>
          {
            data.map( (pexelResp:PexelResp) => pexelResp.photos.map(({id,alt,src:{large}}) => 
              (<PhotoCard key={id} id={id}  url={large} alt={alt} />) ).filter( photo => id !== photo.key))
          }
          </AnimatePresence>
        </motion.div>
        <button 
          className='transition-all duration-200 h-10 py-2 px-4 rounded-md 
          w-full mt-10 dark:text-teal-400 text-teal-600 active:bg-teal-400/30 dark:active:dark:bg-teal-300/20
        bg-teal-400/30 dark:bg-teal-300/20 hover:bg-teal-300/30 dark:hover:bg-teal-100/10 font-semibold '
          onClick={()=>setSize(size+1)}
        >
        {isLoadingMore?<Spinner size={25} />:'Load More'}
        </button>
      </div>
  )
};




export default React.memo(PhotoList);