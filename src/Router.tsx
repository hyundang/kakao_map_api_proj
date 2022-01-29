import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { HomePage, RegisterPage } from "@pages/index";

const Router = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          element={
            <ForbiddenComponent>
              <p>404 Not Found</p>
            </ForbiddenComponent>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

const ForbiddenComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-size: 20px;
`;
