/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconSquareLetterY({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-square-letter-y"
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
      <path d="M10 8l2 5l2 -5" />
      <path d="M12 16v-3" />
    </svg>
  );
}
export default IconSquareLetterY;
