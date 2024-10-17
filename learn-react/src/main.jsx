import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Belajarkomponen from './page/belajarkomponen.jsx';
import Belajarusestate from './page/belajarusestate.jsx';
import Belajarform from './page/belajarform.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <div className='flex justify-center items-center min-h-screen'>hello world </div>,
    },
    {
        path: '/belajarkomponen',
        element: <Belajarkomponen />,
    },
    {
        path: '/belajarusestate',
        element: <Belajarusestate />,
    },
    {
        path: '/belajarform',
        element: <Belajarform />,
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
