/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconCircuitResistor({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-circuit-resistor"
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
      <path d="M2 12h2l2 -5l3 10l3 -10l3 10l3 -10l1.5 5h2.5" />
    </svg>
  );
}
export default IconCircuitResistor;
