import Home from "../../pages/Home/Home/Home/Home";
import Shop from "../../pages/Shop/Shop";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../LayOut/Main");

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/shop',
                element:<Shop></Shop>
            },
        ]
    }
])
export default router;