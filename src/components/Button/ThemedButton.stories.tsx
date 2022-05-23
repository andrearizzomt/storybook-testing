import { ThemedButton } from "./ThemedButton";

export default {
  title: "Components/ThemedButton",
  component: ThemedButton,

  argTypes: {
    primary: { control: "boolean", defaultValue: true },
    btnBgColor: { control: "color" },
    btnTxtColor: { control: "color", defaultValue: "black" },
    btnHeight: { control: "text", defaultValue: "50px" },
    btnWidth: { control: "text", defaultValue: "150px" },
    btnBorderRadius: { control: "text", defaultValue: "10px" },
    btnBorder: {
      options: [
        "none",
        "dotted",
        "dashed",
        "solid",
        "double",
        "groove",
        "ridge",
        "inset",
        "outset",
        "hidden",
      ],
      control: { type: "select" },
      defaultValue: "solid",
    },
    btnBorderColor: { control: "color", defaultValue: "black" },
    btnBorderWidth: { control: "text", defaultValue: "2px" },
  },
};

export const DefaultThemedButton = (args: any) => <ThemedButton {...args} />;
