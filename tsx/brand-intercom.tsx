/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBrandIntercom({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-intercom"
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
      <rect x={4} y={4} width={16} height={16} rx={2} />
      <path d="M7 8v3" />
      <path d="M10 7v6" />
      <path d="M14 7v6" />
      <path d="M17 8v3" />
      <path d="M7 15c4 2.667 6 2.667 10 0" />
    </svg>
  );
}
export default IconBrandIntercom;
