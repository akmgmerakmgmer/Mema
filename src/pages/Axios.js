import React, { lazy,Suspense  } from 'react';
import FullPageLoading from '../components/Loadings/FullPageLoading';
const Background2 = lazy(() => import('../components/Backgrounds/Background2'));
const Grid4 = lazy(() => import('../components/Grids/Grid4'));
const Axios=()=>{
    return(
        <Suspense fallback={FullPageLoading}>
            <Background2/>
            <Grid4/>
        </Suspense>
    )
}

export default Axios