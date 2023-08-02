import { Suspense } from 'react';

import { createBrowserHistory } from 'history';

import CustomRouter from '@/wrappers/CustomRouter';
import RootComponent from '@/wrappers/Root';

import "./App.css";
// import 'antd/dist/reset.css';

const hashHistory = createBrowserHistory();

function App() {
  return (
    <CustomRouter history={hashHistory}>
      <Suspense fallback={null}>
        <RootComponent />
      </Suspense>
    </CustomRouter>
  );
}

export default App;
