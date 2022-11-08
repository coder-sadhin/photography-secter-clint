import './App.css';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Route from './Routers/Route';
function App() {
  return (
    <div data-theme="light" className='bg-blue-50'>
      <RouterProvider router={Route}></RouterProvider>
    </div>
  );
}

export default App;
