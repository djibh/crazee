import { createBrowserRouter } from "react-router-dom"
import Homepage from "./components/pages/homepage/Homepage"
import LoginPage from "./components/pages/login/LoginPage"


export const router = createBrowserRouter([
    {
        errorElement: <h1>404</h1>,
        children: [
            {
                path: "/",
                element: <LoginPage />,
            },
            {
                path: "/home",
                element: <Homepage />,
            }
        ]
    }
])