/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconTagsOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-tags-off"
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
      <path d="M6 6h-.975a2.025 2.025 0 0 0 -2.025 2.025v2.834c0 .537 .213 1.052 .593 1.432l6.116 6.116a2.025 2.025 0 0 0 2.864 0l2.834 -2.834c.028 -.028 .055 -.056 .08 -.085" />
      <path d="M17.573 18.407l.418 -.418m2 -2l.419 -.419a2.025 2.025 0 0 0 0 -2.864l-7.117 -7.116" />
      <path d="M6 9h-.01" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconTagsOff;
