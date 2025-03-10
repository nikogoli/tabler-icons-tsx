/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBluetoothConnected({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-bluetooth-connected"
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
      <path d="M7 8l10 8l-5 4l0 -16l5 4l-10 8" />
      <path d="M4 12l1 0" />
      <path d="M18 12l1 0" />
    </svg>
  );
}
export default IconBluetoothConnected;
