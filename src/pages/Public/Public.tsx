import React from "react";

import { useStore } from "effector-react";

import { $user } from "../../models/user";
import { logout } from "../../models/auth";
import { Card } from "../../components";

import "./public.scss";

export const Public = () => {
  const user = useStore($user);

  const onLogout = () => logout();

  return (
    <div className="public">
      <div className="public__head">
        <button className="public__logout" onClick={onLogout}>
          Выйти
        </button>
      </div>
      <div className="public__body">
        <Card title="User">
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </Card>
      </div>
    </div>
  );
};
