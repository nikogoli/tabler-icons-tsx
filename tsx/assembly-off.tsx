/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconAssemblyOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-assembly-off"
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
      <path d="M8.703 4.685l2.326 -1.385a2.056 2.056 0 0 1 2 0l6 3.573h-.029a2 2 0 0 1 1 1.747v6.536c0 .248 -.046 .49 -.132 .715m-2.156 1.837l-4.741 3.029a2 2 0 0 1 -1.942 0l-6 -3.833a2 2 0 0 1 -1.029 -1.747v-6.537a2 2 0 0 1 1.029 -1.748l1.157 -.689" />
      <path d="M11.593 7.591c.295 -.133 .637 -.12 .921 .04l3 1.79h-.014c.312 .181 .503 .516 .5 .877v1.702m-1.152 2.86l-2.363 1.514a1 1 0 0 1 -.97 0l-3 -1.922a1 1 0 0 1 -.515 -.876v-3.278c0 -.364 .197 -.7 .514 -.877l.568 -.339" />
      <path d="M3 3l18 18" />
    </svg>
  );
}
export default IconAssemblyOff;
