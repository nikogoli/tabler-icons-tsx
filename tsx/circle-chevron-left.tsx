/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconCircleChevronLeft({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-circle-chevron-left"
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
      <path d="M13 15l-3 -3l3 -3" />
      <path d="M21 12a9 9 0 1 0 -18 0a9 9 0 0 0 18 0z" />
    </svg>
  );
}
export default IconCircleChevronLeft;
