/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconHammerOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-hammer-off"
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
      <path d="M10.698 10.72l-6.668 6.698a2.091 2.091 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0l6.696 -6.676" />
      <path d="M18.713 14.702l2 -2a1 1 0 0 0 0 -1.414l-7.586 -7.586a1 1 0 0 0 -1.414 0l-2 2" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconHammerOff;
