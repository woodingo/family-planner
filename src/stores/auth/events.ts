import { createEvent } from 'effector';
import IUser from '@interfaces/IUser';

export const setUser = createEvent<IUser | null>('set user');
