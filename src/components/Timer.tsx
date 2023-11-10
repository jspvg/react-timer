import Container from "./UI/Container.tsx";
import { type Timer as TimerProps } from "../types/timerTypes.ts";

const Timer = ({ name, duration }: TimerProps) => (
  <Container as="article">
    <h2>{name}</h2>
    <p>{duration}</p>
  </Container>
);

export default Timer;
