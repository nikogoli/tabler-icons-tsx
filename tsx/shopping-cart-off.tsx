/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconShoppingCartOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-shopping-cart-off"
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
      <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M17 17a2 2 0 1 0 2 2" />
      <path d="M17 17h-11v-11" />
      <path d="M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconShoppingCartOff;
