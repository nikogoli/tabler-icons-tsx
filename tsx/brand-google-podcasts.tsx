/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"

function IconBrandGooglePodcasts({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-google-podcasts"
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
      <path d="M12 3v2" />
      <path d="M12 19v2" />
      <path d="M12 8v8" />
      <path d="M8 17v2" />
      <path d="M4 11v2" />
      <path d="M20 11v2" />
      <path d="M8 5v8" />
      <path d="M16 7v-2" />
      <path d="M16 19v-8" />
    </svg>
  );
}
export default IconBrandGooglePodcasts;
