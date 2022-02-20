import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import { Public } from "../pages";

export const Logged = () => (
  <Routes>
    <Route index element={<Public />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);
