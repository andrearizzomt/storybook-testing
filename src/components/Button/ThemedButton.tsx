import styled from "@emotion/styled";

interface ThemedButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
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
  background-color: ${(props) => (props.primary ? "blue" : "silver")};
  background-color: ${(props) => props.btnBgColor};
  color: ${(props) => (props.primary ? "white" : "black")};
  color: ${(props) => props.btnTxtColor};
  height: ${(props) =>
    props.size === "small"
      ? "30px"
      : props.size === "medium"
      ? "60px"
      : props.size === "large"
      ? "90px"
      : "25px"};
  height: ${(props) => props.btnHeight};
  width: ${(props) =>
    props.size === "small"
      ? "100px"
      : props.size === "medium"
      ? "125px"
      : props.size === "large"
      ? "175px"
      : "150px"};
  width: ${(props) => props.btnWidth};
  border-radius: ${(props) => props.btnBorderRadius};
  border: ${(props) => (props.primary ? "solid" : "none")};
  border: ${(props) => props.btnBorder};
  border-color: ${(props) => props.btnBorderColor};
  border-width: ${(props) => props.btnBorderWidth};
`;
