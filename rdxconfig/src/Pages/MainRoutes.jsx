import React from "react";
import { Route, Routes } from "react-router-dom";
import Counter from "../Components/Counter";
import PrivateRoute from "../Components/PrivateRoute";
import Todo from "../Components/Todo";
import Home from "./Home";
import Login from "./Login";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/counter" element={<Counter />} />
      <Route
        path="/todo"
        element={
          <PrivateRoute>
            <Todo />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
}

export default MainRoutes;
