import styled from "styled-components";

export const Container = styled.div`
  max-width: 35%;
  margin: 25% auto;
  padding: 20px;
  border: 1px solid #000;
  border-radius: 10px;
  box-shadow: 0 0 8px 1px #00003f, 8px 8px 16px 2px #00003f;
`;

export const H2 = styled.h2`
  font-family: "Open Sans", sans-serif;
`;

export const Button = styled.button`
  background-color: #f3726c;
  color: black;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  margin-left: 20px;
  border-radius: 5px;
  height: 37px;
  font-family: "Open Sans", sans-serif;

  &:hover {
    color: white;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Ul = styled.ul`
  padding: 0;
  margin-left: 17px;
`;

export const Li = styled.li`
  color: blue;
  margin-left: 0;
  font-family: "Kumbh Sans", sans-serif;
  font-weight: 500;
  list-style-type: circle;
  flex-wrap: wrap;
`;
