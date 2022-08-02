import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import {FC} from 'react'

type props = {
    message:string
}

const Error:FC<props> = ({ message }):JSX.Element => {
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.4}}
      className="w-90 h-90 bg-red-300/30 flex justify-center text-sm font-semibold text-red-500">
        <ExclamationCircleIcon className="w-5 h-5 mr-2" />
        {message}
    </motion.div>
  );
}

export default Error