import {Text, View} from 'react-native';
import {HomeStackScreenProps} from '../../navigations/types.ts';


const Details = ({route,navigation}:HomeStackScreenProps<'Details'>) => {

  return <View style={{flex:1,justifyContent:'center',alignItems: 'center'}}>
    <Text>Details Id : {route.params.detailsId}</Text>
  </View>;
};

export default Details;
