/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconCurrencyBahraini({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-currency-bahraini"
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
      <path d="M3 10v1a4 4 0 0 0 4 4h2a2 2 0 0 0 2 -2v-3" />
      <path d="M7 19.01v-.01" />
      <path d="M14 15.01v-.01" />
      <path d="M17 15h2a2 2 0 0 0 1.649 -3.131l-2.653 -3.869" />
    </svg>
  );
}
export default IconCurrencyBahraini;
