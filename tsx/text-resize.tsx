function IconTextResize({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-text-resize" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={5} cy={5} r={2} /><circle cx={19} cy={5} r={2} /><circle cx={5} cy={19} r={2} /><circle cx={19} cy={19} r={2} /><path d="M5 7v10" /><path d="M7 5h10" /><path d="M7 19h10" /><path d="M19 7v10" /><path d="M10 10h4" /><path d="M12 14v-4" /></svg>;
}

export default IconTextResize;