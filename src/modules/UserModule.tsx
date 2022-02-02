import { UserDataProps } from "@interfaces/index";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { User } from "./states";

const UserModule = () => {
  const [userDataList, setUserDataList] = useRecoilState(
    User.UserDataListState
  );
  const [searchedUserDataList, setSearchedUserDataList] = useState<
    UserDataProps[]
  >([]);
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = (searchValue: string) => {
    if (searchValue === "") {
      setIsSearched(false);
      return;
    }

    setSearchedUserDataList(
      userDataList.filter(
        (user) =>
          user.address.includes(searchValue) ||
          user.alias.includes(searchValue) ||
          user.addressDetail.includes(searchValue)
      )
    );
    setIsSearched(true);
  };

  const handleClickDelBtn = (userId: number) => {
    setUserDataList(userDataList.filter((user) => user.id !== userId));
    alert("유저를 삭제하였습니다.");
  };

  return {
    data: isSearched ? searchedUserDataList : userDataList,
    handleSearch,
    handleClickDelBtn,
  };
};

export default UserModule;
