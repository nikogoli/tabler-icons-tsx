/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBusinessplan({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-businessplan"
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
      <path d="M16 6m-5 0a5 3 0 1 0 10 0a5 3 0 1 0 -10 0" />
      <path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
      <path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
      <path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
      <path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
      <path d="M5 15v1m0 -8v1" />
    </svg>
  );
}
export default IconBusinessplan;
