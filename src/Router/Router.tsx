import React from "react";

import { useStore } from "effector-react";

import { $auth } from "../models/auth";

import { UnLogged } from "./UnLogged";
import { Logged } from "./Logged";

export const Router = () => {
  const { isLoggedIn } = useStore($auth);

  return !isLoggedIn ? <UnLogged /> : <Logged />;
};
