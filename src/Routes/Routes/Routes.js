import { createBrowserRouter } from "react-router-dom";
import Login from "../../Pages/LogIn/Login";
import Main from "../../Main/Main";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])