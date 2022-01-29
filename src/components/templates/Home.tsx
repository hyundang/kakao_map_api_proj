import { InputForm, List } from "@components/common";
import { UserDataProps } from "@interfaces/User";
import React from "react";
import styled from "styled-components";

interface HomeProps {
  onSearch: () => void;
  userDataList: UserDataProps[];
  onClickCreateBtn: () => void;
  onClickDelBtn: () => void;
  onClickAddListBtn: () => void;
  onClickUser: (data: UserDataProps) => void;
}
const Home = ({
  onSearch,
  userDataList,
  onClickCreateBtn,
  onClickDelBtn,
  onClickAddListBtn,
  onClickUser,
}: HomeProps) => {
  return (
    <Container>
      <StyledInputForm onSearch={onSearch} />
      <StyledList
        userDataList={userDataList}
        onClickCreateBtn={onClickCreateBtn}
        onClickDelBtn={onClickDelBtn}
        onClickUser={onClickUser}
      />
      <div className="btn_wrap">
        <button className="add_list_btn" onClick={onClickAddListBtn}>
          계속 찾기
        </button>
      </div>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  padding: 100px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .btn_wrap {
    width: 100%;
    max-width: 900px;
    display: flex;
    justify-content: flex-end;
    .add_list_btn {
      width: 100px;
      height: 50px;
    }
  }
`;

const StyledInputForm = styled(InputForm)`
  width: 100%;
  margin-bottom: 50px;

  input {
    width: 100%;
    max-width: 800px;
    height: 50px;
  }
`;

const StyledList = styled(List)`
  width: 100%;
  max-width: 900px;
  margin-bottom: 50px;
`;
