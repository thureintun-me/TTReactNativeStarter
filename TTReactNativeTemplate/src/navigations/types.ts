import {StackScreenProps} from '@react-navigation/stack';
import {CompositeScreenProps} from '@react-navigation/native';
import {DrawerScreenProps} from '@react-navigation/drawer';



export type DrawerParamList = {
   Home:undefined,
}

export type RootDrawerProps<T extends keyof DrawerParamList> =
  StackScreenProps<DrawerParamList, T>;

export type HomeStackParamList = {
   Home:undefined,
   Details:{detailsId:String}
   Counter:undefined
}

export type HomeDrawerScreenProps<T extends keyof HomeStackParamList> =
  CompositeScreenProps<
    DrawerScreenProps<HomeStackParamList, T>,
    RootDrawerProps<keyof DrawerParamList>
  >;



export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  StackScreenProps<HomeStackParamList, T>;
