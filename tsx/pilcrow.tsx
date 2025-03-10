/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconPilcrow({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-pilcrow"
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
      <path d="M13 4v16" />
      <path d="M17 4v16" />
      <path d="M19 4h-9.5a4.5 4.5 0 0 0 0 9h3.5" />
    </svg>
  );
}
export default IconPilcrow;
