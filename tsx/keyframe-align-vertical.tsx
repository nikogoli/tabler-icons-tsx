/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconKeyframeAlignVertical({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-keyframe-align-vertical"
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
      <path d="M12 2v2" />
      <path d="M12.816 16.58c-.207 .267 -.504 .42 -.816 .42c-.312 0 -.61 -.153 -.816 -.42l-2.908 -3.748a1.39 1.39 0 0 1 0 -1.664l2.908 -3.748c.207 -.267 .504 -.42 .816 -.42c.312 0 .61 .153 .816 .42l2.908 3.748a1.39 1.39 0 0 1 0 1.664l-2.908 3.748z" />
      <path d="M12 20v2" />
    </svg>
  );
}
export default IconKeyframeAlignVertical;
