/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconMoodSilence({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-mood-silence"
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
      <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
      <path d="M9 10h-.01" />
      <path d="M15 10h-.01" />
      <path d="M8 15h8" />
      <path d="M9 14v2" />
      <path d="M12 14v2" />
      <path d="M15 14v2" />
    </svg>
  );
}
export default IconMoodSilence;
