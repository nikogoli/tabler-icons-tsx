import { PathLike } from "https://pax.deno.dev/nikogoli/deno_pathlib@0.0.3"
import { green } from "https://deno.land/std@0.177.0/fmt/colors.ts"

const stash_dir = new PathLike("original_tsx")
const data_dir = new PathLike("tsx")

await data_dir.iterdirMap(async p => {
  if (p.is_file()){
    const tx = await p.read_text()
    if (tx.startsWith("/**") == false){
      await p.move(new PathLike(stash_dir, p.name))
      await p.write_text('/** @jsx h */\nimport { h } from "https://esm.sh/preact@10.10.6"\n\n'+ tx)
      console.log("add pragma:", green(p.name))
    }
  }
})