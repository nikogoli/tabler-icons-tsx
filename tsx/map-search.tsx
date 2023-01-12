/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconMapSearch({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-map-search"
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
      <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v10" />
      <path d="M9 4v13" />
      <path d="M15 7v5" />
      <circle cx={16.5} cy={17.5} r={2.5} />
      <path d="M18.5 19.5l2.5 2.5" />
    </svg>
  );
}
export default IconMapSearch;
