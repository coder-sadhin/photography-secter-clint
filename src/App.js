import './App.css';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import Route from './Routers/Route';
function App() {
  return (
    <div data-theme="light" className='bg-blue-50'>
      <RouterProvider router={Route}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
