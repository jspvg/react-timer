import { createContext, useContext } from "react";
import { TimersContextValue } from "../types/timerTypes";

export const TimersContext = createContext<TimersContextValue | null>(null);

export const useTimersContext = () => {
  const timersCtx = useContext(TimersContext);

  if (timersCtx === null) {
    throw new Error("TimerContext cannot be null.");
  }

  return timersCtx;
};

export default useTimersContext;