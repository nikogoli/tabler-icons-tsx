/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconPentagonOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-pentagon-off"
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
      <path d="M8.868 4.857l1.936 -1.457a2 2 0 0 1 2.397 0l7.032 5.237a2 2 0 0 1 .7 2.247l-1.522 4.485m-1.027 3.029l-.424 1.25a2 2 0 0 1 -1.894 1.358h-8.12a2 2 0 0 1 -1.9 -1.373l-2.896 -8.765a2 2 0 0 1 .696 -2.225l2.736 -2.06" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconPentagonOff;
