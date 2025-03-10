/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconShoppingCartDiscount({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-shopping-cart-discount"
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
      <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M17 17h-11v-14h-2" />
      <path d="M20 6l-1 7h-13" />
      <path d="M10 10l6 -6" />
      <path d="M10.5 4.5m-.5 0a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0" />
      <path d="M15.5 9.5m-.5 0a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0" />
    </svg>
  );
}
export default IconShoppingCartDiscount;
