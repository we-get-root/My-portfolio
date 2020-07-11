import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import RootApp from './app/root_app';
import { store } from './state/store';
import { Provider } from 'react-redux';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <RootApp />
    </Provider>
  </React.StrictMode>, document.getElementById('root-app'))

serviceWorker.unregister()
