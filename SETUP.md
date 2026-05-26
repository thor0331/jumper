const fs = require('fs');

const files = ['index.html', 'browse-projects/index.html', 'project.html', 'checkout.html', 'dashboard.html', 'admin.html'];

const seoSnippet = `
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-BYLLSY2990"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-BYLLSY2990');
  </script>
  <meta name="google-site-verification" content="HGNls9zIHckqixDYlmV9I-IKEdwRQBj1IWSNIQHXL0o" />
`;

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    if (!content.includes('G-BYLLSY2990') && file !== 'index.html') {
      content = content.replace('<title>', seoSnippet.trim() + '\n  <title>');
    }
    
    if (content.includes('class="nav-logo"') && !content.includes('<a href="https://jumperjunction.codes/" class="nav-logo">')) {
      content = content.replace(/<div class="nav-logo">([\s\S]*?)<\/div>/g, '<a href="https://jumperjunction.codes/" class="nav-logo">$1</a>');
    }
    
    fs.writeFileSync(file, content);
  }
}
console.log('SEO and Logo links updated.');
