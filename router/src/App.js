import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Video from './pages/Video';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/video',
        element: <Video />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
