/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconTimelineEvent({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-timeline-event"
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
      <path d="M12 20m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M10 20h-6" />
      <path d="M14 20h6" />
      <path d="M12 15l-2 -2h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-3l-2 2z" />
    </svg>
  );
}
export default IconTimelineEvent;
