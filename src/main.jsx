import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App.jsx';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import UserContextProvider from './components/web/context/UUser.jsx';
import { CartContextProvider } from './components/web/context/Cart.jsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <UserContextProvider>
    <CartContextProvider>
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <App />
    </QueryClientProvider>
    </CartContextProvider>
    </UserContextProvider>
  </>
);
