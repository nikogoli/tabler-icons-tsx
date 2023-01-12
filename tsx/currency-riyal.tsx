/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconCurrencyRiyal({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-currency-riyal"
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
      <path d="M15 9v2a2 2 0 1 1 -4 0v-1v1a2 2 0 1 1 -4 0v-1v4a2 2 0 1 1 -4 0v-2" />
      <path d="M18 12.01v-.01" />
      <path d="M22 10v1a5 5 0 0 1 -5 5" />
    </svg>
  );
}
export default IconCurrencyRiyal;
