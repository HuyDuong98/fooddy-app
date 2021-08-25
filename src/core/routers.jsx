import MainLayout from "../components/MainLayout"
import Home from "../containers/Home"


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