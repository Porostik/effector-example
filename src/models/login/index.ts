import { combine, createEffect, createEvent, restore } from "effector";

import { User } from "../../types";

export const loginFx = createEffect<
  { login: string; password: string },
  User
>();

export const $loginError = restore(loginFx.failData, null);

export const $login = combine({
  error: $loginError,
  loading: loginFx.pending,
});

export const resetLoginError = createEvent();
