/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconAddressBookOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-address-book-off"
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
      <path d="M8 4h10a2 2 0 0 1 2 2v10m-.57 3.399c-.363 .37 -.87 .601 -1.43 .601h-10a2 2 0 0 1 -2 -2v-12" />
      <path d="M10 16h6" />
      <path d="M11 11a2 2 0 0 0 2 2m2 -2a2 2 0 0 0 -2 -2" />
      <path d="M4 8h3" />
      <path d="M4 12h3" />
      <path d="M4 16h3" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconAddressBookOff;
