import { User } from "firebase/auth";

export default interface IUser extends User {
  uid: string;
}
