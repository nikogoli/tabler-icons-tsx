/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconViewportNarrow({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-viewport-narrow"
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
      <path d="M3 12h7l-3 -3m0 6l3 -3" />
      <path d="M21 12h-7l3 -3m0 6l-3 -3" />
      <path d="M9 6v-3h6v3" />
      <path d="M9 18v3h6v-3" />
    </svg>
  );
}
export default IconViewportNarrow;
