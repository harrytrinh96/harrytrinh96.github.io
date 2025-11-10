import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

console.log('✅ React index.js loaded!');
console.log('✅ Looking for root element...');
const rootElement = document.getElementById('root');
console.log('✅ Root element found:', rootElement);

const root = ReactDOM.createRoot(rootElement);
console.log('✅ Root created, rendering App...');
root.render(<App />);
console.log('✅ App rendered!');

reportWebVitals();

