/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBuildingBroadcastTower({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-building-broadcast-tower"
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
      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M16.616 13.924a5 5 0 1 0 -9.23 0" />
      <path d="M20.307 15.469a9 9 0 1 0 -16.615 0" />
      <path d="M9 21l3 -9l3 9" />
      <path d="M10 19h4" />
    </svg>
  );
}
export default IconBuildingBroadcastTower;
