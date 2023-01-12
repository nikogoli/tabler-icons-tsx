/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconZoomCancel({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-zoom-cancel"
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
      <circle cx={10} cy={10} r={7} />
      <line x1={8} y1={8} x2={12} y2={12} />
      <line x1={12} y1={8} x2={8} y2={12} />
      <line x1={21} y1={21} x2={15} y2={15} />
    </svg>
  );
}
export default IconZoomCancel;
