import {
  LatLngProps,
  ReturnAddrApiDataProps,
  UserDataProps,
} from "@interfaces/index";
import React, { HTMLAttributes } from "react";
import { useState } from "react";
import styled from "styled-components";
import { InputForm, Map, MapSearchModal } from ".";

interface UserFormProps extends HTMLAttributes<HTMLElement> {
  value: UserDataProps;
  onClickCreateBtn: () => void;
  onChangeValue: (
    key: "address" | "addressDetail" | "alias" | "caution" | "x" | "y",
    value: string
  ) => void;
  getAddress: (
    searchValue: string,
    pageIndex: number
  ) => Promise<ReturnAddrApiDataProps | undefined>;
}
const UserForm = ({
  id,
  className,
  value,
  onClickCreateBtn,
  onChangeValue,
  getAddress,
}: UserFormProps) => {
  const [isMapSearchOpen, setIsMapSearchOpen] = useState(false);
  const [latLng, setLatLng] = useState<LatLngProps>();

  const handleClickSearchBtn = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    onChangeValue("x", latLng?.x || "");
    onChangeValue("y", latLng?.y || "");
    setIsMapSearchOpen(true);
  };

  return (
    <>
      <Container id={id} className={className}>
        <button className="addr_search_btn" onClick={handleClickSearchBtn}>
          주소 검색하기
        </button>
        <Map latLng={latLng} isClickPossible={true} />
        <StyledInputForm
          labelText="주소별칭"
          type="text"
          placeholder="주소별칭을 입력해주세요"
          value={value.alias}
          onChange={(e) => onChangeValue("alias", e.target.value)}
        />
        <StyledInputForm
          labelText="상세주소"
          type="text"
          placeholder="상세주소를 입력해주세요"
          value={value.addressDetail}
          onChange={(e) => onChangeValue("addressDetail", e.target.value)}
        />
        <StyledInputForm
          labelText="유의사항"
          type="text"
          placeholder="배송시 유의사항을 입력해주세요"
          value={value.caution}
          onChange={(e) => onChangeValue("caution", e.target.value)}
        />
        <button className="create_btn" onClick={onClickCreateBtn}>
          등록
        </button>
      </Container>
      <MapSearchModal
        isOpen={isMapSearchOpen}
        setIsOpen={setIsMapSearchOpen}
        setUserAddr={(addr: string) => onChangeValue("address", addr)}
        getAddress={getAddress}
        setLatLng={setLatLng}
      />
    </>
  );
};

export default UserForm;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  .addr_search_btn {
    width: 200px;
    height: 50px;
    margin-bottom: 30px;
  }

  .create_btn {
    width: 100px;
    height: 50px;
    margin-top: 20px;
  }
`;

const StyledInputForm = styled(InputForm)`
  width: 100%;
  max-width: 900px;
  margin-bottom: 20px;
  input {
    height: 40px;
  }
`;
