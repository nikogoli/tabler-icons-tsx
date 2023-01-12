/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconTextOrientation({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-text-orientation"
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
      <path d="M9 15l-5 -5c-1.367 -1.367 -1.367 -3.633 0 -5s3.633 -1.367 5 0l5 5" />
      <path d="M5.5 11.5l5 -5" />
      <path d="M21 12l-9 9" />
      <path d="M21 12v4" />
      <path d="M21 12h-4" />
    </svg>
  );
}
export default IconTextOrientation;
