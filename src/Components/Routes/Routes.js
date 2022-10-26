import { createBrowserRouter } from "react-router-dom";
import Login from "../LogIn/Login";
import Main from "../Main/Main";
import Blog from '../Blog/Blog'
import Course from '../Course/Course'
import Register from "../Register/Register";
import Faq from "../Faq/Faq";


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
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/course',
                loader: async () => {
                    return fetch(`https://assignment-10-server-bay.vercel.app`);
                },

                element: <Course></Course>
            },
            {
                path: '/register',
                element: <Register></Register>

            }

        ]
    }
])