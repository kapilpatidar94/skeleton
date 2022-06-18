import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteInit from './routes/routeInit';
import { StateProvider } from './providers/stateProvider';
import StateReducerService, { initialState } from './services/stateReducerService';
import './assets/scss/app.scss';

const el = document.getElementById('root')
if (el === null) throw new Error('Root container missing in index.html')

const root = ReactDOM.createRoot(el)
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={StateReducerService}><RouteInit /></StateProvider>
  </React.StrictMode>
)