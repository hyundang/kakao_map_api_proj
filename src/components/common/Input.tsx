import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

const Input = ({
  id,
  className,
  style,
  value,
  type,
  onChange,
  onKeyDown,
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Container
      id={id}
      className={className}
      style={style}
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;

const Container = styled.input``;
