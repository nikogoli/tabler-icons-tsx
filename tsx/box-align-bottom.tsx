/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBoxAlignBottom({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-box-align-bottom"
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
      <path d="M4 14h16v5a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-5z" />
      <path d="M4 9v.01" />
      <path d="M4 4v.01" />
      <path d="M9 4v.01" />
      <path d="M15 4v.01" />
      <path d="M20 4v.01" />
      <path d="M20 9v.01" />
    </svg>
  );
}
export default IconBoxAlignBottom;
