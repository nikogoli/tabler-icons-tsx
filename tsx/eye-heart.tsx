/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconEyeHeart({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-eye-heart"
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
      <path d="M13.923 11.45a2 2 0 1 0 -2.87 2.312" />
      <path d="M10 17.78c-2.726 -.618 -5.059 -2.545 -7 -5.78c2.4 -4 5.4 -6 9 -6c3.325 0 6.137 1.705 8.438 5.117" />
      <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
    </svg>
  );
}
export default IconEyeHeart;
