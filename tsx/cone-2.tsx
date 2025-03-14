/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconCone2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-cone-2"
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
      <path d="M12 7m-7 0a7 3 0 1 0 14 0a7 3 0 1 0 -14 0" />
      <path d="M19 7v.5l-7 12.5l-7 -12.5v-.5" />
    </svg>
  );
}
export default IconCone2;
