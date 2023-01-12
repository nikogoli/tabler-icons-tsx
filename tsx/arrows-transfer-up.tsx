/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconArrowsTransferUp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrows-transfer-up"
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
      <path d="M7 21v-6" />
      <path d="M20 6l-3 -3l-3 3" />
      <path d="M17 3v18" />
      <path d="M10 18l-3 3l-3 -3" />
      <path d="M7 3v2" />
      <path d="M7 9v2" />
    </svg>
  );
}
export default IconArrowsTransferUp;
