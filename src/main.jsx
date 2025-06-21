
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import AddBook from './Component/AddBook.jsx';
import Error from './Component/Page_Error/Error.jsx';
import './index.css';

import { Provider } from 'react-redux';
import store from './Component/Utils/BookStore.js';
import BrowseBook from './Component/BrowseBook.jsx';
import ViewDetails from './Component/ViewDetails.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
      {
        path: '/addbook',
        element: <AddBook />,
      },
      {
        path: '/browse',
        element: <BrowseBook />,
      },
      { path: "/browse/:id", 
        element: <ViewDetails /> },
  
  
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
