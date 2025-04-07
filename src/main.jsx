import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './components/Root';
import { Composers } from './components/Composers';
import { AddComposer, AddComposerAction } from './components/AddComposer';
import { AddWork } from './components/AddWork';
import { getComposers } from './api/api';
import { Composer } from './components/Composer';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/composers",
        element: <Composers />,
        loader: getComposers,
      },
      {
        path: "/addcomposer",
        element: <AddComposer />,
        action: AddComposerAction,
      },
      {
        path: "/addwork",
        element: <AddWork />,
        loader: getComposers,
      },
      {
        path:"/composer/:id",
        element:<Composer/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
