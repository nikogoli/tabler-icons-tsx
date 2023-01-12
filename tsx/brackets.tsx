/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBrackets({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brackets"
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
      <path d="M8 4h-3v16h3" />
      <path d="M16 4h3v16h-3" />
    </svg>
  );
}
export default IconBrackets;
