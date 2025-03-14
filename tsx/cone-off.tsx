/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconConeOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-cone-off"
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
      <path d="M18.305 18.305c-1.132 1 -3.53 1.695 -6.305 1.695c-3.866 0 -7 -1.343 -7 -3s3.134 -3 7 -3c.747 0 1.467 .05 2.142 .143" />
      <path d="M17.07 13.054l-5.07 -9.054l-1.432 2.558m-1.439 2.569l-4.129 7.373v.5" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconConeOff;
