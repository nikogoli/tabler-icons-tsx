/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconSunLow({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-sun-low"
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
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M4 12h.01" />
      <path d="M12 4v.01" />
      <path d="M20 12h.01" />
      <path d="M12 20v.01" />
      <path d="M6.31 6.31l-.01 -.01" />
      <path d="M17.71 6.31l-.01 -.01" />
      <path d="M17.7 17.7l.01 .01" />
      <path d="M6.3 17.7l.01 .01" />
    </svg>
  );
}
export default IconSunLow;
