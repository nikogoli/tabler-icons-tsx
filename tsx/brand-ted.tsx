/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBrandTed({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-ted"
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
      <path d="M2 8h4" />
      <path d="M4 8v8" />
      <path d="M13 8h-4v8h4" />
      <path d="M9 12h2.5" />
      <path d="M16 8v8h2a3 3 0 0 0 3 -3v-2a3 3 0 0 0 -3 -3h-2z" />
    </svg>
  );
}
export default IconBrandTed;
