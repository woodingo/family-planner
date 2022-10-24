import { createStore } from 'effector';
import IUser from '@interfaces/IUser';
import { setUser } from './events';

const $user = createStore<IUser | null>(null).on(
  setUser,
  (_, payload) => payload,
);

export default $user;
