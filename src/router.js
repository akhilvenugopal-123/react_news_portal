import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddNews from "./components/AddNews";
import EditNewsItem from "./components/Edit";
import UnauthHome from "./components/Unauthhome";
import Login from "./components/auth/Login";
import Aboutus from "./components/AboutUs";


const router = createBrowserRouter([
    
    {path:'/',element:<UnauthHome/>},
    {path:'/Home' , element:<App/>},
    {path:'/Add', element:<AddNews/>},
    {path:'/Edit/:itemId',element:<EditNewsItem/>},
    {path:'/Login',element:<Login/>},
    {path:'/AboutUs',element:<Aboutus/>}
])


export default router;