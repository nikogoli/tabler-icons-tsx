/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconMessageShare({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-message-share"
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
      <path d="M20 11v3a3 3 0 0 1 -3 3h-9l-4 4v-13a3 3 0 0 1 3 -3h7" />
      <path d="M17 4h4v4" />
      <path d="M16 9l5 -5" />
    </svg>
  );
}
export default IconMessageShare;
