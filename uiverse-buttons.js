<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-BYLLSY2990"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-BYLLSY2990');
  </script>
  <title>Browse Projects — JumperJunction Free Electronics Tutorials</title>
  <meta name="description" content="Browse hundreds of free online electronics projects, Arduino tutorials, ESP32 builds, and open source hardware guides at JumperJunction.">
  <meta name="keywords" content="browse electronics projects, jumper, jumperjunction, jumper junction, jumper junctions, jumpers junction, free online electronics projects, free electronics projects, electronics projects, open source hardware, arduino projects, esp32 projects, esp8266 projects, raspberry pi projects, maker space, DIY electronics, coding, wiring guides">
  <link rel="canonical" href="https://jumperjunction.codes/browse-projects/" />
  
  <meta property="og:title" content="Browse Projects — JumperJunction">
  <meta property="og:description" content="Browse hundreds of free online electronics projects, Arduino tutorials, ESP32 builds, and open source hardware guides at JumperJunction.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://jumperjunction.codes/browse-projects/">
  <meta property="og:image" content="https://jumperjunction.codes/favicon.png">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Browse Projects — JumperJunction">
  <meta name="twitter:description" content="Browse hundreds of free online electronics projects and open source hardware guides.">
  <meta name="twitter:image" content="https://jumperjunction.codes/favicon.png">
  
  <link rel="icon" type="image/svg+xml" href="../favicon.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link
    href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&family=Instrument+Sans:wght@400;500&display=swap"
    rel="stylesheet">
  <style>
    :root {
      --bg: #080a0f;
      --bg2: #0d0f17;
      --surface: #111420;
      --surface2: #181c2a;
      --border: #1e2235;
      --border2: #252a3d;
      --text: #eef3ff;
      --muted: #99a8c7;
      --muted2: #7382a4;
      --green: #3dffa0;
      --blue: #5eb8ff;
      --amber: #ffb340;
      --red: #ff6b7a;
      --purple: #b57bff;
      --cyan: #40d9f0;
      --display: 'Syne', sans-serif;
      --body: 'Instrument Sans', sans-serif;
      --mono: 'JetBrains Mono', monospace;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0
    }

    html {
      scroll-behavior: smooth
    }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: var(--body);
      font-size: 15px;
      line-height: 1.6;
      overflow-x: hidden
    }

    a {
      text-decoration: none;
      color: inherit
    }

    body[data-theme="light"] {
      --bg: #f4f7fb;
      --bg2: #e8edf5;
      --surface: #ffffff;
      --surface2: #f4f7fb;
      --border: #d7deea;
      --border2: #bcc7d9;
      --text: #0f1726;
      --muted: #43516c;
      --muted2: #62708a;
    }

    /* NAV */
    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      padding: 0 2rem;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(8, 10, 15, 0.85);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--border)
    }

    body[data-theme="light"] nav {
      background: rgba(244, 247, 251, 0.9)
    }

    .nav-logo {
      font-family: var(--display);
      font-size: 1.1rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      display: flex;
      align-items: center;
      gap: 8px
    }

    .logo-icon {
      width: 28px;
      height: 28px;
      background: var(--green);
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #000;
      font-weight: 700
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 1rem
    }

    .theme-toggle {
      font-family: var(--mono);
      font-size: 11px;
      color: var(--muted);
      background: none;
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 7px 12px;
      cursor: pointer;
      transition: all 0.2s
    }

    .theme-toggle:hover {
      color: var(--text);
      border-color: var(--muted)
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 1.5rem
    }

    .nav-links a {
      font-size: 13px;
      color: var(--muted);
      transition: color 0.2s;
      font-family: var(--mono)
    }

    /* DOCK NAVIGATION */
    .dock-container {
      position: fixed;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      height: 60px;
      display: flex;
      align-items: center;
      z-index: 1000;
    }
    .dock {
      display: flex;
      gap: 16px;
      padding: 0;
      background: transparent;
      border: none;
      border-radius: 0;
      backdrop-filter: none;
      box-shadow: none;
    }
    .dock-item {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background: transparent;
      border: none;
      color: var(--muted);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1), background 0.2s, color 0.2s;
      transform: scale(var(--scale, 1)) translateY(var(--translateY, 0));
      transform-origin: center;
      position: relative;
    }
    .dock-item:hover {
      background: rgba(255, 255, 255, 0.05);
      color: var(--text);
    }
    .dock-item svg { width: 18px; height: 18px; }
    .dock-item::after {
      content: attr(aria-label);
      position: absolute;
      bottom: -32px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--surface);
      border: 1px solid var(--border);
      padding: 4px 8px;
      border-radius: 6px;
      font-family: var(--mono);
      font-size: 10px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s;
      white-space: nowrap;
    }
    .dock-item:hover::after { opacity: 1; }

    .nav-links a:hover {
      color: var(--text)
    }

    /* HERO */
    .hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 80px 2rem 4rem;
      position: relative;
      overflow: hidden;
      text-align: center
    }

    .hero-bg {
      position: absolute;
      inset: 0;
      z-index: 0
    }

    .hero-grid {
      position: absolute;
      inset: 0;
      background-image: linear-gradient(rgba(62, 255, 160, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(62, 255, 160, 0.03) 1px, transparent 1px);
      background-size: 60px 60px
    }

    .hero-glow {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
      width: 700px;
      height: 400px;
      background: radial-gradient(ellipse, rgba(62, 255, 160, 0.06) 0%, transparent 70%);
      pointer-events: none
    }

    .hero-glow2 {
      position: absolute;
      top: 40%;
      left: 20%;
      width: 400px;
      height: 300px;
      background: radial-gradient(ellipse, rgba(94, 184, 255, 0.04) 0%, transparent 70%);
      pointer-events: none
    }

    .hero-content {
      position: relative;
      z-index: 1;
      max-width: 900px
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-family: var(--mono);
      font-size: 11px;
      padding: 6px 16px;
      border: 1px solid rgba(62, 255, 160, 0.3);
      border-radius: 20px;
      color: var(--green);
      margin-bottom: 2rem;
      letter-spacing: 0.05em;
      animation: fadeup 0.6s ease both
    }

    .hero-badge-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--green);
      animation: pulse 2s infinite
    }

    @keyframes pulse {

      0%,
      100% {
        opacity: 1
      }

      50% {
        opacity: 0.4
      }
    }

    h1.hero-title {
      font-family: var(--display);
      font-size: clamp(2.8rem, 8vw, 6rem);
      font-weight: 800;
      line-height: 1.0;
      letter-spacing: -0.02em;
      margin-bottom: 1.5rem;
      animation: fadeup 0.6s 0.1s ease both;
      opacity: 0
    }

    .hero-title .line2 {
      color: var(--green)
    }

    .hero-title .line3 {
      color: var(--muted);
      font-weight: 400;
      font-size: 0.65em
    }

    .hero-sub {
      font-size: 1.05rem;
      color: var(--muted);
      max-width: 560px;
      margin: 0 auto 3rem;
      animation: fadeup 0.6s 0.2s ease both;
      opacity: 0;
      line-height: 1.8
    }

    .hero-cta {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
      animation: fadeup 0.6s 0.3s ease both;
      opacity: 0
    }

    .btn-primary {
      padding: 14px 32px;
      background: var(--green);
      color: #000;
      border-radius: 8px;
      font-weight: 600;
      font-family: var(--display);
      font-size: 14px;
      letter-spacing: 0.02em;
      transition: all 0.2s;
      border: none;
      cursor: pointer
    }

    .btn-primary:hover {
      background: #5affc0;
      transform: translateY(-2px)
    }

    .btn-outline {
      padding: 14px 32px;
      border: 1px solid var(--border2);
      color: var(--text);
      border-radius: 8px;
      font-weight: 500;
      font-family: var(--body);
      font-size: 14px;
      transition: all 0.2s
    }

    .btn-outline:hover {
      border-color: var(--muted);
      transform: translateY(-2px)
    }

    .hero-stats {
      display: flex;
      gap: 3rem;
      justify-content: center;
      margin-top: 4rem;
      animation: fadeup 0.6s 0.4s ease both;
      opacity: 0
    }

    .stat {
      text-align: center
    }

    .stat-num {
      font-family: var(--display);
      font-size: 2rem;
      font-weight: 800;
      color: var(--text);
      line-height: 1
    }

    .stat-label {
      font-size: 12px;
      color: var(--muted);
      font-family: var(--mono);
      margin-top: 4px
    }

    .hero-scroll {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      color: var(--muted2);
      font-family: var(--mono);
      font-size: 10px;
      letter-spacing: 0.1em;
      animation: fadeup 0.6s 0.6s ease both;
      opacity: 0
    }

    .scroll-line {
      width: 1px;
      height: 40px;
      background: linear-gradient(to bottom, var(--muted2), transparent);
      margin: 0 auto
    }

    @keyframes fadeup {
      from {
        opacity: 0;
        transform: translateY(20px)
      }

      to {
        opacity: 1;
        transform: translateY(0)
      }
    }

    /* BOARDS SECTION */
    .boards-section {
      padding: 5rem 2rem 2rem;
      max-width: 1200px;
      margin: 0 auto
    }

    .section-eyebrow {
      font-family: var(--mono);
      font-size: 11px;
      letter-spacing: 0.15em;
      color: var(--green);
      text-transform: uppercase;
      margin-bottom: 1rem
    }

    .section-title {
      font-family: var(--display);
      font-size: clamp(1.6rem, 4vw, 2.4rem);
      font-weight: 700;
      margin-bottom: 0.5rem
    }

    .section-sub {
      color: var(--muted);
      font-size: 14px;
      margin-bottom: 2.5rem
    }

    .boards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 12px;
      margin-bottom: 3rem
    }

    .board-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 1.25rem 1rem;
      cursor: pointer;
      transition: all 0.25s;
      text-align: center;
      position: relative;
      overflow: hidden
    }

    .board-card::before {
      content: '';
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity 0.3s
    }

    .board-card:hover,
    .board-card.active {
      border-color: var(--card-color, var(--green));
      transform: translateY(-3px)
    }

    .board-card.active::before {
      opacity: 0.05;
      background: var(--card-color, var(--green))
    }

    .board-icon {
      font-size: 1.6rem;
      margin-bottom: 0.5rem;
      display: block
    }

    .board-name {
      font-family: var(--display);
      font-weight: 600;
      font-size: 14px;
      color: var(--text)
    }

    .board-count {
      font-family: var(--mono);
      font-size: 11px;
      color: var(--muted);
      margin-top: 3px
    }

    .board-card.active .board-name {
      color: var(--card-color, var(--green))
    }

    /* SEARCH + FILTER BAR */
    .filter-bar {
      display: flex;
      gap: 12px;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 2rem
    }

    .search-wrap {
      position: relative;
      flex: 1;
      min-width: 260px
    }

    .search-wrap input {
      width: 100%;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 10px 14px 10px 40px;
      color: var(--text);
      font-size: 14px;
      font-family: var(--body);
      outline: none;
      transition: border-color 0.2s
    }

    .search-wrap input:focus {
      border-color: var(--border2)
    }

    .search-wrap input::placeholder {
      color: var(--muted2)
    }

    .search-icon {
      position: absolute;
      left: 13px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--muted);
      font-size: 15px;
      pointer-events: none
    }

    .diff-filter {
      display: flex;
      gap: 6px;
      flex-wrap: wrap
    }

    .diff-btn {
      font-family: var(--mono);
      font-size: 11px;
      padding: 8px 14px;
      border-radius: 20px;
      border: 1px solid var(--border);
      background: none;
      color: var(--muted);
      cursor: pointer;
      transition: all 0.2s;
      letter-spacing: 0.03em
    }

    .diff-btn:hover,
    .diff-btn.active {
      color: var(--text);
      border-color: var(--muted)
    }

    .diff-btn[data-d="beginner"].active {
      border-color: var(--green);
      color: var(--green)
    }

    .diff-btn[data-d="intermediate"].active {
      border-color: var(--amber);
      color: var(--amber)
    }

    .diff-btn[data-d="funbuild"].active {
      border-color: var(--purple);
      color: var(--purple)
    }

    .diff-btn[data-d="pro"].active {
      border-color: var(--red);
      color: var(--red)
    }

    .diff-btn[data-d="complex"].active {
      border-color: var(--cyan);
      color: var(--cyan)
    }

    /* PROJECT CARDS */
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 16px
    }

    .proj-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 14px;
      overflow: hidden;
      transition: all 0.25s;
      cursor: pointer;
      display: flex;
      flex-direction: column
    }

    .proj-card:hover {
      border-color: var(--border2);
      transform: translateY(-4px);
      background: var(--surface2)
    }

    .proj-card-top {
      padding: 1.25rem 1.25rem 0
    }

    .proj-card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 0.75rem
    }

    .proj-board-badge {
      font-family: var(--mono);
      font-size: 10px;
      padding: 3px 10px;
      border-radius: 20px;
      border: 1px solid;
      letter-spacing: 0.05em
    }

    .diff-badge {
      font-family: var(--mono);
      font-size: 10px;
      padding: 3px 10px;
      border-radius: 20px
    }

    .diff-beginner {
      background: rgba(61, 255, 160, 0.08);
      color: var(--green)
    }

    .diff-intermediate {
      background: rgba(255, 179, 64, 0.08);
      color: var(--amber)
    }

    .diff-funbuild {
      background: rgba(181, 123, 255, 0.08);
      color: var(--purple)
    }

    .diff-pro {
      background: rgba(255, 107, 122, 0.08);
      color: var(--red)
    }

    .diff-complex {
      background: rgba(64, 217, 240, 0.08);
      color: var(--cyan)
    }

    .proj-card h3 {
      font-family: var(--display);
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--text);
      margin-bottom: 0.5rem;
      line-height: 1.3;
      flex: 1;
    }

    .interact-btn {
      background: transparent;
      border: 1px solid transparent;
      border-radius: 20px;
      padding: 4px 8px;
      display: flex;
      align-items: center;
      gap: 4px;
      font-family: var(--mono);
      font-size: 11px;
      color: var(--muted);
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .interact-btn:hover { background: var(--surface2); color: var(--text); }
    .interact-btn.active { color: var(--text); border-color: var(--border); }
    .interact-btn.active .count { font-weight: bold; }

    .proj-card p {
      font-size: 13px;
      color: var(--muted);
      line-height: 1.7
    }

    .proj-card-bottom {
      padding: 1rem 1.25rem;
      margin-top: auto;
      border-top: 1px solid var(--border);
      display: flex;
      gap: 6px;
      flex-wrap: wrap
    }

    .part-chip {
      font-size: 11px;
      padding: 3px 9px;
      border-radius: 20px;
      background: var(--bg2);
      border: 1px solid var(--border);
      color: var(--muted)
    }

    .proj-learn {
      padding: 0 1.25rem 0.75rem;
      font-size: 12px;
      color: var(--muted);
      font-family: var(--mono);
      display: flex;
      align-items: center;
      gap: 6px
    }

    .proj-learn::before {
      content: '→';
      color: var(--green)
    }

    .empty-state {
      text-align: center;
      padding: 4rem 2rem;
      color: var(--muted);
      grid-column: 1/-1
    }

    .empty-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
      opacity: 0.3
    }

    /* ACCORDION */
    .accordion { display: flex; flex-direction: column; gap: 10px; }
    .accordion-item { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; }
    .accordion-header { display: flex; align-items: center; justify-content: space-between; padding: 1.25rem 1.5rem; cursor: pointer; user-select: none; list-style: none; }
    .accordion-header::-webkit-details-marker { display: none; }
    .accordion-header h3 { font-family: var(--display); font-size: 1.15rem; margin: 0; }
    .accordion-icon { font-size: 1.6rem; color: var(--muted); font-family: var(--mono); line-height: 1; }
    details[open] .accordion-icon { color: var(--green); }
    details[open] .accordion-icon::before { content: "−"; }
    details:not([open]) .accordion-icon::before { content: "+"; }
    .accordion-content { padding: 0 1.5rem 1.5rem; border-top: 1px solid var(--border2); margin-top: 0.5rem; padding-top: 1rem; }

    /* FOOTER */
    footer {
      border-top: 1px solid var(--border);
      padding: 2rem;
      text-align: center;
      color: var(--muted2);
      font-size: 12px;
      font-family: var(--mono);
      margin-top: 6rem
    }

    footer a {
      color: var(--muted);
      transition: color 0.2s
    }

    footer a:hover {
      color: var(--green)
    }

    /* LOADING */
    .loading {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6rem;
      gap: 12px;
      color: var(--muted);
      font-family: var(--mono);
      font-size: 13px;
      grid-column: 1/-1
    }

    .loading-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--green);
      animation: loadpulse 1.2s ease-in-out infinite
    }

    .loading-dot:nth-child(2) {
      animation-delay: 0.2s
    }

    .loading-dot:nth-child(3) {
      animation-delay: 0.4s
    }

    @keyframes loadpulse {

      0%,
      80%,
      100% {
        opacity: 0.2;
        transform: scale(0.8)
      }

      40% {
        opacity: 1;
        transform: scale(1)
      }
    }

    /* BOARD ALL */
    .board-card[data-board="all"] .board-icon {
      background: linear-gradient(135deg, var(--green), var(--blue));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent
    }

    @media(max-width:768px) {
      .nav-actions {
        gap: 0.6rem
      }

      .nav-links {
        display: none
      }

      .theme-toggle {
        padding: 7px 10px
      }

      .hero-stats {
        gap: 1.5rem
      }

      .stat-num {
        font-size: 1.5rem
      }

      .boards-grid {
        grid-template-columns: repeat(3, 1fr)
      }

      .projects-grid {
        grid-template-columns: 1fr
      }

      .filter-bar {
        flex-direction: column;
        align-items: stretch
      }

      .diff-filter {
        justify-content: flex-start
      }
    }
  </style>
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
</head>

<body>

  <nav>
    <a href="https://jumperjunction.codes" class="nav-logo" style="text-decoration:none;color:inherit;">
      <img src="../favicon.svg" alt="JumperJunction logo" class="logo-icon" style="object-fit:cover;padding:0">
      JumperJunction
    </a>
  </nav>

  <div class="dock-container">
    <div class="dock">
      <button class="dock-item" aria-label="Home" onclick="location.href='../'">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
      </button>
      <button class="dock-item" aria-label="About" onclick="location.href='../#about-section'">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
      </button>
      <button class="dock-item" aria-label="Projects" onclick="location.href='index.html'">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
      </button>
      <button id="btn-dock-premium" class="dock-item" aria-label="Premium" onclick="location.href='index.html?premium=1'">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2.8 5.67 6.2.9-4.5 4.39 1.06 6.19L12 17.77 6.44 20.15 7.5 13.96 3 9.57l6.2-.9L12 3z"></path></svg>
      </button>
      <button class="dock-item" id="theme-dock-btn" aria-label="Theme" onclick="toggleTheme()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
      </button>
      <button class="dock-item" id="auth-dock-btn" aria-label="Profile" onclick="openAuthMenu()">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      </button>
    </div>
  </div>



  <!-- PROJECTS SECTION -->
  <section id="projects" style="max-width:1200px;margin:0 auto;padding:100px 2rem 4rem;">

    <div class="boards-section" style="padding:3rem 0 2rem;max-width:100%">
      <div class="section-eyebrow">Browse by board</div>
      <h2 class="section-title">Choose your hardware</h2>
      <p class="section-sub">Select a board or browse all projects</p>
      <div class="boards-grid" id="boards-grid">
        <div class="board-card active" data-board="all" onclick="filterBoard('all',this)"
          style="--card-color:var(--green)">
          <span class="board-icon">⚡</span>
          <div class="board-name">All Boards</div>
          <div class="board-count" id="count-all">loading...</div>
        </div>
      </div>
    </div>

    <div class="filter-bar" id="filter-bar" style="display:none">
      <div class="search-wrap" style="flex:1">
        <span class="search-icon">⌕</span>
        <input type="text" id="search-input" placeholder="Search projects, components, topics..."
          oninput="renderProjects()">
      </div>
      <select id="sort-select" style="background:var(--surface);color:var(--text);border:1px solid var(--border);border-radius:20px;padding:8px 16px;font-family:var(--mono);font-size:12px;outline:none;cursor:pointer" onchange="renderProjects()">
        <option value="recommended">Recommended</option>
        <option value="most_liked">Most Liked</option>
        <option value="most_starred">Most Starred</option>
      </select>
      <div class="diff-filter">
        <button class="diff-btn active" data-d="all" onclick="filterDiff('all',this)">All levels</button>
        <button class="diff-btn" data-d="beginner" onclick="filterDiff('beginner',this)">Beginner</button>
        <button class="diff-btn" data-d="intermediate" onclick="filterDiff('intermediate',this)">Intermediate</button>
        <button class="diff-btn" data-d="pro" onclick="filterDiff('pro',this)">Pro</button>
        <button class="diff-btn" data-d="funbuild" onclick="filterDiff('funbuild',this)">Fun builds</button>
        <button class="diff-btn" data-d="complex" onclick="filterDiff('complex',this)">Complex</button>
      </div>
    </div>

    <div class="projects-grid" id="projects-grid" style="display:none">
      <div class="loading">
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
        <div class="loading-dot"></div><span style="margin-left:8px">Loading projects...</span>
      </div>
    </div>

  </section>

  <div id="auth-menu-modal" class="modal-overlay" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.7);backdrop-filter:blur(4px);z-index:210;align-items:center;justify-content:center;padding:1rem;" onclick="closeAuthMenu()">
    <div class="modal" style="background:var(--surface);border:1px solid var(--border2);border-radius:16px;padding:2rem;max-width:400px;width:100%;text-align:center" onclick="event.stopPropagation()">
      <h3 id="auth-menu-title" style="font-family:var(--display);font-size:1.3rem;font-weight:700;margin-bottom:0.5rem">Account</h3>
      <p id="auth-menu-text" style="color:var(--muted);font-size:13px;margin-bottom:1.5rem;line-height:1.8">Signed in to JumperJunction.</p>
      <div id="auth-menu-actions" style="display:flex;flex-direction:column;gap:10px"></div>
    </div>
  </div>

  <div id="onboarding-modal" class="modal-overlay" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.76);backdrop-filter:blur(5px);z-index:220;align-items:center;justify-content:center;padding:1rem" onclick="event.stopPropagation()">
    <div class="modal" style="background:var(--surface);border:1px solid var(--border2);border-radius:18px;padding:2rem;max-width:520px;width:100%" onclick="event.stopPropagation()">
      <h3 style="font-family:var(--display);font-size:1.35rem;margin-bottom:0.45rem">Complete your profile</h3>
      <p style="color:var(--muted);font-size:13px;line-height:1.8;margin-bottom:1.25rem">Help us personalize JumperJunction for your learning and building journey.</p>
      <div style="display:grid;gap:12px">
        <div>
          <label style="display:block;font-family:var(--mono);font-size:11px;color:var(--muted);margin-bottom:6px">Full name</label>
          <input id="onboard-name" type="text" style="width:100%;padding:12px;border-radius:10px;border:1px solid var(--border);background:var(--surface2);color:var(--text)">
        </div>
        <div>
          <label style="display:block;font-family:var(--mono);font-size:11px;color:var(--muted);margin-bottom:6px">Role</label>
          <select id="onboard-role" style="width:100%;padding:12px;border-radius:10px;border:1px solid var(--border);background:var(--surface2);color:var(--text)">
            <option value="student">Student</option>
            <option value="lecturer">Lecturer</option>
            <option value="professor">Professor</option>
            <option value="hobbyist">Hobbyist</option>
            <option value="engineer">Engineer</option>
            <option value="maker">Maker</option>
          </select>
        </div>
        <div>
          <label style="display:block;font-family:var(--mono);font-size:11px;color:var(--muted);margin-bottom:6px">Experience level</label>
          <select id="onboard-level" style="width:100%;padding:12px;border-radius:10px;border:1px solid var(--border);background:var(--surface2);color:var(--text)">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <div>
          <label style="display:block;font-family:var(--mono);font-size:11px;color:var(--muted);margin-bottom:6px">Main purpose</label>
          <select id="onboard-purpose" style="width:100%;padding:12px;border-radius:10px;border:1px solid var(--border);background:var(--surface2);color:var(--text)">
            <option value="learning">Learning electronics</option>
            <option value="teaching">Teaching students</option>
            <option value="research">Research and experiments</option>
            <option value="projects">Building projects</option>
            <option value="community">Community sharing</option>
          </select>
        </div>
      </div>
      <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:1.4rem">
        <button class="btn-outline" onclick="closeOnboardingModal()">Later</button>
        <button class="btn-primary" style="border:none;cursor:pointer" onclick="saveOnboarding()">Save Profile</button>
      </div>
      <div id="onboarding-status" style="font-family:var(--mono);font-size:12px;color:var(--muted);margin-top:0.8rem"></div>
    </div>
  </div>

  <footer>
    <p>JumperJunction — Open source hardware projects for everyone &nbsp;·&nbsp; Created by PRASHANTH G</p>
  </footer>

  <script>
    // CONFIG — update this to your GitHub repo
    const SITE_NAME = 'JumperJunction';
    const SITE_URL = 'https://jumperjunction.codes/';
    const GITHUB_USER = 'prashanthg05';
    const GITHUB_REPO = 'JumperJunction';
    const PROJECTS_ARCHIVE_PATHS = [
      '../New%20folder%20(6)/projects.json',
      '../projects.json',
      '../New%20folder/projects.json'
    ];
    const ADMIN_SHORTCUT_URL = 'admin.html';
    const THEME_KEY = 'jumper-junction_theme';
    const VISITOR_ID_KEY = 'jumper-junction_visitor_id';
    const VISITS_CACHE_KEY = 'jumper-junction_total_visits_cache';
    const SITE_SESSION_VIEW_KEY = 'jj-site-session-viewed';
    // Worker URL used as fallback if projects.json meta.counterApiBase is not set
    const COUNTER_API_BASE = 'https://jumperjunction-admin-backend.team-jumperjunction.workers.dev';

    const SUPABASE_URL = 'https://wbriqxebdkuqbtcvxtgv.supabase.co';
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndicmlxeGViZGt1cWJ0Y3Z4dGd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyNTA4MTksImV4cCI6MjA5MTgyNjgxOX0._e1mILmLqzbAfgSsAGWzAez5v6Z7RHNR564O4yfJFN0';
    const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    let currentUser = null;
    const AUTH_IDLE_TIMEOUT_MS = 45 * 60 * 1000;
    let authIdleTimer = null;
    let onboardingOpen = false;
    let authMode = 'login';
    let pendingSignupEmail = '';
    let pendingSignupPassword = '';

    function getCartItems() {
      try {
        const cart = JSON.parse(localStorage.getItem('jj_cart') || '[]');
        return Array.isArray(cart) ? cart : [];
      } catch (error) {
        return [];
      }
    }

    function startAuthSessionTimer() {
      if (!currentUser) return;
      if (authIdleTimer) clearTimeout(authIdleTimer);
      authIdleTimer = setTimeout(async () => {
        await supabaseClient.auth.signOut();
        alert('Your session expired for security. Please log in again.');
        location.reload();
      }, AUTH_IDLE_TIMEOUT_MS);
    }

    function registerAuthActivity() {
      if (currentUser) startAuthSessionTimer();
    }

    function setAuthStatus(message, tone = 'muted') {
      const colors = { muted: 'var(--muted)', success: 'var(--green)', error: 'var(--red)' };
      const node = document.getElementById('auth-status');
      if (!node) return;
      node.textContent = message || '';
      node.style.color = colors[tone] || colors.muted;
    }

    function setAuthMode(mode) {
      authMode = mode === 'signup' ? 'signup' : 'login';
      document.getElementById('auth-name-group').style.display = authMode === 'signup' ? 'block' : 'none';
      document.getElementById('password-strength-wrap').style.display = authMode === 'signup' ? 'block' : 'none';
      document.getElementById('forgot-password-btn').style.display = authMode === 'signup' ? 'none' : 'block';
      document.getElementById('otp-section').style.display = 'none';
      document.getElementById('email-section').style.display = 'block';
      document.getElementById('auth-email-submit').textContent = (authMode === 'signup' ? 'Create Account' : 'Login');
      document.getElementById('login-modal-title').textContent = authMode === 'signup' ? 'Create your account' : 'Welcome back';
      document.getElementById('login-modal-subtitle').textContent = authMode === 'signup' ? '' : 'Login with email and password or continue with Google, GitHub, or Facebook.';
      document.getElementById('auth-mode-login-btn').className = authMode === 'login' ? 'btn-primary' : 'btn-outline';
      document.getElementById('auth-mode-signup-btn').className = authMode === 'signup' ? 'btn-primary' : 'btn-outline';
      setAuthStatus('');
      updatePasswordStrength();
    }

    function updatePasswordStrength() {
      const password = document.getElementById('auth-password')?.value || '';
      const bar = document.getElementById('password-strength-bar');
      const text = document.getElementById('password-strength-text');
      if (!bar || !text) return;
      let score = 0;
      if (password.length >= 8) score += 1;
      if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1;
      if (/\d/.test(password)) score += 1;
      if (/[^A-Za-z0-9]/.test(password)) score += 1;
      const widths = ['10%', '30%', '55%', '78%', '100%'];
      const labels = ['Weak', 'Basic', 'Good', 'Strong', 'Very Strong'];
      const colors = ['var(--red)', '#ff926b', 'var(--amber)', 'var(--blue)', 'var(--green)'];
      bar.style.width = widths[Math.min(score, 4)];
      bar.style.background = colors[Math.min(score, 4)];
      text.textContent = labels[Math.min(score, 4)];
    }

    async function notifyWelcomeIfNeeded() {
      const { data: { session } } = await supabaseClient.auth.getSession();
      if (!session) return;
      await fetch(`${COUNTER_API_BASE}/auth/welcome`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${session.access_token}` }
      }).catch(() => null);
    }

    function getPostLoginTarget(defaultTarget = location.pathname + location.search + location.hash) {
      const target = sessionStorage.getItem('jj_post_login_target');
      if (target) {
        sessionStorage.removeItem('jj_post_login_target');
        return target;
      }
      return defaultTarget;
    }

    
    function openLoginModal() {
      sessionStorage.setItem('jj_post_login_target', location.pathname + location.search + location.hash);
      location.href = '../login.html';
    }

    function closeLoginModal() {
      document.getElementById('login-modal').style.display = 'none';
      document.body.style.overflow = 'auto';
      document.getElementById('otp-section').style.display = 'none';
      document.getElementById('email-section').style.display = 'block';
      setAuthStatus('');
    }

    async function getRecaptchaToken() {
      if (typeof grecaptcha !== 'undefined') {
         return await grecaptcha.execute('6LcPUe4sAAAAAHekJ7el--n1g6UsxpKeIEFtlJaK', {action: 'submit'});
      }
      return '';
    }

    async function handleAuth() {
      if (currentUser) {
        await supabaseClient.auth.signOut();
        closeAuthMenu();
        location.replace('../');
      } else {
        openLoginModal();
      }
    }

    async function handleOAuth(provider) {
      const token = await getRecaptchaToken();
      if (!token) {
        alert('Please complete the ReCAPTCHA before logging in.');
        return;
      }
      sessionStorage.setItem('jj_post_login_target', location.pathname + location.search + location.hash);
      await supabaseClient.auth.signInWithOAuth({ provider });
    }

    async function handleEmailAuth() {
      const token = await getRecaptchaToken();
      if (!token) {
        alert('Please complete the ReCAPTCHA before logging in.');
        return;
      }
      const email = document.getElementById('auth-email').value;
      if (!email) return alert('Please enter an email address.');
      const password = document.getElementById('auth-password').value;
      if (!password) return alert('Please enter your password.');
      try {
        if (authMode === 'signup') {
          const fullName = document.getElementById('auth-name').value.trim();
          if (!fullName) return alert('Please enter your full name.');
          const { data, error } = await supabaseClient.auth.signUp({
            email,
            password,
            options: {
              data: { full_name: fullName },
              emailRedirectTo: `${location.origin}/verify-otp.html`
            }
          });
          if (error) throw error;
          if (data.session) {
            await notifyWelcomeIfNeeded();
            location.href = getPostLoginTarget();
            return;
          }
          pendingSignupEmail = email;
          sessionStorage.setItem('jj_pending_signup_email', email);
          location.href = '../verify-otp.html';
        } else {
          const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
          if (error) throw error;
          await notifyWelcomeIfNeeded();
          location.href = getPostLoginTarget();
        }
      } catch(e) {
        setAuthStatus(e.message || 'Authentication failed.', 'error');
      }
    }

    async function verifyOtp() {
      const email = pendingSignupEmail || document.getElementById('auth-email').value;
      const token = document.getElementById('auth-otp').value.trim();
      if (!token) return alert('Please enter the code.');
      try {
        const { error } = await supabaseClient.auth.verifyOtp({
          email,
          token,
          type: 'signup'
        });
        if (error) throw error;
        await notifyWelcomeIfNeeded();
        closeLoginModal();
        location.href = getPostLoginTarget();
      } catch(e) {
        setAuthStatus(e.message || 'Failed to verify OTP.', 'error');
      }
    }

    async function sendPasswordReset() {
      const email = document.getElementById('auth-email').value.trim();
      if (!email) return alert('Enter your email address first.');
      const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
        redirectTo: `${location.origin}/reset-password.html`
      });
      if (error) {
        setAuthStatus(error.message, 'error');
        return;
      }
      setAuthStatus('Password reset email sent. Please check your inbox.', 'success');
    }
    function closeAuthMenu() {
      document.getElementById('auth-menu-modal').style.display = 'none';
      document.body.style.overflow = 'auto';
    }
    function openAuthMenu() {
      if (!currentUser) {
        openLoginModal();
        return;
      }
      const actions = document.getElementById('auth-menu-actions');
      const text = document.getElementById('auth-menu-text');
      text.textContent = currentUser?.email ? `Signed in as ${currentUser.email}` : 'Signed in to JumperJunction.';
      actions.innerHTML = `
        <button class="btn-primary" style="width:100%;border-radius:8px;padding:12px;cursor:pointer;border:none;font-family:inherit;font-weight:600" onclick="location.href='../dashboard.html'">My Account</button>
        <button class="btn-primary" style="width:100%;border-radius:8px;padding:12px;cursor:pointer;border:none;font-family:inherit;font-weight:600" onclick="openCartPage()">My Cart</button>
        <button class="btn-primary" style="width:100%;border-radius:8px;padding:12px;cursor:pointer;border:none;font-family:inherit;font-weight:600" onclick="goToCheckout()">Checkout</button>
        <button class="btn-primary" style="width:100%;border-radius:8px;padding:12px;cursor:pointer;border:none;font-family:inherit;font-weight:600" onclick="handleAuth()">Logout</button>
      `;
      document.getElementById('auth-menu-modal').style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    function openCartPage() {
      closeAuthMenu();
      const cart = getCartItems();
      if (!cart.length) {
        alert('Your premium cart is empty right now.');
        return;
      }
      location.href = '../checkout.html';
    }

    function goToCheckout() {
      openCartPage();
    }
    function closeOnboardingModal() {
      onboardingOpen = false;
      document.getElementById('onboarding-modal').style.display = 'none';
      document.body.style.overflow = 'auto';
    }
    function shouldShowOnboarding(user) {
      if (!user) return false;
      const metadata = user.user_metadata || {};
      if (metadata.jj_onboarding_complete) return false;
      return localStorage.getItem(`jj_onboarding_done:${user.id}`) !== '1';
    }
    function openOnboardingModal() {
      if (!currentUser || !shouldShowOnboarding(currentUser)) return;
      onboardingOpen = true;
      document.getElementById('onboarding-status').textContent = '';
      document.getElementById('onboard-name').value = currentUser.user_metadata?.full_name || currentUser.user_metadata?.name || '';
      document.getElementById('onboarding-modal').style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
    async function saveOnboarding() {
      const fullName = document.getElementById('onboard-name').value.trim();
      const role = document.getElementById('onboard-role').value;
      const level = document.getElementById('onboard-level').value;
      const purpose = document.getElementById('onboard-purpose').value;
      const status = document.getElementById('onboarding-status');
      if (!fullName) {
        status.textContent = 'Full name is required.';
        status.style.color = 'var(--red)';
        return;
      }
      status.textContent = 'Saving your profile...';
      status.style.color = 'var(--muted)';
      try {
        const { data, error } = await supabaseClient.auth.updateUser({
          data: {
            full_name: fullName,
            jj_role: role,
            jj_level: level,
            jj_purpose: purpose,
            jj_onboarding_complete: true
          }
        });
        if (error) throw error;
        currentUser = data.user || currentUser;
        localStorage.setItem(`jj_onboarding_done:${currentUser.id}`, '1');
        status.textContent = 'Logged in successfully. Welcome to JumperJunction.';
        status.style.color = 'var(--green)';
        setTimeout(() => {
          closeOnboardingModal();
          openAuthMenu();
        }, 900);
      } catch (error) {
        status.textContent = error.message || 'Could not save your profile.';
        status.style.color = 'var(--red)';
      }
    }

    async function checkAuth() {
      const { data: { session } } = await supabaseClient.auth.getSession();
      if (session) {
        currentUser = session.user;
        await notifyWelcomeIfNeeded();
        startAuthSessionTimer();
        const btn = document.getElementById('auth-dock-btn');
        if (btn) btn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
        if (document.getElementById('filter-bar')) document.getElementById('filter-bar').style.display = 'flex';
        if (document.getElementById('projects-grid')) document.getElementById('projects-grid').style.display = 'grid';
        if (shouldShowOnboarding(currentUser) && !onboardingOpen) setTimeout(() => openOnboardingModal(), 120);
      } else {
        if (document.getElementById('filter-bar')) document.getElementById('filter-bar').style.display = 'flex';
        if (document.getElementById('projects-grid')) document.getElementById('projects-grid').style.display = 'grid';
        
        // Login prompt disabled to prevent modal spam for guest users
      }
    }

    let allData = { meta: { totalVisits: 0, counterApiBase: '' }, boards: [], projects: [] };
    let activeBoard = 'all';
    let activeDiff = 'all';

    function safeArray(value) {
      return Array.isArray(value) ? value : [];
    }
    const premiumOnly = new URLSearchParams(location.search).get('premium') === '1';

    function escapeHtml(value) {
      return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function formatCount(value) {
      const num = Number(value);
      if (!Number.isFinite(num)) return '0';
      if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
      }
      return num.toString();
    }

    function getVisitorId() {
      let id = localStorage.getItem(VISITOR_ID_KEY);
      if (!id) {
        id = (crypto.randomUUID ? crypto.randomUUID() : 'visitor-' + Date.now() + '-' + Math.random().toString(16).slice(2));
        localStorage.setItem(VISITOR_ID_KEY, id);
      }
      return id;
    }

    function getCachedVisitCount() {
      const value = Number(localStorage.getItem(VISITS_CACHE_KEY) || '0');
      return Number.isFinite(value) && value >= 0 ? value : 0;
    }

    function setCachedVisitCount(value) {
      const visits = Number(value);
      if (Number.isFinite(visits) && visits >= 0) {
        localStorage.setItem(VISITS_CACHE_KEY, String(visits));
      }
    }

    function getPersistedVisitCount() {
      const value = Number(allData && allData.meta ? allData.meta.totalVisits : 0);
      return Number.isFinite(value) && value >= 0 ? value : 0;
    }

    function getCounterApiBase() {
      const configured = (allData && allData.meta && allData.meta.counterApiBase) || COUNTER_API_BASE;
      return String(configured || '').trim().replace(/\/+$/, '');
    }

    async function fetchArchiveData() {
      for (const path of PROJECTS_ARCHIVE_PATHS) {
        try {
          const res = await fetch(`${path}?t=${Date.now()}`, { cache: 'no-store' });
          if (res.ok) return await res.json();
        } catch (e) { console.error('Request failed:', e); }
      }
      return { meta: { totalVisits: 0, counterApiBase: '' }, boards: [], projects: [] };
    }

    function mergeProjectData(staticData, liveData) {
      const fileData = staticData && typeof staticData === 'object' ? staticData : {};
      const dbData = liveData && typeof liveData === 'object' ? liveData : {};
      const boardMap = new Map();
      const projectMap = new Map();
      (Array.isArray(fileData.boards) ? fileData.boards : []).forEach(board => boardMap.set(board.id, board));
      (Array.isArray(dbData.boards) ? dbData.boards : []).forEach(board => boardMap.set(board.id, board));
      (Array.isArray(fileData.projects) ? fileData.projects : []).forEach(project => projectMap.set(project.id, project));
      (Array.isArray(dbData.projects) ? dbData.projects : []).forEach(project => projectMap.set(project.id, project));
      return {
        meta: {
          ...(fileData.meta || {}),
          ...(dbData.meta || {}),
          counterApiBase: (dbData.meta && dbData.meta.counterApiBase) || (fileData.meta && fileData.meta.counterApiBase) || COUNTER_API_BASE
        },
        boards: Array.from(boardMap.values()),
        projects: Array.from(projectMap.values()).filter(p => !p.locked)
      };
    }

    function applyTheme(theme) {
      const resolvedTheme = theme === 'light' ? 'light' : 'dark';
      document.body.dataset.theme = resolvedTheme;
      localStorage.setItem(THEME_KEY, resolvedTheme);
      const toggle = document.getElementById('theme-toggle');
      if (toggle) toggle.textContent = `Theme: ${resolvedTheme === 'light' ? 'Light' : 'Dark'}`;
    }

    function toggleTheme() {
      applyTheme(document.body.dataset.theme === 'light' ? 'dark' : 'light');
    }

    async function getCounterValue(key) {
      const baseUrl = getCounterApiBase();
      if (!baseUrl) return getPersistedVisitCount();
      const url = `${baseUrl}/visits`;
      const res = await fetch(url, { cache: 'no-store' });
      if (!res.ok) throw new Error('counter get failed');
      const data = await res.json();
      return data.value || 0;
    }

    async function hitCounter(key, isLogin = false) {
      const baseUrl = getCounterApiBase();
      if (!baseUrl) return getPersistedVisitCount() + 1;
      const url = `${baseUrl}/visits/hit`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isLogin }),
        cache: 'no-store'
      });
      if (!res.ok) throw new Error('counter hit failed');
      const data = await res.json();
      if (document.getElementById('stat-visits')) document.getElementById('stat-visits').textContent = formatCount(data.value || 0);
      if (document.getElementById('stat-revisits')) document.getElementById('stat-revisits').textContent = formatCount(data.revisits || 0);
      return data.value || 0;
    }

    async function loadData() {
      try {
        const [fileRes, dbRes] = await Promise.all([
          fetchArchiveData(),
          fetch(`${COUNTER_API_BASE}/projects/public`, { cache: 'no-store' }).catch(() => null)
        ]);
        const fileData = fileRes || { meta: { totalVisits: 0, counterApiBase: '' }, boards: [], projects: [] };
        const dbPayload = dbRes && dbRes.ok ? await dbRes.json() : { db: { meta: {}, boards: [], projects: [] } };
        allData = mergeProjectData(fileData, dbPayload.db || {});
      } catch (e) {
        console.warn('Could not load projects.json — using empty state');
        allData = { meta: { totalVisits: 0, counterApiBase: '' }, boards: [], projects: [] };
      }

      buildBoardCards();
      renderProjects();
      animateStats();
    }

    function buildBoardCards() {
      const grid = document.getElementById('boards-grid');
      grid.querySelectorAll('.board-card:not([data-board="all"])').forEach(card => card.remove());
      document.getElementById('count-all').textContent = allData.projects.length + ' projects';

      allData.boards.forEach(b => {
        const count = allData.projects.filter(p => p.board === b.id).length;
        const card = document.createElement('div');
        card.className = 'board-card';
        card.dataset.board = b.id;
        card.style.setProperty('--card-color', b.color);
        card.onclick = () => filterBoard(b.id, card);
        card.innerHTML = `<span class="board-icon">${escapeHtml(b.icon)}</span>
      <div class="board-name">${escapeHtml(b.label)}</div>
      <div class="board-count">${count} project${count !== 1 ? 's' : ''}</div>`;
        grid.appendChild(card);
      });
    }

    function filterBoard(id, el) {
      activeBoard = id;
      document.querySelectorAll('.board-card').forEach(c => c.classList.remove('active'));
      el.classList.add('active');
      renderProjects();
    }

    function filterDiff(d, el) {
      activeDiff = d;
      document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
      el.classList.add('active');
      renderProjects();
    }

    function getBoardColor(boardId) {
      const b = allData.boards.find(b => b.id === boardId);
      return b ? b.color : '#3dffa0';
    }

    function getBoardLabel(boardId) {
      const b = allData.boards.find(b => b.id === boardId);
      return b ? b.label : boardId;
    }

    function renderProjects() {
      const query = document.getElementById('search-input').value.toLowerCase();
      const sortVal = document.getElementById('sort-select') ? document.getElementById('sort-select').value : 'recommended';
      const grid = document.getElementById('projects-grid');

      let filtered = safeArray(allData.projects).filter(p => {
      const isProjPremium = p.isPremium === true || p.isPremium === 'true';
      const boardMatch = activeBoard === 'all' || p.board === activeBoard;
      const diffMatch = activeDiff === 'all' || p.difficulty === activeDiff;
      const premiumMatch = premiumOnly ? isProjPremium : !isProjPremium;
        const searchMatch = !query ||
          (p.title || '').toLowerCase().includes(query) ||
          (p.description || '').toLowerCase().includes(query) ||
          (p.parts && p.parts.join(' ').toLowerCase().includes(query)) ||
          (p.learns && (p.learns || '').toLowerCase().includes(query));
        return boardMatch && diffMatch && premiumMatch && searchMatch;
      });

      if (sortVal === 'most_liked') {
        filtered.sort((a, b) => (b.likes?.length || 0) - (a.likes?.length || 0));
      } else if (sortVal === 'most_starred') {
        filtered.sort((a, b) => (b.stars?.length || 0) - (a.stars?.length || 0));
      }

      if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-state"><div class="empty-icon">⬡</div><p>No projects found</p><p style="font-size:12px;margin-top:8px;font-family:var(--mono)">Try a different filter and search again</p></div>`;
        return;
      }

      const currentUserId = currentUser ? currentUser.id : null;

      grid.innerHTML = filtered.map(p => {
        const bColor = getBoardColor(p.board);
        const bLabel = getBoardLabel(p.board);
        const diffClass = 'diff-' + (p.difficulty || 'beginner');
        const diffLabel = p.difficulty === 'funbuild' ? 'Fun build' : p.difficulty === 'fun' ? 'Fun build' : p.difficulty || 'beginner';
        const chips = (p.parts || []).slice(0, 3).map(pt => `<span class="part-chip">${escapeHtml(pt)}</span>`).join('') + (p.parts && p.parts.length > 3 ? `<span class="part-chip">+${p.parts.length - 3}</span>` : '');
        
        const hasLiked = currentUserId && Array.isArray(p.likes) && p.likes.includes(currentUserId);
        const hasStarred = currentUserId && Array.isArray(p.stars) && p.stars.includes(currentUserId);
        const likesCount = Array.isArray(p.likes) ? p.likes.length : 0;
        const starsCount = Array.isArray(p.stars) ? p.stars.length : 0;

        const isPremium = p.isPremium === true || p.isPremium === 'true';
        const priceTag = isPremium ? `<span style="font-family:var(--mono);font-size:11px;color:var(--text);background:var(--green);color:#000;padding:2px 8px;border-radius:10px;font-weight:700">Premium ₹${p.price || '0.00'}</span>` : '';

        return `<div class="proj-card" data-pid="${escapeHtml(p.id)}" data-premium="${isPremium}">
      <div class="proj-card-top">
        <div class="proj-card-header">
          <div style="display:flex;gap:8px;align-items:center">
            <span class="proj-board-badge" style="color:${bColor};border-color:${bColor}40;background:${bColor}10">${escapeHtml(bLabel)}</span>
            ${priceTag}
          </div>
          <span class="diff-badge ${diffClass}">${escapeHtml(diffLabel)}</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <h3>${escapeHtml(p.title)}</h3>
          <div style="display:flex;gap:6px" class="interaction-btns">
            <button class="interact-btn ${hasLiked ? 'active' : ''}" onclick="event.stopPropagation(); toggleInteract('${escapeHtml(p.id)}', 'like', this)" title="Like">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="${hasLiked ? 'var(--red)' : 'none'}" stroke="${hasLiked ? 'var(--red)' : 'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              <span class="count">${likesCount}</span>
            </button>
            <button class="interact-btn ${hasStarred ? 'active' : ''}" onclick="event.stopPropagation(); toggleInteract('${escapeHtml(p.id)}', 'star', this)" title="Star">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="${hasStarred ? '#ffc107' : 'none'}" stroke="${hasStarred ? '#ffc107' : 'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              <span class="count">${starsCount}</span>
            </button>
          </div>
        </div>
        ${p.creditName || p.ownerDisplayName ? `<div style="font-family:var(--mono);font-size:11px;color:var(--blue);margin-top:-2px;margin-bottom:8px">by ${escapeHtml(p.creditName || p.ownerDisplayName)}</div>` : ''}
        <p>${escapeHtml(p.description)}</p>
      </div>
      <div class="proj-learn">${escapeHtml(p.learns || '')}</div>
      <div class="proj-card-bottom">${chips}</div>
    </div>`;
      }).join('');
    }

    async function toggleInteract(projectId, action, btnEl) {
      if (!currentUser) {
        openAuthMenu();
        return;
      }
      try {
        const countEl = btnEl.querySelector('.count');
        let currentCount = parseInt(countEl.textContent, 10) || 0;
        const wasActive = btnEl.classList.contains('active');
        
        // Optimistic UI update
        if (wasActive) {
          btnEl.classList.remove('active');
          if (action === 'like') btnEl.querySelector('svg').setAttribute('fill', 'none');
          if (action === 'like') btnEl.querySelector('svg').setAttribute('stroke', 'currentColor');
          if (action === 'star') btnEl.querySelector('svg').setAttribute('fill', 'none');
          if (action === 'star') btnEl.querySelector('svg').setAttribute('stroke', 'currentColor');
          countEl.textContent = Math.max(0, currentCount - 1);
        } else {
          btnEl.classList.add('active');
          if (action === 'like') btnEl.querySelector('svg').setAttribute('fill', 'var(--red)');
          if (action === 'like') btnEl.querySelector('svg').setAttribute('stroke', 'var(--red)');
          if (action === 'star') btnEl.querySelector('svg').setAttribute('fill', '#ffc107');
          if (action === 'star') btnEl.querySelector('svg').setAttribute('stroke', '#ffc107');
          countEl.textContent = currentCount + 1;
        }

        const res = await fetch(`${COUNTER_API_BASE}/projects/interact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: projectId, userId: currentUser.id, action })
        });
        const data = await res.json();
        
        // Sync local data state with server
        const proj = allData.projects.find(p => p.id === projectId);
        if (proj && data.ok) {
          proj[action === 'like' ? 'likes' : 'stars'] = data[action === 'like' ? 'likes' : 'stars'];
          countEl.textContent = data[action === 'like' ? 'likes' : 'stars'].length;
        }
      } catch (err) {
        console.error('Interaction failed', err);
        // Revert on error could be implemented here
      }
    }

    // Safe delegated click handler for project cards
    document.getElementById('projects-grid').addEventListener('click', e => {
      const card = e.target.closest('[data-pid]');
      if (!card) return;
      const pid = card.dataset.pid;
      if (pid) {
        if (!currentUser) {
          sessionStorage.setItem('jj_post_login_target', `../project.html?id=${encodeURIComponent(pid)}`);
          openLoginModal();
          return;
        }
        location.href = '../project.html?id=' + encodeURIComponent(pid);
      }
    });

    function animateStats() {
      const targets = {
        'stat-projects': allData.projects.length,
        'stat-boards': allData.boards.length,
      };
      Object.entries(targets).forEach(([id, target]) => {
        const el = document.getElementById(id);
        if (!el) return;
        let current = 0;
        const step = Math.ceil(target / 30);
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = current;
          if (current >= target) clearInterval(timer);
        }, 40);
      });
    }

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { closeAuthMenu(); closeOnboardingModal(); }
      if (!e.ctrlKey || !e.shiftKey) return;
      if (e.key === '%' || e.key === '5' || e.code === 'Digit5') {
        // Ctrl+Shift+% → Admin panel
        e.preventDefault();
        location.href = '../' + ADMIN_SHORTCUT_URL + '?mode=admin';
      } else if (e.key === '!' || e.key === '1' || e.code === 'Digit1') {
        // Ctrl+Shift+! → Developer panel
        e.preventDefault();
        location.href = '../' + ADMIN_SHORTCUT_URL + '?mode=developer';
      }
    });

    async function boot() {
      applyTheme(localStorage.getItem(THEME_KEY) || 'dark');
      
      // Check global settings for Premium Lock
      try {
        const res = await fetch(`${COUNTER_API_BASE}/settings`, { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          if (data.settings && data.settings.premiumLocked) {
            const dockBtn = document.getElementById('btn-dock-premium');
            if (dockBtn) dockBtn.style.display = 'none';
          }
        }
      } catch (e) {
        console.error('Failed to load global settings', e);
      }

      // checkAuth first — redirects to home if not logged in
      await checkAuth();
      if (!currentUser) {
        setTimeout(() => openLoginModal(), 3000);
      }
      // Only load data after auth is confirmed
      await loadData();
      if (!sessionStorage.getItem(SITE_SESSION_VIEW_KEY)) {
        sessionStorage.setItem(SITE_SESSION_VIEW_KEY, '1');
        hitCounter('visits', false).catch(() => { });
      }

      // Dock magnification
      document.querySelectorAll('.dock-item').forEach(item => {
        item.addEventListener('mousemove', e => {
          const rect = item.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const distance = Math.abs(x - rect.width / 2);
          const scale = 1 + (1 - distance / rect.width) * 0.4;
          item.style.setProperty('--scale', scale > 1 ? scale : 1);
          item.style.setProperty('--translateY', scale > 1 ? `-${(scale-1)*10}px` : '0px');
        });
        item.addEventListener('mouseleave', () => {
          item.style.setProperty('--scale', 1);
          item.style.setProperty('--translateY', '0px');
        });
      });
    }

    boot();
    ['click', 'keydown', 'mousemove', 'scroll', 'touchstart'].forEach(eventName => {
      document.addEventListener(eventName, registerAuthActivity, { passive: true });
    });
    window.addEventListener('pageshow', e => { if (e.persisted) boot(); });
  </script>
<script src="../uiverse-buttons.js"></script>
</body>

</html>


<script>
document.addEventListener('DOMContentLoaded', () => {
  try {
    applyTheme(localStorage.getItem(THEME_KEY) || 'dark');
    checkAuth();
    loadData();
  } catch (e) {
    console.error('Initialization error:', e);
  }
});
</script>
