import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import JobDetails from './Components/FeaturedJobs/JobDetails/JobDetails';
import jobsLoader from './Loader/JobsLoader';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Statistics from './Components/Statistics/Statistics';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Blog from './Components/Blog/Blog';
const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/job/:jobId',
        element:<JobDetails></JobDetails>,
        loader:jobsLoader
      },
      {
        path:'/applied-jobs',
        element:<AppliedJobs></AppliedJobs>,
        loader:jobsLoader
     
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>,
   
     
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
