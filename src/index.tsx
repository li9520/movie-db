import { hydrateRoot } from 'react-dom/client';

import { App } from './App';
import { BrowserRouter } from 'react-router-dom';

const domNode = document.getElementById('root');

const initData = window.__SERVER_DATA__;
hydrateRoot(domNode, 
  <BrowserRouter>
    <App  serverData={initData}/>
  </BrowserRouter>,
);