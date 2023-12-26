import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Home from "./pages/Home.jsx"
import Login, {loginAction} from './pages/Login.jsx'
import Signup, {signUpAction} from './pages/Signup.jsx'

import { AuthProvider } from './contexts/Auth.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />,
    action: loginAction
  },
  {
    path: "/signup",
    element: <Signup />,
    action: signUpAction
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
