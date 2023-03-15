/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconCurrencyPeso({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-currency-peso"
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
      <path d="M8 19v-14h3.5a4.5 4.5 0 1 1 0 9h-3.5" />
      <path d="M18 8h-12" />
      <path d="M18 11h-12" />
    </svg>
  );
}
export default IconCurrencyPeso;
