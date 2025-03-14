/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconDeviceSim({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-device-sim"
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
      <path d="M6 3h8.5l4.5 4.5v12.5a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1z" />
      <path d="M9 11h3v6" />
      <path d="M15 17v.01" />
      <path d="M15 14v.01" />
      <path d="M15 11v.01" />
      <path d="M9 14v.01" />
      <path d="M9 17v.01" />
    </svg>
  );
}
export default IconDeviceSim;
