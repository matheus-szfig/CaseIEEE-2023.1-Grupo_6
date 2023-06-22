import { useState } from "react";
import EditIcon from "../icons/edit";

export default function EditBtn({ onClick, className, disabled }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={(e) => setHover(true)}
      onMouseLeave={(e) => setHover(false)}
    >
      <EditIcon
        className="h-5"
        size={"100%"}
        color={"#0574BC"}
        hoverColor={"#FFF"}
        hoverBool={hover}
      />
    </button>
  );
}
