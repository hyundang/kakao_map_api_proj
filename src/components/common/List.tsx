import React, { HTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { UserDataProps } from "@interfaces/index";

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
      <div>{userData.alias}</div>
      <div>{userData.addressDetail}</div>
      <div>{userData.caution}</div>
      <button
        className="del_btn"
        onClick={(e) => {
          e.stopPropagation();
          onClickBtn();
        }}
      >
        {isTitle ? <b>추가</b> : "삭제"}
      </button>
    </ItemWrap>
  );
};

interface ListProps extends HTMLAttributes<HTMLElement> {
  userDataList: UserDataProps[];
  onClickCreateBtn: () => void;
  onClickDelBtn: (userId: number) => void;
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
    alias: "주소별칭",
    addressDetail: "상세주소",
    caution: "유의사항",
    x: "",
    y: "",
  };

  return (
    <Container id={id} className={className}>
      <ListItem isTitle userData={title} onClickBtn={onClickCreateBtn} />
      <div className="list_item_wrap">
        {userDataList.length === 0 ? (
          <div className="no_data">데이터가 존재하지 않습니다</div>
        ) : (
          userDataList.map((user) => (
            <ListItem
              key={user.id}
              id={`${user.id}`}
              userData={user}
              onClickBtn={() => onClickDelBtn(user.id)}
              onClickUser={() => onClickUser(user)}
            />
          ))
        )}
      </div>
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
    padding-top: 20px;
    text-align: center;
    font-size: 20px;
  }

  .list_item_wrap {
    width: 100%;
    height: 600px;
    overflow-y: scroll;
  }
`;

interface ItemWrapProps {
  isTitle: boolean;
}
const ItemWrap = styled.div<ItemWrapProps>`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 70px;
  ${({ isTitle }) =>
    isTitle &&
    css`
      overflow-y: scroll;
      height: 42px;
    `}

  > div {
    padding: 0 5px;
    border: 1px solid black;
    ${({ isTitle }) =>
      isTitle
        ? css`
            box-sizing: border-box;
            height: 40px;
            line-height: 40px;
            font-weight: 700;
            text-align: center;
            font-size: 16px;
          `
        : css`
            height: 55px;
            line-height: 40px;
            white-space: nowrap;
            overflow-x: scroll;
            overflow-y: hidden;
            font-weight: 400;
            text-align: start;
            font-size: 14px;
          `};
  }
`;
