import { useState } from "react";

export const Button = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <button onClick={() => setClicked(true)} disabled={clicked}>
      {clicked ? "Clicked" : "Click me"}
    </button>
  );
};
