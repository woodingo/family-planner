import { doAuth, logout } from "@api/auth";
import $user from "@stores/auth/user";
import { Button } from "antd-mobile";
import { useStore } from "effector-react";
import React, { FunctionComponent } from "react";
import css from "./UserPage.module.css";

interface UserPageProps {}

const UserPage: FunctionComponent<UserPageProps> = () => {
  const user = useStore($user);

  if (!user)
    return (
      <Button color="primary" onClick={doAuth}>
        do auth
      </Button>
    );

  return (
    <div className={css.root}>
      <div>
        <img className={css.ava} src={user.photoURL || undefined}></img>
      </div>
      <div>{user.uid}</div>
      <div>
        <Button onClick={logout}>logout</Button>
      </div>
    </div>
  );
};

export default UserPage;
