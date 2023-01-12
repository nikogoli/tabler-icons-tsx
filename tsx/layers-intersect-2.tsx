/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconLayersIntersect2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-layers-intersect-2"
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
      <rect x={8} y={4} width={12} height={12} rx={2} />
      <rect x={4} y={8} width={12} height={12} rx={2} />
      <path d="M9 15l6 -6" />
    </svg>
  );
}
export default IconLayersIntersect2;
