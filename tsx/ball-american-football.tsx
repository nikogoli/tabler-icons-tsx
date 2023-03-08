function IconBallAmericanFootball({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-ball-american-football"
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
      <path d="M15 9l-6 6" />
      <path d="M10 12l2 2" />
      <path d="M12 10l2 2" />
      <path d="M8 21a5 5 0 0 0 -5 -5" />
      <path d="M16 3c-7.18 0 -13 5.82 -13 13a5 5 0 0 0 5 5c7.18 0 13 -5.82 13 -13a5 5 0 0 0 -5 -5" />
      <path d="M16 3a5 5 0 0 0 5 5" />
    </svg>
  );
}
export default IconBallAmericanFootball;
