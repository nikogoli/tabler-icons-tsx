/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconLogicAnd({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-logic-and"
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
      <path d="M22 12h-5" />
      <path d="M2 9h5" />
      <path d="M2 15h5" />
      <path d="M9 5c6 0 8 3.5 8 7s-2 7 -8 7h-2v-14h2z" />
    </svg>
  );
}
export default IconLogicAnd;
