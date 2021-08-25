import React from 'react';
import AppProvider from "./core/AppProvider";
import renderRouters from './core/routerConfig';
import routers from "./core/routers";
import './style/common/App.scss';

function App() {
  return (
    <AppProvider>
    {renderRouters(routers)}
  </AppProvider>
  );
}

export default App;
