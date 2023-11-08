import { type ElementType } from "react";

interface ContainerProps {
  as: ElementType;
}

const Container = ({ as }: ContainerProps) => {
  const Container = as;
  return <Container />;
};

export default Container;
