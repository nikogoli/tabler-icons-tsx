/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconArrowUpRightCircle({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-up-right-circle"
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
      <circle cx={12} cy={12} r={9} />
      <line x1={15} y1={9} x2={9} y2={15} />
      <polyline points="15 15 15 9 9 9" />
    </svg>
  );
}
export default IconArrowUpRightCircle;
