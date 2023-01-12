/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconCurrencyDogecoin({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-currency-dogecoin"
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
      <path d="M6 12h6" />
      <path d="M9 6v12" />
      <path d="M6 18h6a6 6 0 1 0 0 -12h-6" />
    </svg>
  );
}
export default IconCurrencyDogecoin;
