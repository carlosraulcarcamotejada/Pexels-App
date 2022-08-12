import ReactDOM from 'react-dom/client';
import './index.css';
import PexelsApp from './PexelsApp';
import React from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PexelsApp />
  </React.StrictMode>
);

