/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconSeo({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-seo"
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
      <path d="M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3" />
      <path d="M14 16h-4v-8h4" />
      <path d="M11 12h2" />
      <rect x={17} y={8} width={4} height={8} rx={1} />
    </svg>
  );
}
export default IconSeo;
