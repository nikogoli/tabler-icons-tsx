/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconInnerShadowTopRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-inner-shadow-top-right"
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
      <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18z" />
      <path d="M18 12a6 6 0 0 0 -6 -6" />
    </svg>
  );
}
export default IconInnerShadowTopRight;
