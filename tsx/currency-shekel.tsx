/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconCurrencyShekel({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-currency-shekel"
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
      <path d="M6 18v-12h4a4 4 0 0 1 4 4v4" />
      <path d="M18 6v12h-4a4 4 0 0 1 -4 -4v-4" />
    </svg>
  );
}
export default IconCurrencyShekel;
