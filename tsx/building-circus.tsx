/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBuildingCircus({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-building-circus"
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
      <path d="M4 11h16" />
      <path d="M12 6.5c0 1 -5 4.5 -8 4.5" />
      <path d="M12 6.5c0 1 5 4.5 8 4.5" />
      <path d="M6 11c-.333 5.333 -1 8.667 -2 10h4c1 0 4 -4 4 -9v-1" />
      <path d="M18 11c.333 5.333 1 8.667 2 10h-4c-1 0 -4 -4 -4 -9v-1" />
      <path d="M12 7v-4l2 1h-2" />
    </svg>
  );
}
export default IconBuildingCircus;
