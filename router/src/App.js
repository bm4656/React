import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Video from './pages/Video';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Root from './pages/Root';
import VideoDetail from './pages/VideoDetail';

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
      {
        path: '/video/:videoId',
        element: <VideoDetail />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
