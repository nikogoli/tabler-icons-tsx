/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconTextPlus({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-text-plus"
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
      <path d="M19 10h-14" />
      <path d="M5 6h14" />
      <path d="M14 14h-9" />
      <path d="M5 18h6" />
      <path d="M18 15v6" />
      <path d="M15 18h6" />
    </svg>
  );
}
export default IconTextPlus;
