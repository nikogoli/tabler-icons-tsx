/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconMars({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-mars"
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
      <circle cx={10} cy={14} r={5} />
      <line x1={19} y1={5} x2={13.6} y2={10.4} />
      <line x1={19} y1={5} x2={14} y2={5} />
      <line x1={19} y1={5} x2={19} y2={10} />
    </svg>
  );
}
export default IconMars;
