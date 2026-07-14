import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const baseDir = new URL("../public/humanresourceconsulting/", import.meta.url);

const areaLinks = [
  ["Sector 37C", "/areas-we-serve/hr-consultancy-sector-37c-gurgaon/"],
  ["Sector 37D", "/areas-we-serve/hr-consultancy-sector-37d-gurgaon/"],
  ["Sector 37", "/areas-we-serve/hr-consultancy-sector-37-gurgaon/"],
  ["Sector 10A", "/areas-we-serve/hr-consultancy-sector-10a-gurgaon/"],
  ["Sector 9", "/areas-we-serve/hr-consultancy-sector-9-gurgaon/"],
  ["Hero Honda Chowk", "/areas-we-serve/hr-consultancy-hero-honda-chowk-gurgaon/"],
  ["Dwarka Expressway", "/areas-we-serve/hr-consultancy-dwarka-expressway-gurgaon/"],
  ["Basai", "/areas-we-serve/hr-consultancy-basai-gurgaon/"],
  ["Pataudi Road", "/areas-we-serve/hr-consultancy-pataudi-road-gurgaon/"],
];

const block = `
      <section class="services-box area-interlink-box">
        <h2>Areas We Serve in Gurgaon</h2>
        <p>Strive Business Solution provides this service across nearby Gurgaon locations from our Sector 37C office. If your hiring need is location-specific, explore the closest area page below for local directions, FAQs, and area-focused recruitment support.</p>
        <div class="service-links">
          <a href="/areas-we-serve/">All Areas We Serve</a>
          ${areaLinks.map(([label, href]) => `<a href="${href}">HR Consultancy in ${label}</a>`).join("\n          ")}
        </div>
      </section>`;

const dirs = await readdir(baseDir);
for (const dir of dirs) {
  const file = join(baseDir.pathname, dir, "index.html");
  let html;
  try {
    html = await readFile(file, "utf8");
  } catch {
    continue;
  }

  html = html.replace(/<section class="services-box area-interlink-box">[\s\S]*?<\/section>\s*/g, "");

  if (html.includes('<div class="soft-cta">')) {
    html = html.replace('<div class="soft-cta">', `${block}\n      <div class="soft-cta">`);
  } else if (html.includes("</article>")) {
    html = html.replace("</article>", `${block}\n    </article>`);
  } else {
    html = html.replace(
      "</body>",
      `<main class="article-wrapper"><div class="container"><article class="article-card">${block}</article></div></main></body>`,
    );
  }

  await writeFile(file, html);
}

console.log("Service pages interlinked with Areas We Serve pages.");
