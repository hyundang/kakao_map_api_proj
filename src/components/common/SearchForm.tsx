import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface SearchFormProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch: () => void;
}
const SearchForm = ({
  id,
  className,
  style,
  type,
  placeholder,
  value,
  onChange,
  onSearch,
}: SearchFormProps) => {
  return (
    <Container id={id} className={className}>
      <input
        style={style}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
      />
      <button className="search_btn" onClick={onSearch}>
        검색
      </button>
    </Container>
  );
};

export default SearchForm;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  input {
    margin-right: 20px;
    font-size: 20px;
  }

  .search_btn {
    width: 100px;
    height: 50px;
  }
`;
