/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconAnalyzeOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-analyze-off"
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
      <path d="M20 11a8.1 8.1 0 0 0 -6.986 -6.918a8.086 8.086 0 0 0 -4.31 .62m-2.383 1.608a8.089 8.089 0 0 0 -1.326 1.69" />
      <path d="M4 13a8.1 8.1 0 0 0 13.687 4.676" />
      <path d="M20 16a1 1 0 0 0 -1 -1" />
      <path d="M5 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M9.888 9.87a3 3 0 1 0 4.233 4.252m.595 -3.397a3.012 3.012 0 0 0 -1.426 -1.435" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconAnalyzeOff;
