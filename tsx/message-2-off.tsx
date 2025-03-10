/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconMessage2Off({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-message-2-off"
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
      <path d="M9 5h8a3 3 0 0 1 3 3v6a2.97 2.97 0 0 1 -.44 1.563m-2.56 1.437h-2l-3 3l-3 -3h-2a3 3 0 0 1 -3 -3v-6c0 -1.092 .584 -2.049 1.457 -2.573" />
      <path d="M8 9h1m4 0h3" />
      <path d="M8 13h5" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconMessage2Off;
