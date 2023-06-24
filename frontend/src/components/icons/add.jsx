export default function AddIcon({
  color,
  hoverColor,
  hoverBool,
  className,
  size,
}) {
  return (
    <div className={className}>
      <svg
        stroke={hoverBool ? hoverColor : color}
        xmlns="http://www.w3.org/2000/svg"
        width={size * 0.97}
        height={size}
        viewBox="0 0 60.249 62.184"
      >
        <g id="Group_43" data-name="Group 43" transform="translate(2.5 2.5)">
          <line
            id="Line_1"
            data-name="Line 1"
            y2="57.184"
            transform="translate(27.624)"
            stroke-linecap="round"
            stroke-width="6"
          />
          <line
            id="Line_2"
            data-name="Line 2"
            y2="55.249"
            transform="translate(55.249 28.592) rotate(90)"
            stroke-linecap="round"
            stroke-width="6"
          />
        </g>
      </svg>
    </div>
  );
}
