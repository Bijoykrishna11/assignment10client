import { createBrowserRouter } from "react-router-dom";
import Login from "../LogIn/Login";
import Main from "../Main/Main";
import Blog from '../Blog/Blog'
import Course from '../Course/Course'
import Register from "../Register/Register";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/course',
                element: <Course></Course>
            },
            {
                path: '/register',
                element: <Register></Register>

            }

        ]
    }
])