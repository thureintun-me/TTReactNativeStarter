// Create a client
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import RootNavigator from './src/navigations/RootNavigator.tsx';
import {Provider} from 'react-redux';
import {store} from './src/store/store.ts';
import 'react-native-gesture-handler';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RootNavigator />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
