/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconCrystalBall({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-crystal-ball"
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
      <path d="M6.73 17.018a8 8 0 1 1 10.54 0" />
      <path d="M5 19a2 2 0 0 0 2 2h10a2 2 0 1 0 0 -4h-10a2 2 0 0 0 -2 2z" />
      <path d="M11 7a3 3 0 0 0 -3 3" />
    </svg>
  );
}
export default IconCrystalBall;
