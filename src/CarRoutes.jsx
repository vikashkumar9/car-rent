import React from "react";
import { Routes, Route } from "react-router-dom";
import Car from "./components/CarData/Car";
import { Error } from "./components/Errorpage/Error";
export const CarRoutes = () => {
  return (
    <Routes>
      <Route path={":page"} element={<Car />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
};
