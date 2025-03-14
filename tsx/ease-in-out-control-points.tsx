/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconEaseInOutControlPoints({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-ease-in-out-control-points"
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
      <path d="M17 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0z" />
      <path d="M17 20h-2" />
      <path d="M7 4a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z" />
      <path d="M7 4h2" />
      <path d="M14 4h-2" />
      <path d="M12 20h-2" />
      <path d="M3 20c8 0 10 -16 18 -16" />
    </svg>
  );
}
export default IconEaseInOutControlPoints;
