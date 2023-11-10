import useTimersContext from "../hooks/useTimersContext";
import Timer from "./Timer";

const Timers = () => {
  const { timers } = useTimersContext();
  return (
    <ul>
      {timers.map((timer, index) => (
        <li key={index}>
          <Timer {...timer} />
        </li>
      ))}
    </ul>
  );
};

export default Timers;
