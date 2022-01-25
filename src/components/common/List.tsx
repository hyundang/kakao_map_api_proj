import React, { HTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { UserDataProps } from "@interfaces/User";

interface ListItemPrps extends HTMLAttributes<HTMLElement> {
  userData: UserDataProps;
  isTitle?: boolean;
  onClickBtn: () => void;
  onClickUser?: () => void;
}
const ListItem = ({
  id,
  className,
  userData,
  isTitle = false,
  onClickBtn,
  onClickUser,
}: ListItemPrps) => {
  return (
    <ItemWrap
      id={id}
      className={className}
      isTitle={isTitle}
      onClick={onClickUser}
    >
      <div>{userData.address}</div>
      <div>{userData.company}</div>
      <div>{userData.addressDetail}</div>
      <div>{userData.caution}</div>
      <button className="del_btn" onClick={onClickBtn}>
        {isTitle ? "추가" : "삭제"}
      </button>
    </ItemWrap>
  );
};

interface ListProps extends HTMLAttributes<HTMLElement> {
  userDataList: UserDataProps[];
  onClickCreateBtn: () => void;
  onClickDelBtn: () => void;
  onClickUser: (data: UserDataProps) => void;
}
const List = ({
  id,
  className,
  userDataList,
  onClickCreateBtn,
  onClickDelBtn,
  onClickUser,
}: ListProps) => {
  const title: UserDataProps = {
    id: -1,
    address: "주소",
    company: "회사",
    addressDetail: "상세주소",
    caution: "유의사항",
  };

  return (
    <Container id={id} className={className}>
      <ListItem isTitle userData={title} onClickBtn={onClickCreateBtn} />
      {userDataList.length === 0 ? (
        <div className="no_data">데이터가 존재하지 않습니다</div>
      ) : (
        userDataList.map((user, idx) => (
          <ListItem
            key={idx}
            id={`${idx}`}
            userData={user}
            onClickBtn={onClickDelBtn}
            onClickUser={() => onClickUser(user)}
          />
        ))
      )}
    </Container>
  );
};

export default List;

const Container = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .no_data {
    width: 100%;
    height: 40px;
    margin: 20px;
    text-align: center;
    font-size: 20px;
  }
`;

interface ItemWrapProps {
  isTitle: boolean;
}
const ItemWrap = styled.div<ItemWrapProps>`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 100px;

  > div {
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    overflow: hidden;
    border: 1px solid black;
    line-height: 40px;
    ${({ isTitle }) =>
      isTitle
        ? css`
            font-weight: 700;
            text-align: center;
            font-size: 20px;
          `
        : css`
            font-weight: 400;
            text-align: start;
            font-size: 16px;
          `};
  }
`;
