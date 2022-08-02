import { FC, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import PhotoList from '../components/PhotoList';
import Spinner from '../components/Spinner';
import Error from '../components/Error';

const HomePage:FC = ():JSX.Element => {
 

  return (
    <ErrorBoundary fallback={<div className='h-screen flex justify-center items-center'><Error message='Could not fetch data PhotoList in home page.' /></div>}>
      <Suspense fallback={<div className='flex w-full h-screen justify-center items-center'> <Spinner /> </div>}>
        <PhotoList  />
      </Suspense>
    </ErrorBoundary>
  )
}


export default HomePage;