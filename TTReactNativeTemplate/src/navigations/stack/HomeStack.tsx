import {createStackNavigator} from '@react-navigation/stack';
import {HomeStackParamList} from '../types.ts';
import HomeScreen from '../../screens/home/HomeScreen.tsx';
import Details from '../../screens/details/Details.tsx';
import Counter from '../../screens/counter/Counter.tsx';

const Stack = createStackNavigator<HomeStackParamList>();
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name={'Home'} component={HomeScreen} />
      <Stack.Screen name={'Details'} component={Details} />
      <Stack.Screen name={'Counter'} component={Counter}/>
    </Stack.Navigator>
  );
};

export default HomeStack;
