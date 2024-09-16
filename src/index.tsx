import { hydrateRoot } from 'react-dom/client';

import { App } from './App';

const domNode = document.getElementById('root');

const initData = window.__SERVER_DATA__;
hydrateRoot(domNode, 
    <App movies={initData}/>
);