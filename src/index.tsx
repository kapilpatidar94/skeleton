import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteInit from './routes/routeInit';
import { StateProvider } from './providers/stateProvider';
import StateReducerService, { initialState } from './services/stateReducerService';
import './assets/scss/app.scss';
import { Provider } from 'react-redux';
import store from './services/redux/store';

const el = document.getElementById('root')
if (el === null) throw new Error('Root container missing in index.html')

const root = ReactDOM.createRoot(el)
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <StateProvider initialState={initialState} reducer={StateReducerService}><RouteInit /></StateProvider>
    </React.StrictMode>
  </Provider>
)