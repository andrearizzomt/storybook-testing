import styled from "@emotion/styled";

interface ThemedButtonProps {
  primary?: boolean;
  btnBgColor?: string;
  btnTxtColor?: string;
  btnHeight?: string;
  btnWidth?: string;
  btnBorderRadius?: string;
  btnBorder?: string;
  btnBorderColor?: string;
  btnBorderWidth?: string;
  onClick?: () => void;
}

export const ThemedButton = styled.button<ThemedButtonProps>`
  background-color: ${(props) => (props.primary ? "blue" : "")};
  background-color: ${(props) => props.btnBgColor};
  color: ${(props) => (props.primary ? "white" : "black")};
  color: ${(props) => props.btnTxtColor};
  height: ${(props) => props.btnHeight};
  width: ${(props) => props.btnWidth};
  border-radius: ${(props) => props.btnBorderRadius};
  border: ${(props) => (props.primary ? "solid" : "none")};
  border: ${(props) => props.btnBorder};
  border-color: ${(props) => props.btnBorderColor};
  border-width: ${(props) => props.btnBorderWidth};
`;
