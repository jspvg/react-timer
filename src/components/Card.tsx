import { type ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
  actions: ReactNode;
}

const Card = ({ title, actions, children }: CardProps) => {
    return (
        <section>
            <h2>{title}</h2>
            {actions}
            {children}
        </section>
    )
};

export default Card;
