import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import Main from '../Layout/Main';
import Blogs from '../Pages/Blogs/Blogs/Blogs';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login/Login';
import Register from '../Pages/Login/Register/Register';
import ResetPass from '../Pages/Login/ResetPass/ResetPass';
import Myreview from '../Pages/Review/Myreview/Myreview';
import UpdateReview from '../Pages/Review/Myreview/UpdateReview';
import AddService from '../Pages/Services/AddService/AddService';
import ServiceDetails from '../Pages/Services/Services/ServiceDetails';
import Services from '../Pages/Services/Services/Services';
import PrivateRoute from './PrivetRoutes/PrivetRoute';

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
                loader: () => fetch('http://localhost:5000/blogs')
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/myReview',
                element: <PrivateRoute><Myreview></Myreview></PrivateRoute>
            },
            {
                path: '/resetPass',
                element: <ResetPass></ResetPass>
            },
            {
                path: '/updateReview/:id',
                element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/review/${params.id}`)
            }
        ]
    }
])

export default Route;