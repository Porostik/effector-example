import { $user, resetUser, setUser } from "./index";

$user.on(setUser, (_, payload) => payload).reset(resetUser);
