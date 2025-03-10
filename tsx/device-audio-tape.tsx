/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconDeviceAudioTape({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-device-audio-tape"
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
      <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M3 17l4 -3h10l4 3" />
      <circle cx={7.5} cy={9.5} r={0.5} fill="currentColor" />
      <circle cx={16.5} cy={9.5} r={0.5} fill="currentColor" />
    </svg>
  );
}
export default IconDeviceAudioTape;
