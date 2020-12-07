import React, { useState, useEffect } from "react";
import BlinkingCursor from "./BlinkingCursor";
const words = ["Robotics", "Embedded Systems", "Web Development"];

const TypeWriter = () => {
  const [pause, setPause] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [state, setState] = useState({
    word: words[wordIndex],
    forward: true,
    charIndex: 0
  });

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (state.forward) {
          if (state.charIndex < state.word.length) {
            setState((prev) => ({ ...prev, charIndex: prev.charIndex + 1 }));
          }
          if (state.charIndex === state.word.length) {
            setPause(true);
          }
        } else {
          if (state.charIndex > 0) {
            setState((prev) => ({ ...prev, charIndex: prev.charIndex - 1 }));
          }
          if (state.charIndex === 0) {
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      state.forward ? 75 : 50
    );
    return () => clearTimeout(timeout);
  }, [state]);

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      word: words[wordIndex],
      forward: true
    }));
  }, [wordIndex]);

  useEffect(() => {
    if (pause) {
      const timeout = setTimeout(() => {
        setState((prev) => ({ ...prev, forward: false }));
        setPause(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [pause]);

  return (
    <span>
      {" " + state.word.substring(0, state.charIndex)}
      <BlinkingCursor />
    </span>
  );
}

export default TypeWriter;
