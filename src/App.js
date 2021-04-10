import React from 'react';
import Routes from './Routes';
import './styles.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <div className="app">
      <Routes />
      <ToastContainer autoClose={5000} />
    </div>

  );
}