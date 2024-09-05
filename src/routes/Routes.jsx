import { createBrowserRouter } from "react-router-dom"
import { BASE_PATH, EVERYTHING_PATH, LOADER_PATH } from "../constants/path"
import Home from "../views/home/Home"
import E404 from '../views/error/E404'
import MainLoader from "../components/global/loaders/mainLoader/MainLoader"
import Layout from "../components/layout/Layout"


const router = createBrowserRouter(
    [
        {
            element: <Layout />,
            children: [               
                {
                    path: BASE_PATH,
                    element: <Home />
                },
              
            ]
        },
        {

            path: EVERYTHING_PATH,
            element: <E404 />
        },
        {
            path: LOADER_PATH,
            element: <MainLoader />
        }
    ]
)
export default router