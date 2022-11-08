import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Blogs from '../Pages/Blogs/Blogs/Blogs';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login/Login';
import Register from '../Pages/Login/Register/Register';
import Myview from '../Pages/Review/Myreview/Myview';
import AddService from '../Pages/Services/AddService/AddService';
import Services from '../Pages/Services/Services/Services';

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/addService',
                element: <AddService></AddService>
            },
            {
                path: '/myReview',
                element: <Myview></Myview>
            }
        ]
    }
])

export default Route;