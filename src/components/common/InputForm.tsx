import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch: () => void;
}
const InputForm = ({
  id,
  className,
  style,
  value,
  type,
  onChange,
  onSearch,
}: InputFormProps) => {
  return (
    <Container id={id} className={className}>
      <input
        style={style}
        type={type}
        value={value}
        onChange={onChange}
        onKeyDown={onSearch}
      />
      <button className="search_btn" onClick={onSearch}>
        검색
      </button>
    </Container>
  );
};

export default InputForm;

const Container = styled.div`
  display: flex;
  flex-direction: row;

  input {
    margin-right: 20px;
    font-size: 20px;
  }

  .search_btn {
    width: 100px;
    height: 50px;
  }
`;
