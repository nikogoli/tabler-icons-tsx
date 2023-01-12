function IconZoomExclamation({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-zoom-exclamation"
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
      <circle cx={10} cy={10} r={7} />
      <path d="M21 21l-6 -6" />
      <path d="M10 13v.01" />
      <path d="M10 7v3" />
    </svg>
  );
}
export default IconZoomExclamation;
