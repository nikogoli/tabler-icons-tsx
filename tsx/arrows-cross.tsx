/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconArrowsCross({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrows-cross"
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
      <path d="M16 4h4v4" />
      <path d="M15 9l5 -5" />
      <path d="M4 20l5 -5" />
      <path d="M16 20h4v-4" />
      <path d="M4 4l16 16" />
    </svg>
  );
}
export default IconArrowsCross;
