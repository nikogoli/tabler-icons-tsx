/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconMoodEmpty({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-mood-empty"
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
      <line x1={9} y1={10} x2={9.01} y2={10} />
      <line x1={15} y1={10} x2={15.01} y2={10} />
      <line x1={9} y1={15} x2={15} y2={15} />
    </svg>
  );
}
export default IconMoodEmpty;
