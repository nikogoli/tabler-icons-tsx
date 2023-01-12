/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBackpackOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-backpack-off"
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
      <path d="M19 19a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-6a5.997 5.997 0 0 1 2.89 -5.133m3.11 -.867h2a6 6 0 0 1 6 6v2" />
      <path d="M10 6a2 2 0 1 1 4 0v1" />
      <path d="M10 15h4" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconBackpackOff;
