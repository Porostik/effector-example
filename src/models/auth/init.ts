import { forward } from "effector";

import { resetUser, setUser } from "../user";

import { $auth, authInitFx, logout, setUserLogged } from "./index";

authInitFx.use(async () => {
  await new Promise<void>((resolve) =>
    setTimeout(() => {
      resolve();
    }, 2000)
  );

  return {
    id: 1,
    name: "name",
    email: "email@example.com",
  };
});

$auth
  .on(authInitFx.done, () => ({
    isLoggedIn: true,
    isReady: true,
  }))

  .on(setUserLogged, (_, payload) => ({
    isLoggedIn: payload,
    isReady: true,
  }))

  .on(logout, (state) => ({
    ...state,
    isLoggedIn: false,
  }));

forward({
  from: authInitFx.done.map(({ result }) => result),
  to: setUser,
});

forward({
  from: logout,
  to: resetUser,
});
