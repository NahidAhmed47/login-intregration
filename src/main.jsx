import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layouts/Main'
import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'
import UserContext from './providers/UserContext'
import PrivateRoute from './privateRoute/PrivateRoute'
import Profile from './components/Profile'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'registration',
        element:<Registration></Registration>
      },
      {
        path:'profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
      <RouterProvider router={router}></RouterProvider>
    </UserContext>
  </React.StrictMode>,
)
