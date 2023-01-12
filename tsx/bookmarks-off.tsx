/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBookmarksOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-bookmarks-off"
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
      <path d="M11 7h2a2 2 0 0 1 2 2v2m0 4v6l-5 -3l-5 3v-12a2 2 0 0 1 2 -2" />
      <path d="M9.265 4a2 2 0 0 1 1.735 -1h6a2 2 0 0 1 2 2v10" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconBookmarksOff;
