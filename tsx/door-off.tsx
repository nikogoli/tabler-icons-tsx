/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconDoorOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-door-off"
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
      <path d="M3 21h18" />
      <path d="M6 21v-15" />
      <path d="M7.18 3.175c.25 -.112 .528 -.175 .82 -.175h8a2 2 0 0 1 2 2v9" />
      <path d="M18 18v3" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconDoorOff;
