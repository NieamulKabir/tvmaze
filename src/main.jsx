import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RouterProvider } from 'react-router-dom';
import routes from './routes/route.jsx';
import { Toaster } from 'react-hot-toast';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
        <Toaster />
      </QueryClientProvider>
  </React.StrictMode>,
)
