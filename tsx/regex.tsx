/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconRegex({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-regex"
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
      <path d="M6.5 15a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0 -5z" />
      <path d="M17 7.875l3 -1.687" />
      <path d="M17 7.875v3.375" />
      <path d="M17 7.875l-3 -1.687" />
      <path d="M17 7.875l3 1.688" />
      <path d="M17 4.5v3.375" />
      <path d="M17 7.875l-3 1.688" />
    </svg>
  );
}
export default IconRegex;
