/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconWind({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-wind"
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
      <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
      <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
      <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
    </svg>
  );
}
export default IconWind;
