/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconHighlight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-highlight"
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
      <path d="M3 19h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
      <path d="M12.5 5.5l4 4" />
      <path d="M4.5 13.5l4 4" />
      <path d="M21 15v4h-8l4 -4z" />
    </svg>
  );
}
export default IconHighlight;
