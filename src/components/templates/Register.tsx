import { UserForm } from "@components/common";
import { ReturnAddrApiDataProps, UserDataProps } from "@interfaces/index";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface RegisterProps {
  userData: UserDataProps;
  onChangeUserData: (
    key: "address" | "addressDetail" | "alias" | "caution",
    value: string
  ) => void;
  onClickCreateBtn: () => void;
  getAddress: (
    searchValue: string,
    pageIndex: number
  ) => Promise<ReturnAddrApiDataProps | undefined>;
}
const Register = ({
  userData,
  onChangeUserData,
  onClickCreateBtn,
  getAddress,
}: RegisterProps) => {
  const navigate = useNavigate();
  const handleClickBackBtn = () => navigate("/");
  return (
    <Container>
      <button className="back_btn" onClick={handleClickBackBtn}>
        뒤로
      </button>
      <StyledUserForm
        value={userData}
        onChangeValue={onChangeUserData}
        onClickCreateBtn={onClickCreateBtn}
        getAddress={getAddress}
      />
    </Container>
  );
};

export default Register;

const Container = styled.div`
  width: 100vw;
  box-sizing: border-box;
  padding: 100px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .back_btn {
    position: absolute;
    top: 20px;
    left: 50px;
    width: 100px;
    height: 50px;
  }
`;

const StyledUserForm = styled(UserForm)`
  width: 100%;
  margin-bottom: 50px;
  align-items: center;
`;
