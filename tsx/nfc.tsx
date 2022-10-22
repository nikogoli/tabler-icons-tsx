function IconNfc({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-nfc" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 20a3 3 0 0 1 -3 -3v-11l5 5" /><path d="M13 4a3 3 0 0 1 3 3v11l-5 -5" /><rect x={4} y={4} width={16} height={16} rx={3} /></svg>;
}

export default IconNfc;