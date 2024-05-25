import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../Layout/Layout';
import Error from '../../Error/Error';
import Home from './../../Home/Home';
import About from '../../About/About';
import Students from '../../Students/Students';
import StudentDetails from '../../StudentDetails/StudentDetails';
import Registration from '../../Registration/Registration';
import Login from '../../Login/Login';

const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:"/classes",
                element:<Students/>
            },
            {
                path:'/details',
                element:<StudentDetails/>
            },
            {
                path:"/registration",
                element:<Registration/>
            },
            {
                path:"/login",
                element:<Login/>
            }

        ]
    }


])

export default Routers;