import { Home } from "@components/templates";
import UserModule from "@modules/UserModule";
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const user = UserModule();

  const handleClickCreateBtn = () => navigate("/register");

  return (
    <Home
      onSearch={user.handleSearch}
      userDataList={user.data}
      onClickCreateBtn={handleClickCreateBtn}
      onClickDelBtn={user.handleClickDelBtn}
    />
  );
};

export default HomePage;
