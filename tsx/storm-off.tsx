/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconStormOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-storm-off"
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
      <path d="M9.884 9.874a3 3 0 1 0 4.24 4.246m.57 -3.441a3.012 3.012 0 0 0 -1.41 -1.39" />
      <path d="M7.037 7.063a7 7 0 0 0 9.907 9.892m1.585 -2.426a7 7 0 0 0 -9.058 -9.059" />
      <path d="M5.369 14.236c-1.605 -3.428 -1.597 -6.673 -1 -9.849" />
      <path d="M18.63 9.76a14.323 14.323 0 0 1 1.368 6.251m-.37 3.608c-.087 .46 -.187 .92 -.295 1.377" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconStormOff;
