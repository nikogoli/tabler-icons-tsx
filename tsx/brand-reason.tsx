/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBrandReason({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-reason"
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
      <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M18 18h-3v-6h3" />
      <path d="M18 15h-3" />
      <path d="M8 18v-6h2.5a1.5 1.5 0 0 1 0 3h-2.5" />
      <path d="M12 18l-2 -3" />
    </svg>
  );
}
export default IconBrandReason;
