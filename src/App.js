import './App.css';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Route from './Routers/Route';
function App() {
  return (
    <div data-theme="light">
      <RouterProvider router={Route}></RouterProvider>
    </div>
  );
}

export default App;
