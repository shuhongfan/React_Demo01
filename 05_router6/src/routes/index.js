import About from "../pages/About";
import Home from "../pages/Home";
import {Navigate} from "react-router-dom";
import Message from "../pages/Message";
import News from "../pages/News";
import Detail from "../pages/Detail";

export default [
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/home',
        element:<Home/>,
        children:[
            {
                path:'news',
                element: <News/>
            },{
                path:'message',
                element: <Message/>,
                children:[
                    {
                        path:'detail',
                        element: <Detail/>
                    }
                ]
            },
        ]
    },
    {
        path:'/',
        element: <Navigate to="/about"/>
    },
]