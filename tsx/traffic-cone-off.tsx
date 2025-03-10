/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconTrafficConeOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-traffic-cone-off"
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
      <path d="M4 20h16" />
      <path d="M9.4 10h.6m4 0h.6" />
      <path d="M7.8 15h7.2" />
      <path d="M6 20l3.5 -10.5" />
      <path d="M10.5 6.5l.5 -1.5h2l2 6m2 6l1 3" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconTrafficConeOff;
