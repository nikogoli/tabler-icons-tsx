/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconAlarmOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-alarm-off"
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
      <path d="M7.587 7.566a7 7 0 1 0 9.833 9.864m1.35 -2.645a7 7 0 0 0 -8.536 -8.56" />
      <path d="M12 12v1h1" />
      <path d="M5.261 5.265l-1.011 .735" />
      <path d="M17 4l2.75 2" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconAlarmOff;
