/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBadgeVr({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-badge-vr"
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
      <rect x={3} y={5} width={18} height={14} rx={2} />
      <path d="M14 12h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6m3 0l-2 -3" />
      <path d="M7 9l2 6l2 -6" />
    </svg>
  );
}
export default IconBadgeVr;
