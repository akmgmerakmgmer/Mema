
import React, { lazy,Suspense  } from 'react';
import FullPageLoading from '../components/Loadings/FullPageLoading';
const Background1 = lazy(() => import('../components/Backgrounds/Background1'));
const Bars1 = lazy(() => import('../components/Bars/Bars1'));
const Grid3 = lazy(() => import('../components/Grids/Grid3'));
const Contact2 = lazy(() => import('../components/Contacts/Contact2'));
const Footer1 = lazy(() => import('../components/Footer/Footer1'));
const Grid5 = lazy(() => import('../components/Grids/Grid5'));

const Services = ()=>{
    return(
        <Suspense fallback={FullPageLoading}>
            <Background1/>
            <Grid5/>
            <Grid3/>
            <Bars1/>         
            <Contact2 component="h4"/>
            <Footer1 component="h5"/>
        </Suspense>
    )
}

export default Services