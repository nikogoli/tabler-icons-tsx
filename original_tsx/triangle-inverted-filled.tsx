function IconTriangleInvertedFilled({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-triangle-inverted-filled"
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
        d="M19.007 3a3 3 0 0 1 2.828 3.94l-.068 .185l-.062 .126l-7.09 12.233a3 3 0 0 1 -5.137 .19l-.103 -.173l-7.1 -12.25l-.061 -.125a3 3 0 0 1 2.625 -4.125l.058 -.001l.06 .002l.043 -.002h14.007z"
        strokeWidth={0}
        fill="currentColor"
      />
    </svg>
  );
}
export default IconTriangleInvertedFilled;
