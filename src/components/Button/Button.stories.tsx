import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,

  argTypes: {
    btnBgColor: { control: "color", defaultValue: "tomato" },
    btnTxtColor: { control: "color", defaultValue: "white" },
    btnHeight: { control: "text", defaultValue: "30px" },
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
    btnTxtlabel: { control: "text", defaultValue: "Press Me" },
  },
};

export const DefaultButton = (args: any) => <Button {...args} />;
