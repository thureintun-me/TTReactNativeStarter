import {StackScreenProps} from '@react-navigation/stack';

export type HomeStackParamList = {
   Home:undefined,
   Details:{detailsId:String}
   Counter:undefined
}

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  StackScreenProps<HomeStackParamList, T>;
