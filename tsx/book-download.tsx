/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBookDownload({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-book-download"
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
      <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5" />
      <path d="M13 16h-7a2 2 0 0 0 -2 2" />
      <path d="M15 19l3 3l3 -3" />
      <path d="M18 22v-9" />
    </svg>
  );
}
export default IconBookDownload;
