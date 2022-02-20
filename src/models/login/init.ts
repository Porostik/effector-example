import { forward, guard } from "effector";

import { setUserLogged } from "../auth";
import { setUser } from "../user";

import { $loginError, loginFx, resetLoginError } from "./index";

loginFx.use(async ({ login, password }) => {
  console.log(login, password);

  await new Promise<void>((resolve) =>
    setTimeout(() => {
      resolve();
    }, 2000)
  );

  // throw Error("Error");

  return {
    id: 1,
    name: "name",
    email: "email@gmail.com",
  };
});

forward({
  from: loginFx.done.map(({ result }) => result),
  to: setUser,
});

forward({
  from: loginFx.done.map(() => true),
  to: setUserLogged,
});

const isPending = loginFx.pending.map((pending) => pending);

$loginError.reset(resetLoginError);

guard({
  clock: loginFx,
  filter: isPending,
  target: resetLoginError,
});
