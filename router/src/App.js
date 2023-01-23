import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Video from './pages/Video';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/video',
    element: <Video />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
