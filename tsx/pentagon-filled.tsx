/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconPentagonFilled({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-pentagon-filled"
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
      <path
        d="M10.205 2.6l-6.96 5.238a3 3 0 0 0 -1.045 3.338l2.896 8.765a3 3 0 0 0 2.85 2.059h8.12a3 3 0 0 0 2.841 -2.037l2.973 -8.764a3 3 0 0 0 -1.05 -3.37l-7.033 -5.237l-.091 -.061l-.018 -.01l-.106 -.07a3 3 0 0 0 -3.377 .148z"
        strokeWidth={0}
        fill="currentColor"
      />
    </svg>
  );
}
export default IconPentagonFilled;
