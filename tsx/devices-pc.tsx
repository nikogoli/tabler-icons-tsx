/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconDevicesPc({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-devices-pc"
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
      <path d="M3 5h6v14h-6z" />
      <path d="M12 9h10v7h-10z" />
      <path d="M14 19h6" />
      <path d="M17 16v3" />
      <path d="M6 13v.01" />
      <path d="M6 16v.01" />
    </svg>
  );
}
export default IconDevicesPc;
