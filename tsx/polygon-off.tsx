function IconPolygonOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-polygon-off" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={12} cy={5} r={2} /><circle cx={19} cy={8} r={2} /><circle cx={5} cy={11} r={2} /><circle cx={15} cy={19} r={2} /><path d="M6.5 9.5l1.546 -1.311" /><path d="M14 5.5l3 1.5" /><path d="M18.5 10l-1.185 3.318m-1.062 2.972l-.253 .71" /><path d="M13.5 17.5l-7 -5" /><path d="M3 3l18 18" /></svg>;
}

export default IconPolygonOff;