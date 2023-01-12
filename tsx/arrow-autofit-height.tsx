/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconArrowAutofitHeight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-autofit-height"
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
      <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6" />
      <path d="M18 14v7" />
      <path d="M18 3v7" />
      <path d="M15 18l3 3l3 -3" />
      <path d="M15 6l3 -3l3 3" />
    </svg>
  );
}
export default IconArrowAutofitHeight;
