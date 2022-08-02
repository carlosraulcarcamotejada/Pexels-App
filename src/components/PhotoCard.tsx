import { motion } from 'framer-motion';
import {FC} from 'react';
import { Link } from 'react-router-dom';

type props = {
  id:number,
  url:string,
  alt:string
}


const PhotoCard:FC<props> = ({id,url,alt}):JSX.Element => {
  return (
    <motion.div 
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    layout
    className='shadow-md rounded-lg w-44 h-44  '>
      <Link  to={`/image-page/${id}`}>
        <img className='w-44 h-44 rounded-lg object-cover  hover:brightness-50 transition-all duration-200'
        src={url} alt={alt} />
      </Link>
    </motion.div>
  )
}

export default PhotoCard;