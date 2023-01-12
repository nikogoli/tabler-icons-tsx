/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconTableAlias({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-table-alias"
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
      <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-6" />
      <rect x={3} y={15} width={6} height={6} rx={1} />
      <path d="M4 10h16" />
      <path d="M10 4v8" />
    </svg>
  );
}
export default IconTableAlias;
