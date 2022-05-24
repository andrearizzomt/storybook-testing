import styled from "@emotion/styled";

interface ButtonGroupWrapperProps {}

export const ButtonGroupWrapper = styled.div<ButtonGroupWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  background-color: tomato;
  padding: 25px;
`;
