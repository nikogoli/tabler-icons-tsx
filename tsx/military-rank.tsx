/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconMilitaryRank({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-military-rank"
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
      <path d="M17 7v13h-10v-13l5 -3z" />
      <path d="M10 13l2 -1l2 1" />
      <path d="M10 17l2 -1l2 1" />
      <path d="M10 9l2 -1l2 1" />
    </svg>
  );
}
export default IconMilitaryRank;
