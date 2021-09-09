import MainLayout from "../components/MainLayout"
import Home from "../containers/Home"
import Profile from "../containers/Profile"

const routers = [

    {
        component: MainLayout,
        routers: [
            {
                path: '/',
                component: Home,
                auth: false,
                exact: true
            },
            {
                path: '/profile',
                component: Profile,
                auth: true,
            }
        ]
    },
    // {
    //     component: Error
    // }
]

export default routers