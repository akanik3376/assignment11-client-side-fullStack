
import { createBrowserRouter } from 'react-router-dom';
import MainRoot from './MainRoot';
import Error from '../Pages/Error';
import RegisterPage from '../Pages/RegisterPage';
import Home from '../Pages/Home';
import LoginPage from '../Pages/LoginPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainRoot></MainRoot>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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