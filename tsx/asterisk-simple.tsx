/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconAsteriskSimple({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-asterisk-simple"
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
      <path d="M12 12v-9" />
      <path d="M12 12l-9 -2.5" />
      <path d="M12 12l9 -2.5" />
      <path d="M12 12l6 8.5" />
      <path d="M12 12l-6 8.5" />
    </svg>
  );
}
export default IconAsteriskSimple;
