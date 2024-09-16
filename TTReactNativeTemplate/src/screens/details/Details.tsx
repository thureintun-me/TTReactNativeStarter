import {Text, View} from 'react-native';
import {HomeDrawerScreenProps} from '../../navigations/types.ts';

const Details = ({route}: HomeDrawerScreenProps<'Details'>) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Details Id : {route.params.detailsId}</Text>
    </View>
  );
};

export default Details;
