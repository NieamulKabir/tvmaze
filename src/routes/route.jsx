import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

const routes= createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:"/",
                element:<Home />
            }
        ]
    }
])

export default routes;