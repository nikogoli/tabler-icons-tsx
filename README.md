# TSX Tabler Icons with preact-pragma
Forked from [hashrock/tabler-icons-tsx](https://github.com/hashrock/tabler-icons-tsx)

fork 元の各.tsx ファイルの先頭に以下の pragma を追記することで fresh 以外でも利用できるようにしたファイル群
```ts
/** @jsx h */
import { h } from "https://esm.sh/preact@10.10.6"
```