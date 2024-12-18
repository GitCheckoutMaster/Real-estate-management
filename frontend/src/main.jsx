/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import { Provider } from 'react-redux'
import {store, persistor} from './store/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import Profile from './pages/Profile.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import UpdateProfile from './pages/UpdateProfile.jsx'
import ListPage from './pages/ListPage.jsx'
import AddProperty from './pages/AddProperty.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/list',
        element: <ListPage />
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: '/profile',
            element: <Profile />
          },
          {
            path: '/updateProfile',
            element: <UpdateProfile />
          },
          {
            path: '/add-property',
            element: <AddProperty />
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>,
)
