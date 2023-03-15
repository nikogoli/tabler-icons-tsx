/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconArrowUpRhombus({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-up-rhombus"
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
      <path d="M12 16v-13" />
      <path d="M15 6l-3 -3l-3 3" />
      <path d="M14.5 18.5l-2.5 2.5l-2.5 -2.5l2.5 -2.5z" />
    </svg>
  );
}
export default IconArrowUpRhombus;
