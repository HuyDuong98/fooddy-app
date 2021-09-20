import MainLayout from "../components/MainLayout"
import Home from "../containers/Home"
import Profile from "../containers/Profile"
import ProductDetail from "../containers/ProductDetail"

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
                path: '/detail/:slug',
                component: ProductDetail,
                auth: false,
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