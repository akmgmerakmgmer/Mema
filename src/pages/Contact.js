import React, { lazy,Suspense  } from 'react';
import FullPageLoading from '../components/Loadings/FullPageLoading';
const Contact1 = lazy(() => import('../components/Contacts/Contact1'));
const Background3 = lazy(() => import('../components/Backgrounds/Background3'));
const Contact2 = lazy(() => import('../components/Contacts/Contact2'));
const Footer1 = lazy(() => import('../components/Footer/Footer1'));

const Contact = ()=>{
    return(
        <Suspense fallback={FullPageLoading}>
            <Background3/>
            <Contact2 component="h2"/>
            <Contact1 component="h3"/>
            <Footer1 component="h4"/>
        </Suspense>
    )
}

export default Contact