/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconPlayCardOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-play-card-off"
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
      <path d="M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" />
      <path d="M16 18h.01" />
      <path d="M13.716 13.712l-1.716 2.288l-3 -4l1.29 -1.72" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconPlayCardOff;
