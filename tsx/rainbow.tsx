/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconRainbow({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-rainbow"
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
      <path d="M22 17c0 -5.523 -4.477 -10 -10 -10s-10 4.477 -10 10" />
      <path d="M18 17a6 6 0 1 0 -12 0" />
      <path d="M14 17a2 2 0 1 0 -4 0" />
    </svg>
  );
}
export default IconRainbow;
