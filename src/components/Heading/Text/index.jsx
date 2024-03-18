import React from "react";

const sizes = {
  xs: "text-[8px] font-normal",
  lg: "text-[25px] font-normal",
  s: "text-[11px] font-medium leading-[17px]",
  md: "text-sm font-normal leading-[21px]",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900_01 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
