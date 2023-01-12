/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconCornerRightDownDouble({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-corner-right-down-double"
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
      <path d="M5 4h6a3 3 0 0 1 3 3v7" />
      <path d="M10 10l4 4l4 -4m-8 5l4 4l4 -4" />
    </svg>
  );
}
export default IconCornerRightDownDouble;
