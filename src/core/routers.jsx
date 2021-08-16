import MainLayout from "../components/MainLayout"
import Home from "../pages/Home"


const routers = [
    
    {
        component: MainLayout,
        routers: [
            {
                path: '/',
                component: Home,
                auth: true,
                exact: true
            },
        ]
    },
    // {
    //     component: Error
    // }
]

export default routers