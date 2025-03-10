/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconExposurePlus1({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-exposure-plus-1"
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
      <path d="M3 12h6" />
      <path d="M6 9v6" />
      <path d="M18 19v-14l-4 4" />
    </svg>
  );
}
export default IconExposurePlus1;
