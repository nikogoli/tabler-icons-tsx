/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconFileSymlink({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-file-symlink"
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
      <path d="M4 21v-4a3 3 0 0 1 3 -3h5" />
      <path d="M9 17l3 -3l-3 -3" />
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M5 11v-6a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-9.5" />
    </svg>
  );
}
export default IconFileSymlink;
