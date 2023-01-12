/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconGeometry({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-geometry"
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
      <path d="M7 21l4 -12m2 0l1.48 4.439m.949 2.847l1.571 4.714" />
      <circle cx={12} cy={7} r={2} />
      <path d="M4 12c1.526 2.955 4.588 5 8 5c3.41 0 6.473 -2.048 8 -5" />
      <path d="M12 5v-2" />
    </svg>
  );
}
export default IconGeometry;
