/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconDeviceLandlinePhone({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-device-landline-phone"
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
      <path d="M20 3h-2a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2z" />
      <path d="M16 4h-11a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h11" />
      <path d="M12 8h-6v3h6z" />
      <path d="M12 14v.01" />
      <path d="M9 14v.01" />
      <path d="M6 14v.01" />
      <path d="M12 17v.01" />
      <path d="M9 17v.01" />
      <path d="M6 17v.01" />
    </svg>
  );
}
export default IconDeviceLandlinePhone;
