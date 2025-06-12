import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
import AddPage from './Pages/AddPage.jsx';
import BrowseListings from './Pages/BrowseListings.jsx';
import RoommateDetails from './Pages/RoommateDetails.jsx';
import Private from './Private/Private.jsx';
import MyList from './Pages/MyList.jsx';
import EditPage from './Pages/EditPage.jsx';
import NotFoundPage from './Pages/NotFoundPage.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>, children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add",
        element: <Private><AddPage></AddPage></Private>,
      },
      {
        path: "/browse-listings",
        element: <BrowseListings></BrowseListings>,
      },
      {
        path: "/details/:id",
        element: <Private><RoommateDetails></RoommateDetails></Private>,
      },
      {
        path: "/edit/:id",
        element:<Private> <EditPage ></EditPage></Private>,
        loader: ({ params }) => fetch(`https://server-10-nu.vercel.app/api/v2/roommates/${params.id}`)
      },
      {
        path: "/my-listings",
        element: <Private><MyList></MyList></Private>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ]
  },
  {
    path:'*',
    element:<NotFoundPage></NotFoundPage>
  }
]);






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
