import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import Home, { createNoteAction,  tempLoader, Temp } from "./pages/Home.jsx"
import Login, { loginAction } from './pages/Login.jsx'
import Signup, { signUpAction } from './pages/Signup.jsx'

import { AuthProvider } from './contexts/Auth.jsx'
import { Protected } from './components/Protected.jsx'
import { CheckSession } from './components/CheckSession.jsx'
import { Notes, notesLoader } from './components/Notes.jsx'
import { NoteModal, noteModalLoader } from './components/NoteModal.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected> <Home /> </Protected>,
    
    children: [
      {
        path: 'notes',
        loader: notesLoader,
        element: <Notes />,
        children: [
          {
            path: ':id',
            element: <NoteModal />,
            loader: noteModalLoader
          }
        ]

      },
      {
        path: "trash",
        element: <p>trash</p>
      },
      {
        path: "reminders",
        element: <p>reminders</p>
      },
      {
        path: "archive",
        element: <p>archive</p>
      }
    ],
    action: createNoteAction,
  },
  {
    path: "/login",
    element: <CheckSession> <Login /> </CheckSession>,
    action: loginAction
  },
  {
    path: "/signup",
    element: <CheckSession>  <Signup /> </CheckSession>,
    action: signUpAction
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
