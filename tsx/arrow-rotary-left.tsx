/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconArrowRotaryLeft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-rotary-left"
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
      <path d="M16 10a3 3 0 1 1 0 -6a3 3 0 0 1 0 6z" />
      <path d="M16 10v10" />
      <path d="M13 7h-10" />
      <path d="M7 11l-4 -4l4 -4" />
    </svg>
  );
}
export default IconArrowRotaryLeft;
