/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconSocialOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-social-off"
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
      <path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M17.57 17.602a2 2 0 0 0 2.83 2.827" />
      <path d="M11.113 11.133a3 3 0 1 0 3.765 3.715" />
      <path d="M12 7v1" />
      <path d="M6.7 17.8l2.8 -2" />
      <path d="M17.3 17.8l-2.8 -2" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconSocialOff;
