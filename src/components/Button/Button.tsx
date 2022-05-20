import React from "react";

interface ButtonProps {
  btnBgColor: string;
  btnTxtColor: string;
  btnHeight: string;
  btnWidth: string;
  btnBorderRadius: string;
  btnBorder: string;
  btnBorderColor: string;
  btnBorderWidth: string;
  btnTxtlabel: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  btnBgColor,
  btnTxtColor,
  btnHeight,
  btnWidth,
  btnBorderRadius,
  btnBorder,
  btnBorderColor,
  btnBorderWidth,
  btnTxtlabel,
  onClick,
}) => {
  return (
    <button
      style={{
        backgroundColor: btnBgColor,
        color: btnTxtColor,
        height: btnHeight,
        width: btnWidth,
        borderRadius: btnBorderRadius,
        border: btnBorder,
        borderColor: btnBorderColor,
        borderWidth: btnBorderWidth,
      }}
      onClick={onClick}
    >
      {btnTxtlabel}
    </button>
  );
};

export default Button;
