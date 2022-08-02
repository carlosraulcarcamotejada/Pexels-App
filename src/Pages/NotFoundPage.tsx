import {FC} from 'react';

const NotFoundPage:FC = ():JSX.Element => {
  return (
    <div className='w-full flex justify-center items-center'>
        <div className='w-90 flex justify-center items-center text-gray-600 dark:text-gray-300 border border-gray-200 rounded-md'>
        Image doesn't exist.
        </div>
    </div>
  )
}

export default NotFoundPage