/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconMathPiDivide2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-math-pi-divide-2"
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
      <path d="M10 15h3a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h3" />
      <path d="M5 12h14" />
      <path d="M10 9v-6" />
      <path d="M14 3v6" />
      <path d="M15 3h-6" />
    </svg>
  );
}
export default IconMathPiDivide2;
