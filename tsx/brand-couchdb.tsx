/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBrandCouchdb({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-couchdb"
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
      <path d="M6 12h12v-2a2 2 0 0 1 2 -2a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2a2 2 0 0 1 2 2v2z" />
      <path d="M6 15h12" />
      <path d="M6 18h12" />
      <path d="M21 11v7" />
      <path d="M3 11v7" />
    </svg>
  );
}
export default IconBrandCouchdb;
