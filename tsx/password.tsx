/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconPassword({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-password"
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
      <path d="M12 10v4" />
      <path d="M10 13l4 -2" />
      <path d="M10 11l4 2" />
      <path d="M5 10v4" />
      <path d="M3 13l4 -2" />
      <path d="M3 11l4 2" />
      <path d="M19 10v4" />
      <path d="M17 13l4 -2" />
      <path d="M17 11l4 2" />
    </svg>
  );
}
export default IconPassword;
