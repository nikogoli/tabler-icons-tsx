/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBoxAlignTop({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-box-align-top"
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
      <path d="M4 9.505h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z" />
      <path d="M4 14.505v-.01" />
      <path d="M4 19.505v-.01" />
      <path d="M9 19.505v-.01" />
      <path d="M15 19.505v-.01" />
      <path d="M20 19.505v-.01" />
      <path d="M20 14.505v-.01" />
    </svg>
  );
}
export default IconBoxAlignTop;
