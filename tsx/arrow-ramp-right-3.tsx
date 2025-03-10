/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconArrowRampRight3({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-ramp-right-3"
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
      <path d="M6 3v6" />
      <path d="M16 16l4 -4l-4 -4" />
      <path d="M6 21v-6a3 3 0 0 1 3 -3h11" />
    </svg>
  );
}
export default IconArrowRampRight3;
