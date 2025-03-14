/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconCircuitAmmeter({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-circuit-ammeter"
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
      <path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M5 12h-3" />
      <path d="M19 12h3" />
      <path d="M10 14v-3c0 -1.036 .895 -2 2 -2s2 .964 2 2v3" />
      <path d="M14 12h-4" />
    </svg>
  );
}
export default IconCircuitAmmeter;
