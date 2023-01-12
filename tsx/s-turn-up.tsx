/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconSTurnUp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-s-turn-up"
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
      <path d="M6.5 19.5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M4.5 17.5v-9.5a3.5 3.5 0 0 1 7 0v9a3.5 3.5 0 0 0 7 0v-13.5" />
      <path d="M15.5 6.5l3 -3l3 3" />
    </svg>
  );
}
export default IconSTurnUp;
