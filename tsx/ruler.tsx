/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconRuler({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-ruler"
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
      <path d="M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" />
      <path d="M4 8l2 0" />
      <path d="M4 12l3 0" />
      <path d="M4 16l2 0" />
      <path d="M8 4l0 2" />
      <path d="M12 4l0 3" />
      <path d="M16 4l0 2" />
    </svg>
  );
}
export default IconRuler;
