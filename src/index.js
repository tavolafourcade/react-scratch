import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CatsProvider from './context/CatsContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CatsProvider>
    <App />
    </CatsProvider>
);
