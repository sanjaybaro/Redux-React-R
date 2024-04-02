import React from "react";
import { Route, Routes } from "react-router-dom";
import Counter from "../Components/Counter";
import Todo from "../Components/Todo";
import Login from "./Login";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
}

export default MainRoutes;
