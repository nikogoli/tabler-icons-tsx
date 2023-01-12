/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconMouse2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-mouse-2"
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
      <rect x={6} y={3} width={12} height={18} rx={4} />
      <path d="M12 3v7" />
      <path d="M6 10h12" />
    </svg>
  );
}
export default IconMouse2;
