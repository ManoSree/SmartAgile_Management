import React from "react";

const sizes = {
  "2xl": "text-3xl font-semibold",
  xl: "text-[25px] font-semibold",
  s: "text-[11px] font-semibold",
  md: "text-[13px] font-semibold",
  xs: "text-[10px] font-semibold",
  lg: "text-lg font-semibold",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900_01 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
