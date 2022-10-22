function IconChartBubble({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-bubble" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={6} cy={16} r={3} /><circle cx={16} cy={19} r={2} /><circle cx={14.5} cy={7.5} r={4.5} /></svg>;
}

export default IconChartBubble;