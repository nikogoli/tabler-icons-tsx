/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconLemon({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-lemon"
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
      <path d="M17.536 3.393c3.905 3.906 3.905 10.237 0 14.143c-3.906 3.905 -10.237 3.905 -14.143 0l14.143 -14.143" />
      <path d="M5.868 15.06a6.5 6.5 0 0 0 9.193 -9.192" />
      <path d="M10.464 10.464l4.597 4.597" />
      <path d="M10.464 10.464v6.364" />
      <path d="M10.464 10.464h6.364" />
    </svg>
  );
}
export default IconLemon;
