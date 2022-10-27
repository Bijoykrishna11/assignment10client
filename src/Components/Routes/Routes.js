import { createBrowserRouter } from "react-router-dom";
import Login from "../LogIn/Login";
import Main from "../Main/Main";
import Blog from '../Blog/Blog'
import Course from '../Course/Course'
import Register from "../Register/Register";
import Faq from "../Faq/Faq";
import { FaAngry } from "react-icons/fa";
import Theme from "../Theme/Theme";



export const routes = createBrowserRouter([
    {

        ///////////// router//////////////

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

            //////////////////data load//////////////////
            {
                path: '/course',
                loader: () => {
                    return fetch(`https://assignment-10-server-bay.vercel.app`);
                },

                element: <Course></Course>
            },
            {
                path: '/register',
                element: <Register></Register>

            },
            {
                path: "/theme",
                element: <Theme></Theme>

            },
            {
                path: '*',
                element:
                    <div className="text-warning d-flex justify-content-center">
                        <div>
                            <h1>NO data Available</h1>
                            <FaAngry className="text-danger fs-1"></FaAngry>
                            <p>404</p>
                        </div>
                    </div>
            }


        ]
    }
])