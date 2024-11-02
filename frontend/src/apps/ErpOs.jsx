import { lazy, Suspense } from 'react';

import { AppContextProvider } from '@/context/appContext';
import PageLoader from '@/components/PageLoader';
import Localization from '@/locale/Localization';

const ErpApp = lazy(() => import('./ErpApp'));

const DefaultApp = () => (
  <Localization>
    <AppContextProvider>
      <Suspense fallback={<PageLoader />}>
        <ErpApp />
      </Suspense>
    </AppContextProvider>
  </Localization>
);

export default function ErpOs() {
  console.log(
    '🚀 Welcome to COFFEE WITH CORPORATES! Did you know that we also offer commercial customization services? Contact us at coffe with corporates.com for more information.'
  );

  return <DefaultApp />;
}
