/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconHomeCog({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-home-cog"
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
      <path d="M9 21v-6a2 2 0 0 1 2 -2h1.6" />
      <path d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h4.159" />
      <path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M18 14.5v1.5" />
      <path d="M18 20v1.5" />
      <path d="M21.032 16.25l-1.299 .75" />
      <path d="M16.27 19l-1.3 .75" />
      <path d="M14.97 16.25l1.3 .75" />
      <path d="M19.733 19l1.3 .75" />
    </svg>
  );
}
export default IconHomeCog;
