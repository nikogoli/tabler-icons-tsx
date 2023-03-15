# TSX Tabler Icons with preact-pragma
Forked from [hashrock/tabler-icons-tsx](https://github.com/hashrock/tabler-icons-tsx)

fork 元の各.tsx ファイルの先頭に以下の pragma を追記することで fresh 以外でも利用できるようにしたファイル群
```ts
/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"
```

## Usage

```ts
// import IconBrandDeno from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-deno.tsx"
//                                     ↓         ↓            ↓
import IconBrandDeno from "https://pax.deno.dev/nikogoli/tabler-icons-tsx@0.0.3/tsx/brand-deno.tsx"

// あるいは、pax を利用せず直接 ↓ のように記述する
//import IconBrandDeno from "https://raw.githubusercontent.com/nikogoli/tabler-icons-tsx/0.0.3/tsx/brand-deno.tsx"
```
