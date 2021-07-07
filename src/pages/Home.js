import React, { lazy,Suspense  } from 'react';
import FullPageLoading from '../components/Loadings/FullPageLoading';
const Section1 = lazy(() => import('../components/Section1/Section1'));
const Section2 = lazy(() => import('../components/Section2/Section2'));
const Slider1 = lazy(() => import('../components/Sliders/Slider1'));
const Grid2 = lazy(() => import('../components/Grids/Grid2'));
const Contact1 = lazy(() => import('../components/Contacts/Contact1'));
const Home = ()=>{
    return(
        <Suspense fallback={FullPageLoading}>
            <Section1/>
            <Section2/>
            <Slider1/>
            <Grid2/>
            <Contact1 component="h5"/>
        </Suspense>
    )
}

export default Home