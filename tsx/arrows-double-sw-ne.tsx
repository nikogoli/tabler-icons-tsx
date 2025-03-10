/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconArrowsDoubleSwNe({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrows-double-sw-ne"
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
      <path d="M14 3l-11 11" />
      <path d="M3 10v4h4" />
      <path d="M17 10h4v4" />
      <path d="M10 21l11 -11" />
    </svg>
  );
}
export default IconArrowsDoubleSwNe;
