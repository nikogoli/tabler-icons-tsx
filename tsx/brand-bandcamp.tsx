/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBrandBandcamp({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-bandcamp"
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
      <path d="M8.5 6h13.5l-7 12h-13z" />
    </svg>
  );
}
export default IconBrandBandcamp;
