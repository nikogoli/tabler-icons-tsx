/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBatteryAutomotive({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-battery-automotive"
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
      <path d="M3 6m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M6 6v-2" />
      <path d="M19 4l0 2" />
      <path d="M6.5 13l3 0" />
      <path d="M14.5 13l3 0" />
      <path d="M16 11.5l0 3" />
    </svg>
  );
}
export default IconBatteryAutomotive;
