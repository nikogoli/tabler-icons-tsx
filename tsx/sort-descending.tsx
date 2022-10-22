function IconSortDescending({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sort-descending" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><line x1={4} y1={6} x2={13} y2={6} /><line x1={4} y1={12} x2={11} y2={12} /><line x1={4} y1={18} x2={11} y2={18} /><polyline points="15 15 18 18 21 15" /><line x1={18} y1={6} x2={18} y2={18} /></svg>;
}

export default IconSortDescending;