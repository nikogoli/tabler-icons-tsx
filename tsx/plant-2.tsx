/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconPlant2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-plant-2"
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
      <path d="M2 9a10 10 0 1 0 20 0" />
      <path d="M12 19a10 10 0 0 1 10 -10" />
      <path d="M2 9a10 10 0 0 1 10 10" />
      <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5" />
      <path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5" />
    </svg>
  );
}
export default IconPlant2;
