
import { createBrowserRouter } from 'react-router-dom';
import MainRoot from './MainRoot';
import Error from '../Pages/Error';
import RegisterPage from '../Pages/RegisterPage';
import Home from '../Pages/Home';
import LoginPage from '../Pages/LoginPage';
import AddJob from '../Pages/AddJob';
import Details from '../Pages/Details';
import MyBids from '../Pages/MyBids';

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
                element: <Details></Details>,
                loader: () => fetch('http://localhost:5000/api/v1/jobs')
                // loader: ({ params }) => fetch(`http://localhost:5000/api/v1/jobs/${params.id}`)
            },
            {
                path: '/addJob',
                element: <AddJob></AddJob>
            },
            {
                path: '/myBids',
                element: <MyBids></MyBids>,
                // loader: () => fetch('http://localhost:5000/api/v1/jobs/apply/user/request')
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