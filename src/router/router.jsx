import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import {HomePage} from "../pages/HomePage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/card-list-animation",
                element: <CardListAnimation />
            },

        ]
    }
])

export default router;