/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconMusic({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-music"
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
      <path d="M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M16 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M9 17l0 -13l10 0l0 13" />
      <path d="M9 8l10 0" />
    </svg>
  );
}
export default IconMusic;
