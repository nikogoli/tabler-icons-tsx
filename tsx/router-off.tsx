/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconRouterOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-router-off"
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
      <path d="M17 13h2a2 2 0 0 1 2 2v2m-.588 3.417c-.362 .36 -.861 .583 -1.412 .583h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h8" />
      <path d="M17 17v.01" />
      <path d="M13 17v.01" />
      <path d="M12.226 8.2a4 4 0 0 1 6.024 .55" />
      <path d="M9.445 5.407a8 8 0 0 1 12.055 1.093" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconRouterOff;
