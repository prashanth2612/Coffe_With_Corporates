import './style/app.css';

import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import PageLoader from '@/components/PageLoader';

const ErpOs = lazy(() => import('./apps/ErpOs'));

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<PageLoader />}>
          <ErpOs />
        </Suspense>
      </Provider>
    </BrowserRouter>
  );
}
