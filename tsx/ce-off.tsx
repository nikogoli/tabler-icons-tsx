/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconCeOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-ce-off"
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
      <path d="M11 4a7.99 7.99 0 0 0 -2.581 .426" />
      <path d="M5.867 5.864a8 8 0 0 0 5.133 14.136" />
      <path d="M20 4a8 8 0 0 0 -7.29 4.7" />
      <path d="M12 12a8 8 0 0 0 8 8" />
      <path d="M16 12h4" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconCeOff;
