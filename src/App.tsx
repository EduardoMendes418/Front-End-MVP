import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Layout>
        <Dashboard />
      </Layout>
    </I18nextProvider>
  );
};

export default App;