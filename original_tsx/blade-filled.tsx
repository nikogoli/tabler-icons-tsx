function IconBladeFilled({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-blade-filled"
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
        d="M11.586 3a2 2 0 0 1 2.828 0l.586 .585l.586 -.585a2 2 0 0 1 2.7 -.117l.128 .117l2.586 2.586a2 2 0 0 1 0 2.828l-.586 .586l.586 .586a2 2 0 0 1 0 2.828l-8.586 8.586a2 2 0 0 1 -2.828 0l-.586 -.586l-.586 .586a2 2 0 0 1 -2.828 0l-2.586 -2.586a2 2 0 0 1 0 -2.828l.585 -.587l-.585 -.585a2 2 0 0 1 -.117 -2.7l.117 -.129zm3.027 4.21a1 1 0 0 0 -1.32 1.497l.292 .293l-1.068 1.067a2.003 2.003 0 0 0 -2.512 1.784l-.005 .149l.005 .15c.01 .125 .03 .248 .062 .367l-1.067 1.068l-.293 -.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l.292 .293l-.292 .293l-.083 .094a1 1 0 0 0 1.497 1.32l.293 -.292l.293 .292l.094 .083a1 1 0 0 0 1.32 -1.497l-.292 -.293l1.069 -1.067a2.003 2.003 0 0 0 2.449 -2.45l1.067 -1.068l.293 .292l.094 .083a1 1 0 0 0 1.32 -1.497l-.292 -.293l.292 -.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-.293 .292l-.293 -.292z"
        strokeWidth={0}
        fill="currentColor"
      />
    </svg>
  );
}
export default IconBladeFilled;
