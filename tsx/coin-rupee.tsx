/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconCoinRupee({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-coin-rupee"
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
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M15 8h-6h1a3 3 0 0 1 0 6h-1l3 3" />
      <path d="M9 11h6" />
    </svg>
  );
}
export default IconCoinRupee;
