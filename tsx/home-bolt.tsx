/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconHomeBolt({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-home-bolt"
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
      <path d="M19 10l-7 -7l-9 9h2v7a2 2 0 0 0 2 2h7.5" />
      <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.661 0 1.248 .32 1.612 .815" />
      <path d="M19 14l-2 4h4l-2 4" />
    </svg>
  );
}
export default IconHomeBolt;
