/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconContrast2Off({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-contrast-2-off"
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
      <path d="M4 18h2a6 6 0 0 0 6 -6m.878 -3.126a5.996 5.996 0 0 1 5.122 -2.874h2" />
      <path d="M8 4h10a2 2 0 0 1 2 2v10m-.586 3.414a1.994 1.994 0 0 1 -1.414 .586h-12a2 2 0 0 1 -2 -2v-12c0 -.547 .22 -1.043 .576 -1.405" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconContrast2Off;
