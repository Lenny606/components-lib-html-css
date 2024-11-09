import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import {HomePage} from "../pages/HomePage.jsx";
import {CardListAnimation} from "../componets/CardListAnimation.jsx";

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
            {
                path: "/flex",
                element: <ResponsiveFlex />
            },

        ]
    }
])

export default router;