/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBaseline({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-baseline"
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
      <path d="M4 20h16" />
      <path d="M8 16v-8a4 4 0 1 1 8 0v8" />
      <path d="M8 10h8" />
    </svg>
  );
}
export default IconBaseline;
