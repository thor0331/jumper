const fs = require('fs');
let projects = [];
try {
  const data = JSON.parse(fs.readFileSync('../New folder (6)/projects.json', 'utf8'));
  if (data.projects) projects = data.projects;
} catch (e) {
  try {
    const data = JSON.parse(fs.readFileSync('projects.json', 'utf8'));
    if (data.projects) projects = data.projects;
  } catch (e) {
    console.error('Could not find projects.json', e);
  }
}

const baseUrl = 'https://jumperjunction.codes';
let urls = [
  `<url><loc>${baseUrl}/</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>`,
  `<url><loc>${baseUrl}/browse-projects/</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>daily</changefreq><priority>0.8</priority></url>`,
  `<url><loc>${baseUrl}/dashboard.html</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>weekly</changefreq><priority>0.5</priority></url>`,
  `<url><loc>${baseUrl}/checkout.html</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>weekly</changefreq><priority>0.3</priority></url>`
];

projects.forEach(p => {
  if (!p.locked) {
    urls.push(`<url><loc>${baseUrl}/project.html?id=${p.id}</loc><lastmod>${new Date().toISOString().split('T')[0]}</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>`);
  }
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.join('\n  ')}
</urlset>`;

fs.writeFileSync('sitemap.xml', sitemap);
console.log('sitemap.xml generated with ' + urls.length + ' URLs');
