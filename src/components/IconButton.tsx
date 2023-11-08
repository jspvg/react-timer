import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  type ElementType,
} from "react";

interface IconButtonProps extends ComponentPropsWithoutRef<"button"> {
  icon: ElementType;
  children: ReactNode;
}

const IconButton = ({ icon: Icon, children, ...props }: IconButtonProps) => {
  return (
    <button {...props}>
      <span>
        <Icon />
      </span>
      <span>{children}</span>
    </button>
  );
};

export default IconButton;
