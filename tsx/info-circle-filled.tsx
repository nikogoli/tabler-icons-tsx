/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconInfoCircleFilled({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-info-circle-filled"
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
      <path
        d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 7.66h-1l-.117 .007a1 1 0 0 0 .117 1.993v3l.007 .117a1 1 0 0 0 .993 .883h1l.117 -.007a1 1 0 0 0 .883 -.993l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007v-3l-.007 -.117a1 1 0 0 0 -.993 -.883zm.01 -4l-.127 .007a1 1 0 0 0 .117 1.993l.127 -.007a1 1 0 0 0 -.117 -1.993z"
        fill="currentColor"
        strokeWidth={0}
      />
    </svg>
  );
}
export default IconInfoCircleFilled;
