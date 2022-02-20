import React from "react";

import { useStore } from "effector-react";
import { SubmitHandler, useForm } from "react-hook-form";

import { $login, loginFx } from "../../models/login";

import { LoginFormFields } from "./Login.types";
import "./login.scss";
import { Card } from "../../components";

export const Login = () => {
  const { loading, error } = useStore($login);

  const { register, handleSubmit } = useForm<LoginFormFields>();

  const onSubmit: SubmitHandler<LoginFormFields> = (data) => {
    loginFx(data);
  };

  return (
    <div className="login">
      <Card title="Вход">
        <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="login__form-input"
            {...register("login", { required: true })}
            placeholder="Логин"
          />
          <input
            className="login__form-input"
            {...register("password", { required: true })}
            placeholder="Пароль"
            type="password"
          />
          <button className="login__form-submit" type="submit">
            {loading ? "Загрузка..." : "Войти"}
          </button>
          {error && <span className="form__error">{error.message}</span>}
        </form>
      </Card>
    </div>
  );
};
