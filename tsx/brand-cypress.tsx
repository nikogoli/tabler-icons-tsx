/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBrandCypress({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-cypress"
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
      <path d="M19.48 17.007a9 9 0 1 0 -7.48 3.993c.896 0 1.691 -.573 1.974 -1.423l3.526 -10.577" />
      <path d="M13.5 9l2 6" />
      <path d="M10.764 9.411a3 3 0 1 0 -.023 5.19" />
    </svg>
  );
}
export default IconBrandCypress;
