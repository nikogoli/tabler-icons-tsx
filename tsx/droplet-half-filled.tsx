/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconDropletHalfFilled({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-droplet-half-filled"
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
      <path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8zm5.2 -8v17m0 -8l3.544 -3.544m-3.544 8.844l5.558 -5.558" />
    </svg>
  );
}
export default IconDropletHalfFilled;
