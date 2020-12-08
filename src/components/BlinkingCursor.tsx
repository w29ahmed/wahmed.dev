import React, { useState, useEffect } from "react";

interface BlinkingCursorProps {
  blinkRate: number;
}

const BlinkingCursor = (props: BlinkingCursorProps) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHidden((prev) => !prev);
    }, props.blinkRate);
    return () => clearTimeout(timeout);
  }, [hidden, props.blinkRate]);

  return <span style={hidden ? undefined : { visibility: "hidden" }}>|</span>;
};

BlinkingCursor.defaultProps = { blinkRate: 530 };
export default BlinkingCursor;
