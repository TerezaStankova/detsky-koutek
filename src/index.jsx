import { createRoot } from 'react-dom/client';
import React from 'react';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { ErrorPage } from './pages/ErrorPage';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { CentersPage } from './pages/CentersPage';
import { CenterDetail } from './components/CenterDetail';
import './global.css';




const App = () => {
  return (
    <div className="container">
      <h1>Dětský koutek</h1>
      <nav>
      <Link to="/">Dětský koutek</Link>
      <span> | </span>
      <Link to="/about">O nás</Link>
      <span> | </span>
      <Link to="/contact">Kontakt</Link>
      <span> | </span>
      <Link to="/pobocky">Centra</Link>
      </nav>
      <Outlet/>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <HomePage/>,
      },
      {
        path: 'about',
        element: <About/>,
      },
      {
        path: 'contact',
        element: <Contact/>,
      },
      {
        path: 'pobocky',
        element: <CentersPage/>,
        children: [
            {
                path: '/pobocky/:id',
                element: <CenterDetail/>
            }
        ]
    }
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);