/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconGenderHermaphrodite({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-gender-hermaphrodite"
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
      <path d="M12 14v7" />
      <path d="M9 18h6" />
      <path d="M12 6a4 4 0 1 1 0 8a4 4 0 0 1 0 -8z" />
      <path d="M15 3a3 3 0 1 1 -6 0" />
    </svg>
  );
}
export default IconGenderHermaphrodite;
