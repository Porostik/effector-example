import { createEvent, createStore } from "effector";

import { User } from "../../types";

export const setUser = createEvent<User>();
export const resetUser = createEvent();

export const $user = createStore<User>({} as User);
