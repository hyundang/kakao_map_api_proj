import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}
const InputForm = ({
  id,
  className,
  style,
  type,
  placeholder,
  value,
  onChange,
  labelText,
}: InputFormProps) => {
  return (
    <Container id={id} className={className}>
      <label>{labelText}</label>
      <input
        style={style}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};

export default InputForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  label {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 700;
  }

  input {
    width: 100%;
    font-size: 16px;
  }
`;
