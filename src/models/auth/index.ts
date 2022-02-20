import { createEffect, createEvent, createStore } from "effector";

import { User } from "../../types";

interface AuthInitialState {
  isLoggedIn: boolean;
  isReady: boolean;
}

export const authInitFx = createEffect<void, User>();

export const setUserLogged = createEvent<boolean>();

export const $auth = createStore<AuthInitialState>({
  isLoggedIn: false,
  isReady: false,
});

export const logout = createEvent();
