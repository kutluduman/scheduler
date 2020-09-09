import { useState } from "react";


// custom hook to handle the visual modes of appointment component
export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);


  /*
    Transitions into new visual mode and keeps
    the history of the previous mode
  */
  const transition = (newMode, replace = false) => {
    setMode(newMode);

    setHistory((history) => {
      if (replace) {
        const newHistory = [...history];
        newHistory.splice(-1, 1, newMode);
        return newHistory;
      } else {
        return [...history, newMode];
      }
    });
  };

  /*
    goes back to the previous visual mode,
    but won't go back if its the only one in 
    the history
  */
  const back = () => {
    setHistory((history) => {
      const newHistory =
        history.length > 1 ? [...history].slice(0, -1) : [...history];
      setMode(newHistory[newHistory.length - 1]);
      return newHistory;
    });
  };

  // returns functions and state that will be used in Appointment/index.js
  return {
    mode,
    transition,
    back
  };
}
