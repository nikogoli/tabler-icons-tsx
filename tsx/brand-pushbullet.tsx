/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBrandPushbullet({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-pushbullet"
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
      <circle cx={12} cy={12} r={9} />
      <path d="M11 8v8h2a4 4 0 1 0 0 -8h-2z" />
      <path d="M8 8v8" />
    </svg>
  );
}
export default IconBrandPushbullet;
