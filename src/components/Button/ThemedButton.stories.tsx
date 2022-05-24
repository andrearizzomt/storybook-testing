import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemedButton } from "./ThemedButton";

export default {
  title: "Components/ThemedButton",
  component: ThemedButton,

  argTypes: {
    primary: { control: "boolean", defaultValue: true },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
      defaultValue: "small",
    },
    btnBgColor: { control: "color" },
    btnTxtColor: { control: "color", defaultValue: "black" },
    btnHeight: { control: "text" },
    btnWidth: { control: "text" },
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
} as ComponentMeta<typeof ThemedButton>;

// export const DefaultThemedButton = (args) => <ThemedButton {...args} />;

const Template: ComponentStory<typeof ThemedButton> = (args) => (
  <ThemedButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const NotPrimary = Template.bind({});
NotPrimary.args = {
  primary: false,
};

export const Small = Template.bind({});
Small.args = {
  primary: false,
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  primary: false,
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  primary: false,
  size: "large",
};
