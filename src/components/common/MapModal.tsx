import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Map } from ".";

interface MapModalProps {
  x: string;
  y: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const MapModal = ({ x, y, isOpen, setIsOpen }: MapModalProps) => {
  return isOpen ? (
    <>
      <Background onClick={() => setIsOpen(false)} />
      <Container>
        <Map isClickPossible={false} latLng={{ x, y }} />
      </Container>
    </>
  ) : (
    <></>
  );
};

export default MapModal;

const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: 100%;
  max-width: 900px;
  min-width: 450px;
  height: 400px;
`;
