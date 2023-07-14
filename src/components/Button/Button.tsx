import { useState } from "react";
import { tet } from "@/tetrisly/tetrisly"

export const Button = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <tet.button
      color="$a-color-action-destructive-active"
      onClick={() => setClicked(true)}
      disabled={clicked}
    >
      {clicked ? "Clicked" : "Click me"}
    </tet.button>
  );
};
