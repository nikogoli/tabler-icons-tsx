/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconFoldUp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-fold-up"
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
      <path d="M12 13v-8l-3 3m6 0l-3 -3" />
      <path d="M9 17l1 0" />
      <path d="M14 17l1 0" />
      <path d="M19 17l1 0" />
      <path d="M4 17l1 0" />
    </svg>
  );
}
export default IconFoldUp;
