/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconPlayerEjectFilled({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-player-eject-filled"
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
      <path
        d="M11.247 3.341l-7 8c-.565 .647 -.106 1.659 .753 1.659h14c.86 0 1.318 -1.012 .753 -1.659l-7 -8a1 1 0 0 0 -1.506 0z"
        strokeWidth={0}
        fill="currentColor"
      />
      <path
        d="M18 15h-12a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2z"
        strokeWidth={0}
        fill="currentColor"
      />
    </svg>
  );
}
export default IconPlayerEjectFilled;
