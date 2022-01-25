import { InputForm, List } from "@components/common";
import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <StyledInputForm onSearch={() => {}} />
      <List
        userDataList={[]}
        onClickCreateBtn={() => {}}
        onClickDelBtn={() => {}}
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 100px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInputForm = styled(InputForm)`
  width: 100%;
  input {
    width: 100%;
    max-width: 800px;
    height: 50px;
  }
`;
