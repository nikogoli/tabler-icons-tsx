/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconContrast2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-contrast-2"
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
      <path d="M4 18h2a6 6 0 0 0 6 -6a6 6 0 0 1 6 -6h2" />
    </svg>
  );
}
export default IconContrast2;
