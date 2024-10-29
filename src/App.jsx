import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './components/Home/Home';
import Popular from './components/Popular/Popular';
import UpComing from './components/UpComing/UpComing';
import TopRated from './components/TopRated/TopRated';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/popular',
    element: <Popular />,
  },
  {
    path: '/toprated',
    element: <TopRated />,
  },
  {
    path: '/upcoming',
    element: <UpComing />,
  },
]);


function App() { 

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
