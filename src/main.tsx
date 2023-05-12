import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <ToastContainer
      theme="colored"
      position="top-center"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={false} rtl={false}
      closeOnClick pauseOnHover />
  </React.StrictMode>,
);
