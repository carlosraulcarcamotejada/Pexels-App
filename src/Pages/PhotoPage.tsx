import React, { Suspense } from "react";
import { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import PhotoInfo from "../components/PhotoInfo";
import PhotoList from "../components/PhotoList";
import Spinner from "../components/Spinner";
import Error from "../components/Error"


const PhotoPage:FC = ():JSX.Element => {
  
 
  return (
      <div className="flex flex-col items-center lg:flex-row ">

        <ErrorBoundary fallback={<div className="w-106 h-106 flex justify-center items-center self-start"><Error message="Could not fetch data in PhotoInfo." /></div>}> 
          <Suspense fallback={<div className="w-106 h-106 flex justify-center items-center self-start"><Spinner /></div>}>
            <PhotoInfo />         
          </Suspense>
        </ErrorBoundary>
 
  
        <ErrorBoundary fallback={<div className="flex justify-center items-center"><Error message="Could not fetch data in PhotoList in PhotoInfo." /></div>}> 
          <Suspense fallback={<div className="h-screen flex justify-center items-center"><Spinner /></div>}>
            <PhotoList />
          </Suspense>
        </ErrorBoundary>
      </div>
    );
}

export default React.memo(PhotoPage);
