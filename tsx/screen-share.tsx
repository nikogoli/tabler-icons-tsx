/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconScreenShare({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-screen-share"
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
      <path d="M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9" />
      <path d="M7 20l10 0" />
      <path d="M9 16l0 4" />
      <path d="M15 16l0 4" />
      <path d="M17 4h4v4" />
      <path d="M16 9l5 -5" />
    </svg>
  );
}
export default IconScreenShare;
