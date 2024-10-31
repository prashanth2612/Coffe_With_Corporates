import './style/app.css'

import { Suspense,lazy } from 'react'
import { BrowserRouter } from 'react-router-dom';

import {Provider} from "react-redux"
import store from './redux/store';
import PageLoader from './components/PageLoader/index';
import ErpCrmApp from './apps/ErpApp';
import { AppContextProvider } from './context/appContext';

export default function App(){

  return(
    <BrowserRouter>
    <AppContextProvider>

    <Provider store={store}>

<Suspense fallback={<PageLoader/>}>
<ErpCrmApp/>


</Suspense>

</Provider>

    </AppContextProvider>
      
    </BrowserRouter>
  )
}