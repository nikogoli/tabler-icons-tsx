/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconAugmentedReality2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-augmented-reality-2"
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
      <path d="M10 21h-2a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v3.5" />
      <path d="M17 17l-4 -2.5l4 -2.5l4 2.5v4.5l-4 2.5z" />
      <path d="M13 14.5v4.5l4 2.5" />
      <path d="M17 17l4 -2.5" />
      <path d="M11 4h2" />
    </svg>
  );
}
export default IconAugmentedReality2;
