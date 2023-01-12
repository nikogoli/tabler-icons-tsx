import { walk } from "https://deno.land/std@0.155.0/fs/mod.ts"

const file_iteratior = walk("./original_tsx",
  { maxDepth: 1, match: [/\.tsx$/] }
)

for await (const fl of file_iteratior){
  const tx = await Deno.readTextFile(fl.path)
  await Deno.writeTextFile(
    `./tsx/${fl.name}`,
    '/** @jsx h */\nimport { h } from "https://esm.sh/preact@10.10.6"\n\n'+ tx
  )
}