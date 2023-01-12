/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconCircleSquare({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-circle-square"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke-width={stroke}
      stroke={color}
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx={9.5} cy={9.5} r={6.5} />
      <rect x={10} y={10} width={11} height={11} rx={2} />
    </svg>
  );
}
export default IconCircleSquare;
