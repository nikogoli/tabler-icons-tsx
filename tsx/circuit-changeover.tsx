/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconCircuitChangeover({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-circuit-changeover"
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
      <path d="M2 12h2" />
      <path d="M20 7h2" />
      <circle cx={6} cy={12} r={2} />
      <circle cx={18} cy={7} r={2} />
      <path d="M20 17h2" />
      <circle cx={18} cy={17} r={2} />
      <path d="M7.5 10.5l8.5 -3.5" />
    </svg>
  );
}
export default IconCircuitChangeover;
