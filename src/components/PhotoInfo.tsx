import React,{FC,useEffect} from 'react';
import { useParams } from "react-router-dom";
import useSWR from 'swr';
import handleDownloadImage from '../helpers/imageDownloader';
import { Photo } from '../interfaces/pexel-resp';



const PhotoInfo:FC = ():JSX.Element => {
  
  const { id = '0' } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  

  const endPoint = `https://api.pexels.com/v1/photos/${id}`;

  const {data:photo = {} as Photo} = useSWR<Photo>(endPoint);

  const large = photo.src.large2x;
  const alt = photo.alt;


  return (
        <div className="lg:self-start lg:px-8 ">
        <div 
            className={`w-90 h-90 flex justify-center items-center rounded-md shadow-md`}>
            <img
                className="rounded-md w-90 h-90 object-cover shadow-md"
                src={large}
                alt={alt}
            />
        </div>
        <div className="flex w-90 justify-between items-center py-5  lg:flex-col">
            <div className="lg:w-full lg:mb-2">
                <a
                href={photo.photographer_url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center flex-auto cursor-pointer"
                >
                <div className={`text-lg rounded-full font-medium bg-gray-200 dark:bg-gray-400 shadow-md hover:bg-gray-50 dark:hover:bg-gray-300 transition-all duration-200`}>
                    <span className="flex justify-center items-center h-12 w-12 ">
                    {photo.photographer
                        .split(" ")
                        .map((name) => name[0]?.toLocaleUpperCase())
                        .join("")}
                    </span>
                </div>
                <div className="dark:text-gray-300 text-sm ml-3 leading-5 ">
                    Photographer:<br/>
                    <b>{photo?.photographer}</b>
                </div>
                </a>
            </div>
            <div className="lg:w-full  lg:mt-2">
                <button
                onClick={()=>handleDownloadImage(photo.src.large2x,photo.alt)}
                type="button"
                className="bg-gradient-to-b from-teal-500 to-teal-600 active:bg-gradient-to-b active:from-teal-500 active:to-teal-600 px-2 py-1 flex-auto rounded-md shadow-md transition-all duration-400
                text-gray-100 font-semibold touch-none hover:bg-gradient-to-b hover:from-teal-400 hover:to-teal-500 lg:w-90 lg:m-0"
                >
                Download
                </button>
            </div>
        </div>
  </div>
    
  )
}


export default React.memo(PhotoInfo);