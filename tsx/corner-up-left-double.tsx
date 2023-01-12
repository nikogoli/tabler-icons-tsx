/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconCornerUpLeftDouble({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-corner-up-left-double"
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
      <path d="M19 18v-6a3 3 0 0 0 -3 -3h-7" />
      <path d="M13 13l-4 -4l4 -4m-5 8l-4 -4l4 -4" />
    </svg>
  );
}
export default IconCornerUpLeftDouble;
