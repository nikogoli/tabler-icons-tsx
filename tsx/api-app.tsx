/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconApiApp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-api-app"
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
      <path d="M12 15h-6.5a2.5 2.5 0 1 1 0 -5h.5" />
      <path d="M15 12v6.5a2.5 2.5 0 1 1 -5 0v-.5" />
      <path d="M12 9h6.5a2.5 2.5 0 1 1 0 5h-.5" />
      <path d="M9 12v-6.5a2.5 2.5 0 0 1 5 0v.5" />
    </svg>
  );
}
export default IconApiApp;
