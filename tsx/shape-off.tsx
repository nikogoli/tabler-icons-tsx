function IconShapeOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shape-off" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3.575 3.597a2 2 0 0 0 2.849 2.808" /><circle cx={19} cy={5} r={2} /><circle cx={5} cy={19} r={2} /><path d="M17.574 17.598a2 2 0 0 0 2.826 2.83" /><path d="M5 7v10" /><path d="M9 5h8" /><path d="M7 19h10" /><path d="M19 7v8" /><path d="M3 3l18 18" /></svg>;
}

export default IconShapeOff;