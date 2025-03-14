/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBmp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-bmp"
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
      <path d="M18 16v-8h2a2 2 0 1 1 0 4h-2" />
      <path d="M6 14a2 2 0 0 1 -2 2h-2v-8h2a2 2 0 1 1 0 4h-2h2a2 2 0 0 1 2 2z" />
      <path d="M9 16v-8l3 6l3 -6v8" />
    </svg>
  );
}
export default IconBmp;
