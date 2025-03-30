 import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import BoxAnimation from "../components/Animating"
import TimelineAnimation from "../components/TimelineAnimation"
import ScrollAnimation from "../components/ScrollAnimation"
import FlipExample from "../components/FlipExample"
import BoxAnimation1 from "../Practices/BoxAnimation"



export const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
            path:'/animate1',
            element: <BoxAnimation/>
            },
            {
                path:'/TimelineAnimation',
                element: <TimelineAnimation/>
            },
            {
                path:'/ScrollAnimation',
                element: <ScrollAnimation/>
            },
            {
                path:'/FlipExample',
                element: <FlipExample/>
            },
            {
                path:'/BoxAnimation1',
                element: <BoxAnimation1/>
            }
        ]
    }
])