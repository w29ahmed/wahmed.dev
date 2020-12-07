import React, { useState, useEffect } from "react";

const BlinkingCursor = () => {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setHidden((prev) => !prev);
    }, 530);
    return () => clearTimeout(timeout);
  }, [hidden]);

  return <span style={hidden ? undefined : { visibility: "hidden" }}>|</span>;
}

export default BlinkingCursor;
