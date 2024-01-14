import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MantineProvider } from '@mantine/core';
import { ApolloProvider } from '@apollo/client';
import { client } from './apolloClient.ts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Chatwindow from './components/Chatwindow.tsx';
import RoomList from './components/RoomList.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/chatrooms",
        element: <RoomList />
      },
      {
        path: "/chatrooms/:id",
        element: <Chatwindow />
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <MantineProvider> */}
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
        {/* <App /> */}
      </ApolloProvider>
    {/* </MantineProvider> */}
  </React.StrictMode>,
)
