/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBrandDeliveroo({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-deliveroo"
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
      <path d="M15 11l1 -9l5 .5l-1 13.5l-3 6l-12.5 -2.5l-1.5 -6l7 -1.5l-1.5 -7.5l4.5 -1z" />
      <circle cx={15.5} cy={15.5} r={1} fill="currentColor" />
      <circle cx={11.5} cy={14.5} r={1} fill="currentColor" />
    </svg>
  );
}
export default IconBrandDeliveroo;
