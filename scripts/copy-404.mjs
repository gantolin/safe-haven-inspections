// GitHub Pages serves dist/client/404.html for any URL that has no file. The
// prerenderer writes the /404 route to 404/index.html, so copy it into place
// and drop the directory so /404/ is not a live, indexable URL of its own.
import { copyFileSync, existsSync, rmSync } from "node:fs";

const src = "dist/client/404/index.html";
if (!existsSync(src)) {
  console.error(`copy-404: ${src} was not prerendered, so the site would fall back to GitHub's 404 page.`);
  process.exit(1);
}
copyFileSync(src, "dist/client/404.html");
rmSync("dist/client/404", { recursive: true, force: true });
console.log("copy-404: wrote dist/client/404.html");
