/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconPhotoSensor({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-photo-sensor"
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
      <path d="M17 5h2a2 2 0 0 1 2 2v2" />
      <path d="M21 15v2a2 2 0 0 1 -2 2h-2" />
      <path d="M7 19h-2a2 2 0 0 1 -2 -2v-2" />
      <path d="M3 9v-2a2 2 0 0 1 2 -2h2" />
      <path d="M7 9m0 1a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1z" />
    </svg>
  );
}
export default IconPhotoSensor;
