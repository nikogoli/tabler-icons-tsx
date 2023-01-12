/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBoldOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-bold-off"
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
      <path d="M9 5h4a3.5 3.5 0 0 1 2.222 6.204m-3.222 .796h-5v-5" />
      <path d="M17.107 17.112a3.5 3.5 0 0 1 -3.107 1.888h-7v-7" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconBoldOff;
