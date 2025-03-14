/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconPlayerSkipForward({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-player-skip-forward"
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
      <path d="M4 5v14l12 -7z" />
      <path d="M20 5l0 14" />
    </svg>
  );
}
export default IconPlayerSkipForward;
