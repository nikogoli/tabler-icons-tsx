function IconBrandGoogleAnalytics({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-google-analytics"
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
      <rect x={10} y={9} width={4} height={12} rx={1.105} />
      <rect x={17} y={3} width={4} height={18} rx={1.105} />
      <circle cx={5} cy={19} r={2} />
    </svg>
  );
}
export default IconBrandGoogleAnalytics;
