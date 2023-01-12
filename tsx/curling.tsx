/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconCurling({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-curling"
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
      <rect x={4} y={9} width={16} height={10} rx={4} />
      <path d="M4 14h16" />
      <path d="M8 5h6a2 2 0 0 1 2 2v2" />
    </svg>
  );
}
export default IconCurling;
