
import { createBrowserRouter } from 'react-router-dom';
import MainRoot from './MainRoot';
import Error from '../Pages/Error';
import RegisterPage from '../Pages/RegisterPage';
import Home from '../Pages/Home';
import LoginPage from '../Pages/LoginPage';
import AddJob from '../Pages/AddJob';
import Details from '../Pages/Details';
import MyBids from '../Pages/MyBids';
import MyPostedJob from '../Pages/MyPostedJob';
import PrivetRoot from './PrivetRoot';
import UpdateData from '../Pages/UpdateData';
import BidRequests from '../Pages/BidRequests';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainRoot></MainRoot>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/api/v1/jobs')
            },
            {
                path: '/details/:id',
                element: <PrivetRoot><Details></Details></PrivetRoot>,
                loader: () => fetch('http://localhost:5000/api/v1/jobs')

            },
            {
                path: '/addJob',
                element: <PrivetRoot><AddJob></AddJob></PrivetRoot>
            },
            {
                path: '/myBids',
                element: <PrivetRoot><MyBids></MyBids></PrivetRoot>,
                loader: ({ params }) => fetch(`http://localhost:5000/api/v1/jobs/apply/user/request?email${params.email}`)
            },
            {
                path: '/myPostedJob',
                element: <PrivetRoot><MyPostedJob></MyPostedJob></PrivetRoot>,
                loader: () => fetch('http://localhost:5000/api/v1/jobs')
            },
            {
                path: '/update/:id',
                element: <UpdateData></UpdateData>,
                loader: ({ params }) => fetch(`http://localhost:5000/api/v1/jobs/${params.id}`)
            },
            {
                path: '/bidRequest',
                element: <BidRequests></BidRequests>,

            },

            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/register',
                element: <RegisterPage></RegisterPage>
            },
        ]
    },
]);

export default router;