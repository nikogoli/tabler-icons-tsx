function IconLetterH({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-letter-h"
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
      <line x1={17} y1={4} x2={17} y2={20} />
      <line x1={7} y1={12} x2={17} y2={12} />
      <line x1={7} y1={4} x2={7} y2={20} />
    </svg>
  );
}
export default IconLetterH;
