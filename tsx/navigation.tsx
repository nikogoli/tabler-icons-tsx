/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconNavigation({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-navigation"
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
      <path d="M12 18.5l7.265 2.463a.535 .535 0 0 0 .57 -.116a.548 .548 0 0 0 .134 -.572l-7.969 -17.275l-7.97 17.275a.547 .547 0 0 0 .135 .572a.535 .535 0 0 0 .57 .116l7.265 -2.463" />
    </svg>
  );
}
export default IconNavigation;
