function IconGrain({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-grain" width={size} height={size} viewBox="0 0 24 24" stroke-width={stroke} stroke={color} fill="none" stroke-linecap="round" stroke-linejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><circle cx={4.5} cy={9.5} r={1} /><circle cx={9.5} cy={4.5} r={1} /><circle cx={9.5} cy={14.5} r={1} /><circle cx={4.5} cy={19.5} r={1} /><circle cx={14.5} cy={9.5} r={1} /><circle cx={19.5} cy={4.5} r={1} /><circle cx={14.5} cy={19.5} r={1} /><circle cx={19.5} cy={14.5} r={1} /></svg>;
}

export default IconGrain;