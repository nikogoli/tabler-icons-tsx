/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconCarrotOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-carrot-off"
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
      <path d="M8.868 8.846c-2.756 3.382 -5.868 12.154 -5.868 12.154s8.75 -3.104 12.134 -5.85m1.667 -2.342a4.486 4.486 0 0 0 -5.589 -5.615" />
      <path d="M9 13l-1.5 -1.5" />
      <path d="M22 8s-1.14 -2 -3 -2c-1.406 0 -3 2 -3 2s1.14 2 3 2s3 -2 3 -2z" />
      <path d="M16 2s-2 1.14 -2 3s2 3 2 3s2 -1.577 2 -3c0 -1.86 -2 -3 -2 -3z" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconCarrotOff;
