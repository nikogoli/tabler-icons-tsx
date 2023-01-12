/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconMultiplier15x({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-multiplier-1-5x"
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
      <path d="M4 16v-8l-2 2" />
      <path d="M10 16h2a2 2 0 1 0 0 -4h-2v-4h4" />
      <path d="M7 16v.01" />
      <path d="M17 16l4 -4" />
      <path d="M21 16l-4 -4" />
    </svg>
  );
}
export default IconMultiplier15x;
