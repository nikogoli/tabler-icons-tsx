/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconDeviceWatchOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-device-watch-off"
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
      <path d="M10 6h5a3 3 0 0 1 3 3v5m-.882 3.125a2.99 2.99 0 0 1 -2.118 .875h-6a3 3 0 0 1 -3 -3v-6c0 -.828 .336 -1.578 .878 -2.121" />
      <path d="M9 18v3h6v-3" />
      <path d="M9 5v-2h6v3" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconDeviceWatchOff;
