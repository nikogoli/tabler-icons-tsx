/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBrandMatrix({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-matrix"
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
      <path d="M4 3h-1v18h1" />
      <path d="M20 21h1v-18h-1" />
      <path d="M7 9v6" />
      <path d="M12 15v-3.5a2.5 2.5 0 1 0 -5 0v.5" />
      <path d="M17 15v-3.5a2.5 2.5 0 1 0 -5 0v.5" />
    </svg>
  );
}
export default IconBrandMatrix;
