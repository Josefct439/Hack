import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import { useNavigate, Outlet } from 'react-router-dom';
import { Index } from './pages/Index';
import { MasV } from './assets/pages/MasV';

const router = createBrowserRouter([
    {
        path: "/mas",
        element: <MasV/>
    },
    {
        path: "/",
        element: <Index />
    },
]);
ReactDOM.createRoot(document.querySelector('#root')).render(
    <RouterProvider router={router} />
  
  
  )