/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconLetterU({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-letter-u"
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
      <path d="M6 4v11a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5v-11" />
    </svg>
  );
}
export default IconLetterU;
