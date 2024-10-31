import { useLayoutEffect } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Layout } from 'antd';

import { useAppContext } from '../context/appContext';

import Navigation from './Navigation/Navigation';
import HeaderContent from './Header/Header';
import PageLoader from '@/components/PageLoader';
import AppRouter from '@/router/AppRouter';

export default function ErpCrmApp() {
  const { Content } = Layout;

  const { state: stateApp, appContextAction } = useAppContext();
  const { app } = appContextAction;
  const { isNavMenuClose, currentApp } = stateApp;

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    // Load app settings if needed (removed Redux settingsAction)
  }, []);

  // Placeholder for appSettings (Redux removed)
  const appSettings = {};

  // Placeholder for settingIsloaded
  const settingIsloaded = true;

  useEffect(() => {
    const loadDefaultLang = JSON.parse(window.localStorage.getItem('firstVisit'))?.loadDefaultLang;
    if (appSettings.idurar_app_language && !loadDefaultLang) {
      // Translation dispatch removed
      window.localStorage.setItem('firstVisit', JSON.stringify({ loadDefaultLang: true }));
    }
  }, [appSettings]);

  // Placeholder for langDirection
  const langDirection = 'ltr';

  if (settingIsloaded)
    return (
      <Layout hasSider style={{ flexDirection: langDirection === 'rtl' ? 'row-reverse' : 'row' }}>
        {/* {currentApp === 'default' ? <Navigation /> : <ExpensesNav />} */}
        <Navigation />

        <Layout>
          <HeaderContent />
          <Content
            style={{
              margin: '40px auto 30px',
              overflow: 'initial',
              width: '100%',
              padding: '0 50px',
              maxWidth: 1400,
            }}
          >
            <AppRouter />
          </Content>
        </Layout>
      </Layout>
    );
  else return <PageLoader />;
}
