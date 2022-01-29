import {
  AddrDataProps,
  LatLngProps,
  ReturnAddrApiDataProps,
} from "@interfaces/index";
import React, { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { SearchForm } from ".";

interface MapSearchModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setUserAddr: (addr: string) => void;
  getAddress: (
    searchValue: string,
    pageIndex: number
  ) => Promise<ReturnAddrApiDataProps | undefined>;
  setLatLng: Dispatch<SetStateAction<LatLngProps | undefined>>;
}
const MapSearchModal = ({
  isOpen,
  setIsOpen,
  setUserAddr,
  getAddress,
  setLatLng,
}: MapSearchModalProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [addrList, setAddrList] = useState<AddrDataProps[]>([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [isListEnd, setIsListEnd] = useState(false);

  const handleSearch = async (data: string) => {
    setPageIndex(1);
    if (data === "") {
      setIsSearched(false);
      setAddrList([]);
      return;
    }
    const res = await getAddress(searchValue, pageIndex);
    if (res) {
      setAddrList(res.resData);
      setIsSearched(true);
      if (res.isEnd) setIsListEnd(true);
      else setIsListEnd(false);
      return;
    }
    alert("주소 검색 실패!");
  };

  const handleClickAddListBtn = async () => {
    const res = await getAddress(searchValue, pageIndex + 1);
    if (res) {
      setPageIndex(pageIndex + 1);
      setAddrList(addrList.concat(res.resData));
      if (res.isEnd) setIsListEnd(true);
      else setIsListEnd(false);
      return;
    }
    alert("주소 검색 실패!");
  };

  const handleClickAddr = (addr: string, x: string, y: string) => {
    setUserAddr(addr);
    setLatLng({
      x,
      y,
    });
    setIsOpen(false);
  };

  return isOpen ? (
    <>
      <Background onClick={() => setIsOpen(false)} />
      <ModalWrap>
        <StyledSearchForm
          onSearch={() => handleSearch(searchValue)}
          type="search"
          placeholder="검색어를 입력해주세요"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {isSearched && (
          <>
            <div className="list_wrap">
              {addrList.map((addr, idx) => (
                <div
                  key={idx}
                  className="list_item"
                  onClick={() =>
                    handleClickAddr(addr.address_name, addr.x, addr.y)
                  }
                >{`${addr.address_name} ${
                  addr.road_address?.building_name || ""
                }`}</div>
              ))}
            </div>
            <button onClick={handleClickAddListBtn} disabled={isListEnd}>
              계속 찾기
            </button>
          </>
        )}
      </ModalWrap>
    </>
  ) : (
    <></>
  );
};

export default MapSearchModal;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalWrap = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: 100%;
  max-width: 900px;
  min-width: 450px;
  height: 500px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  .list_wrap {
    width: 90%;
    height: 400px;
    overflow-y: scroll;

    .list_item {
      &:hover {
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }
`;

const StyledSearchForm = styled(SearchForm)`
  width: 90%;
  margin: 20px 0;

  input {
    width: 100%;
    max-width: 800px;
    height: 50px;
  }
`;
