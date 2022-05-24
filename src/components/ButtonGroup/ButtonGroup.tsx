import React from "react";
import { ThemedButton } from "../Button/ThemedButton";
// import { ThemedButton } from "../Button/ThemedButton.styles";
import { ButtonGroupWrapper } from "./ButtonGroup.styles";

interface ButtonGroupProps {
  buttons: Array<{ label: string }>;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  return (
    <ButtonGroupWrapper>
      {props.buttons.map((button) => (
        <ThemedButton
          primary={true}
          btnHeight="50px"
          btnWidth="150px"
          btnBorderRadius="10px"
          btnBorder="solid"
          btnBorderColor="black"
          btnBorderWidth="2px"
        >
          {button.label}
        </ThemedButton>
      ))}

      {props.buttons.map((button) => (
        <ThemedButton
          primary={false}
          size="small"
          // btnHeight="50px"
          // btnWidth="150px"
          btnBorderRadius="10px"
        >
          {button.label}
        </ThemedButton>
      ))}
    </ButtonGroupWrapper>
  );
};
