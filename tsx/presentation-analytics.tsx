/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconPresentationAnalytics({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-presentation-analytics"
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
      <path d="M9 12v-4" />
      <path d="M15 12v-2" />
      <path d="M12 12v-1" />
      <path d="M3 4h18" />
      <path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" />
      <path d="M12 16v4" />
      <path d="M9 20h6" />
    </svg>
  );
}
export default IconPresentationAnalytics;
