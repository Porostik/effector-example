import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import { Login } from "../pages";

import { AppRoutes } from "./appRoutes";

export const UnLogged = () => (
  <Routes>
    <Route path={AppRoutes.login} element={<Login />} />
    <Route path="*" element={<Navigate to={AppRoutes.login} />} />
  </Routes>
);
