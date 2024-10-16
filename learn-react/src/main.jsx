import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Belajarkomponen from './page/belajarkomponen.jsx';
import Belajarusestate from './page/belajarusestate.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/belajarkomponen',
        element: <Belajarkomponen />,
    },
    {
        path: '/belajarusestate',
        element: <Belajarusestate />,
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
