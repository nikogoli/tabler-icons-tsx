/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconWashPress({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-wash-press"
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
      <path d="M3.486 7.965c.168 .02 .34 .033 .514 .035c.79 .009 1.539 -.178 2 -.5c.461 -.32 1.21 -.507 2 -.5c.79 -.007 1.539 .18 2 .5c.461 .322 1.21 .509 2 .5c.79 .009 1.539 -.178 2 -.5c.461 -.32 1.21 -.507 2 -.5c.79 -.007 1.539 .18 2 .5c.461 .322 1.21 .509 2 .5c.17 0 .339 -.014 .503 -.034" />
      <path d="M3 5l1.721 10.329a2 2 0 0 0 1.973 1.671h10.612a2 2 0 0 0 1.973 -1.671l1.721 -10.329" />
      <path d="M5 20h14" />
    </svg>
  );
}
export default IconWashPress;
