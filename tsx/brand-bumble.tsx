/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBrandBumble({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-bumble"
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
      <path d="M7 12h10" />
      <path d="M9 8h6" />
      <path d="M10 16h4" />
      <path d="M16.268 3h-8.536a1.46 1.46 0 0 0 -1.268 .748l-4.268 7.509a1.507 1.507 0 0 0 0 1.486l4.268 7.509c.26 .462 .744 .747 1.268 .748h8.536a1.46 1.46 0 0 0 1.268 -.748l4.268 -7.509a1.507 1.507 0 0 0 0 -1.486l-4.268 -7.509a1.46 1.46 0 0 0 -1.268 -.748z" />
    </svg>
  );
}
export default IconBrandBumble;
