/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBrandThreejs({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-threejs"
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
      <path d="M8 22l-5 -19l19 5.5z" />
      <path d="M12.573 17.58l-6.152 -1.576l8.796 -9.466l1.914 6.64" />
      <path d="M12.573 17.58l-1.573 -6.58l6.13 2.179" />
      <path d="M9.527 4.893l1.473 6.107l-6.31 -1.564z" />
    </svg>
  );
}
export default IconBrandThreejs;
