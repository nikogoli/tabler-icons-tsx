/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconRelationOneToMany({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-relation-one-to-many"
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
      <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M7 10h1v4" />
      <path d="M14 14v-4l3 4v-4" />
      <path d="M11 10.5l0 .01" />
      <path d="M11 13.5l0 .01" />
    </svg>
  );
}
export default IconRelationOneToMany;
