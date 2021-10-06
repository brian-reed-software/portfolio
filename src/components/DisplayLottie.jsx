import React, { Suspense } from 'react';
import Lottie from 'react-lottie';
import Loading from './Loading'

const GreetingLottie = ({animationData}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
      };
    
    return (
        <Suspense fallback={<Loading />}>
          {/* To override default onClick pause by Lottie */}
          <div onClick={() => null}>
            <Lottie style={{filter: "drop-shadow(2px 4px 52px white)",filter: "drop-shadow(2px 4px 52px cornflowerblue)"}}
              options={defaultOptions}
            />
          </div>
        </Suspense>
    )
}
 
export default GreetingLottie;
