import Button from "./UI/Button.tsx";
import { useTimersContext } from "../store/timers-context.tsx";

const Header = () => {
  const timersCtx = useTimersContext();

  return (
    <header>
      <h1>ReactTimer</h1>
      <Button>{timersCtx.isRunning ? "Stop" : "Start"} Timers</Button>
    </header>
  );
};

export default Header;
