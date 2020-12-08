import React, { useState, useEffect } from "react";

// TODO: Enforce words.length > 1, because if not this component breaks :(
interface TypeWriterProps {
  words: string[];
  forwardDelay: number;
  backDelay: number;
  pauseDelay: number;
}

const TypeWriter = (props: TypeWriterProps) => {
  const [pause, setPause] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [state, setState] = useState({
    word: props.words[wordIndex],
    forward: true,
    charIndex: 0
  });

  // Invoked on state change, including initial render. Handles logic for moving
  // the character index forward and back
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
            setWordIndex((prev) => (prev + 1) % props.words.length);
          }
        }
      },
      state.forward ? props.forwardDelay : props.backDelay
    );
    return () => clearTimeout(timeout);
  }, [state, props.words.length, props.forwardDelay, props.backDelay]);

  // Invoked when wordIndex changes, updates the current word to type out
  useEffect(() => {
    setState((prev) => ({
      ...prev,
      word: props.words[wordIndex],
      forward: true,
    }));
  }, [wordIndex, props.words]);

  // Invoked when pause is set. Waits for some amount of time before starting
  // to erase the characters
  useEffect(() => {
    if (pause) {
      const timeout = setTimeout(() => {
        setState((prev) => ({ ...prev, forward: false }));
        setPause(false);
      }, props.pauseDelay);
      return () => clearTimeout(timeout);
    }
  }, [pause, props.pauseDelay]);

  return <span>{" " + state.word.substring(0, state.charIndex)}</span>;
};

TypeWriter.defaultProps = { forwardDelay: 75, backDelay: 50, pauseDelay: 1000 };
export default TypeWriter;
