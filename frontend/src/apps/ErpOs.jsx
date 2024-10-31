
import { Suspense } from 'react';
import Localization from './../locale/Localization';
import {AppContextProvider} from '../context/appContext'
// import ErpApp from './ErpApp';
import PageLoader from './../components/PageLoader/index';
import AuthRouter from '../router/AuthRouter';


export default function ErpOs(){
    return(
        <Localization>
            <AppContextProvider>
                <Suspense fallback={<PageLoader/>}>
                   {/* < ErpApp/> */}
                   <AuthRouter/>
                </Suspense>
            </AppContextProvider>
        </Localization>
    )
}