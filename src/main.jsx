import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import Home from "./pages/Home.jsx"
import Login, { loginAction } from './pages/Login.jsx'
import Signup, { signUpAction } from './pages/Signup.jsx'

import { AuthProvider } from './contexts/Auth.jsx'
import { Protected } from './components/Protected.jsx'
import { CheckSession } from './components/CheckSession.jsx'
import { Notes, notesLoader, createNoteAction } from './components/Notes.jsx'
import { NoteModal, noteModalLoader, noteModalAction } from './components/NoteModal.jsx'
import ArchivedNotes, { archivedNotesLoader } from './components/ArchivedNotes.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected> <Home /> </Protected>,
    // action: createNoteAction,
    children: [
      {
        path: 'notes',
        loader: notesLoader,
        action: createNoteAction,
        element: <Notes />,
        children: [ 
          {
            path: ':id',
            element: <NoteModal />,
            loader: noteModalLoader,
            action: noteModalAction
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
        element: <ArchivedNotes />,
        loader: archivedNotesLoader
      }
    ],
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
