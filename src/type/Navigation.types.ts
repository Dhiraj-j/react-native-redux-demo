import {User} from './User.types';

export type RootStackParamList = {
  Home: undefined;
  UserDetails: {user: User};
};
