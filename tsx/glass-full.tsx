/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconGlassFull({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-glass-full"
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
      <path d="M8 21l8 0" />
      <path d="M12 15l0 6" />
      <path d="M17 3l1 7c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -7h10z" />
      <path d="M6 10a5 5 0 0 1 6 0a5 5 0 0 0 6 0" />
    </svg>
  );
}
export default IconGlassFull;
