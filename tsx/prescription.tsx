/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconPrescription({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-prescription"
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
      <path d="M6 19v-16h4.5a4.5 4.5 0 1 1 0 9h-4.5" />
      <path d="M19 21l-9 -9" />
      <path d="M13 21l6 -6" />
    </svg>
  );
}
export default IconPrescription;
