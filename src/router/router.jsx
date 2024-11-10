import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import {HomePage} from "../pages/HomePage.jsx";
import {CardListAnimation} from "../componets/CardListAnimation.jsx";
import {ResponsiveFlex} from "../pages/ResponsiveFlex.jsx";
import {SignUp} from "../componets/firebase/signup/SignUp.jsx";
import {SignIn} from "../componets/firebase/signin/SignIn.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/card-list-animation",
                element: <CardListAnimation/>
            },
            {
                path: "/flex",
                element: <ResponsiveFlex/>
            },
            {
                path: "/signup",
                element: <SignUp/>
            },
            {
                path: "/signin",
                element: <SignIn/>
            },

        ]
    }
])

export default router;