import { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  element: "button";
}

interface AnchorProps extends ComponentPropsWithoutRef<"a"> {
  element: "anchor";
}

const Button = (props: ButtonProps | AnchorProps) => {
  // const {element, ...otherProps}
  if (props.element === "anchor") {
    return <a className="button" {...props}></a>;
  }
  return <button className="button" {...props}></button>;
};

export default Button;
