import { useState } from "react";
import AddIcon from "../icons/add";

export default function AddButton({ onClick, className, disabled }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={(e) => setHover(true)}
      onMouseLeave={(e) => setHover(false)}
    >
      <AddIcon
        className="h-5"
        size={"100%"}
        color={"#0574BC"}
        hoverColor={"#FFF"}
        hoverBool={hover}
      />
    </button>
  );
}
