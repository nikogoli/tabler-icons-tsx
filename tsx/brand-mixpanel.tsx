/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBrandMixpanel({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-mixpanel"
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
      <circle cx={4.5} cy={12} r={2.5} />
      <circle cx={20.5} cy={12} r={1.5} />
      <circle cx={13} cy={12} r={2} />
    </svg>
  );
}
export default IconBrandMixpanel;
