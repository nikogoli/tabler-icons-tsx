/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconCertificate2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-certificate-2"
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
      <path d="M12 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M10 7h4" />
      <path d="M10 18v4l2 -1l2 1v-4" />
      <path d="M10 19h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2" />
    </svg>
  );
}
export default IconCertificate2;
