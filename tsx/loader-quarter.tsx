/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconLoaderQuarter({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-loader-quarter"
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
      <line x1={12} y1={6} x2={12} y2={3} />
      <line x1={6} y1={12} x2={3} y2={12} />
      <line x1={7.75} y1={7.75} x2={5.6} y2={5.6} />
    </svg>
  );
}
export default IconLoaderQuarter;
