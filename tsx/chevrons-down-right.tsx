/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconChevronsDownRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-chevrons-down-right"
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
      <path d="M13 5v8h-8" />
      <path d="M17 9v8h-8" />
    </svg>
  );
}
export default IconChevronsDownRight;
