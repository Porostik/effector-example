import React from "react";

import { useStore } from "effector-react";
import { useEffectOnce } from "react-use";

import { Router } from "./Router";
import { $auth, authInitFx } from "./models/auth";
import "./app.scss";

export const App = () => {
  const { isReady } = useStore($auth);

  useEffectOnce(() => {
    authInitFx();
  });

  return isReady ? <Router /> : <h1>Loading</h1>;
};
