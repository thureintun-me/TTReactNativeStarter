

// Create a client
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import RootNavigator from './src/navigations/RootNavigator.tsx';

const queryClient = new QueryClient()

const App = () =>{

  return <QueryClientProvider client={queryClient}>
    <RootNavigator />
  </QueryClientProvider>
}

export default App;
