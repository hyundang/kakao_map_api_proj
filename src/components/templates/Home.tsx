import { SearchForm, List, MapModal } from "@components/common";
import { UserDataProps } from "@interfaces/index";
import React, { useState } from "react";
import styled from "styled-components";

interface HomeProps {
  onSearch: (searchValue: string) => void;
  userDataList: UserDataProps[];
  onClickCreateBtn: () => void;
  onClickDelBtn: (userId: number) => void;
}
const Home = ({
  onSearch,
  userDataList,
  onClickCreateBtn,
  onClickDelBtn,
}: HomeProps) => {
  const [isMapOpened, setIsMapOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [userData, setUserData] = useState<UserDataProps>();

  const handleClickUser = (userData: UserDataProps) => {
    setIsMapOpened(true);
    setUserData(userData);
  };

  return (
    <>
      <Container>
        <StyledSearchForm
          onSearch={() => onSearch(searchValue)}
          type="search"
          placeholder="검색어를 입력해주세요"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <StyledList
          userDataList={userDataList}
          onClickCreateBtn={onClickCreateBtn}
          onClickDelBtn={onClickDelBtn}
          onClickUser={handleClickUser}
        />
      </Container>
      <MapModal
        isOpen={isMapOpened}
        setIsOpen={setIsMapOpened}
        x={userData?.x || ""}
        y={userData?.y || ""}
      />
    </>
  );
};

export default Home;

const Container = styled.div`
  width: 100vw;
  box-sizing: border-box;
  padding: 70px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .btn_wrap {
    width: 100%;
    max-width: 1040px;
    display: flex;
    justify-content: flex-end;
    .add_list_btn {
      width: 100px;
      height: 50px;
    }
  }
`;

const StyledSearchForm = styled(SearchForm)`
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
  max-width: 1040px;
  height: 610px;
  margin-bottom: 50px;
`;
