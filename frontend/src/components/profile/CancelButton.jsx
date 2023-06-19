import { useState } from "react";

export default function CancelBtn ({onClick, className, disabled}) {
  const [hover, setHover] = useState(false);

  return (
  <button className={className} disabled={disabled} onClick={onClick} onMouseEnter={e => setHover(true)} onMouseLeave={e => setHover(false)}>
    X
  </button>
  )
}