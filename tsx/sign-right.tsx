/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconSignRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-sign-right"
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
      <path d="M8 21h4" />
      <path d="M10 21v-10" />
      <path d="M10 6v-3" />
      <path d="M6 6h10l2 2.5l-2 2.5h-10z" />
    </svg>
  );
}
export default IconSignRight;
