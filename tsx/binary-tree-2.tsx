/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBinaryTree2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-binary-tree-2"
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
      <path d="M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M7 14a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M21 14a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M14 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
      <path d="M12 8v8" />
      <path d="M6.316 12.496l4.368 -4.992" />
      <path d="M17.684 12.496l-4.366 -4.99" />
    </svg>
  );
}
export default IconBinaryTree2;
