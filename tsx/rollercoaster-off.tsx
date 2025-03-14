/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconRollercoasterOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-rollercoaster-off"
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
      <path d="M3 21a5.55 5.55 0 0 0 5.265 -3.795l.735 -2.205a8.759 8.759 0 0 1 2.35 -3.652m2.403 -1.589a8.76 8.76 0 0 1 3.572 -.759h3.675" />
      <path d="M20 9v7m0 4v1" />
      <path d="M8 21v-3" />
      <path d="M12 21v-9" />
      <path d="M16 9.5v2.5m0 4v5" />
      <path d="M15 3h5v3h-5z" />
      <path d="M9.446 5.415l.554 -.415l2 2.5l-.285 .213m-2.268 1.702l-1.447 1.085l-1.8 -.5l-.2 -2l1.139 -.854" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconRollercoasterOff;
