import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerParamList} from '../types.ts';
import HomeStack from '../stack/HomeStack.tsx';


const Drawer = createDrawerNavigator<DrawerParamList>();
const AppDrawer = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name={"Home"} component={HomeStack} />
    </Drawer.Navigator>
  );
}

export default AppDrawer;
