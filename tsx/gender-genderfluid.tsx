/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconGenderGenderfluid({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-gender-genderfluid"
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
      <path d="M10 15.464a4 4 0 1 0 4 -6.928a4 4 0 0 0 -4 6.928z" />
      <path d="M15.464 14l3 -5.196" />
      <path d="M5.536 15.195l3 -5.196" />
      <path d="M12 12h.01" />
      <path d="M9 9l-6 -6" />
      <path d="M5.5 8.5l3 -3" />
      <path d="M21 21l-6 -6" />
      <path d="M17 20l3 -3" />
      <path d="M3 7v-4h4" />
    </svg>
  );
}
export default IconGenderGenderfluid;
