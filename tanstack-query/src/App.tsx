import './App.css';
import Home from './components/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Create a client
const queryClient = new QueryClient();
function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Home />
    </QueryClientProvider>
  );
}

export default App;
