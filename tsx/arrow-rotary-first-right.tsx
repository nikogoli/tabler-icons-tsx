/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconArrowRotaryFirstRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-rotary-first-right"
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
      <path d="M8 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M8 10v10" />
      <path d="M10.5 9.5l8.5 8.5" />
      <path d="M14 18h5v-5" />
    </svg>
  );
}
export default IconArrowRotaryFirstRight;
