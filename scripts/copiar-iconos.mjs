// Copia a public/icons solo los íconos de Lucide que el código usa.
// Uso: node scripts/copiar-iconos.mjs (después de agregar íconos nuevos en el código).
import fs from "node:fs";
import path from "node:path";

const origen = "node_modules/lucide-static/icons";
const destino = "public/icons";
const disponibles = new Set(fs.readdirSync(origen).map((f) => f.replace(/\.svg$/, "")));

const textos = [];
(function recorrer(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) recorrer(p);
    else if (/\.(jsx?|mjs)$/.test(f)) textos.push(fs.readFileSync(p, "utf8"));
  }
})("src");

const usados = new Set();
for (const t of textos) for (const m of t.matchAll(/["'`]([a-z0-9]+(?:-[a-z0-9]+)*)["'`]/g)) if (disponibles.has(m[1])) usados.add(m[1]);

fs.rmSync(destino, { recursive: true, force: true });
fs.mkdirSync(destino, { recursive: true });
for (const n of usados) fs.copyFileSync(path.join(origen, n + ".svg"), path.join(destino, n + ".svg"));
console.log(`${usados.size} íconos copiados a ${destino}`);
