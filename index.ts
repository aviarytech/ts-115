import { watch } from "fs";

const port = 3000;

const watcher = watch(
  import.meta.dir + '/spec',
  { recursive: true },
  (event, filename) => {
    const proc = Bun.spawn(["bun", "build.ts"], {
      stdout: "inherit",
    });
  },
);

const proc = Bun.spawn(["bun", "build.ts"], {
      stdout: "inherit",
    });

Bun.serve({
  port,
  async fetch(req) {
    const file = Bun.file('./dist/index.html');
    try {
      return new Response(file);
    } catch {
      return new Response('Not Found', { status: 404 })
    }
  },
});

console.log(`Listening on ${port}...`)