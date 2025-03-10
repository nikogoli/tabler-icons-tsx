/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconZzzOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-zzz-off"
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
      <path d="M4 12h6l-6 8h6" />
      <path d="M14 4h6l-5.146 6.862m1.146 1.138h4" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconZzzOff;
