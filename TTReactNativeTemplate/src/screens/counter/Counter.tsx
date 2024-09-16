import {View, Text, Pressable} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import {decrement, increment, incrementByAmount} from '../../features/counter/counterSlice.ts';

const Counter = () => {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();
  // @ts-ignore
  return (
    <View>
      <Text>{count}</Text>
      <Pressable onPress={()=>dispatch(increment())}>
        <Text>Increase</Text>
      </Pressable>
      <Pressable onPress={()=>dispatch(decrement())}>
        <Text>Decrease</Text>
      </Pressable>
      <Pressable onPress={()=>dispatch(incrementByAmount(20))}>
        <Text>Increase By 20</Text>
      </Pressable>
    </View>
  );
};

export default Counter;
