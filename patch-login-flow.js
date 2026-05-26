const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const loginHtmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign In - JumperJunction</title>
  <link rel="icon" type="image/svg+xml" href="favicon.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&family=Instrument+Sans:wght@400;500&display=swap" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
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
      --display: 'Syne', sans-serif;
      --body: 'Instrument Sans', sans-serif;
      --mono: 'JetBrains Mono', monospace;
    }
    * { box-sizing: border-box; margin: 0; padding: 0 }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: var(--body);
      font-size: 15px;
      line-height: 1.6;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      overflow-x: hidden;
    }
    body[data-theme="light"] {
      --bg: #f4f7fb; --bg2: #e8edf5; --surface: #ffffff; --surface2: #f4f7fb;
      --border: #d7deea; --border2: #bcc7d9; --text: #0f1726; --muted: #43516c; --muted2: #62708a;
    }
    .container {
      background: var(--surface);
      border: 1px solid var(--border2);
      border-radius: 16px;
      padding: 2.5rem;
      width: 100%;
      max-width: 420px;
      text-align: center;
    }
    h1 {
      font-family: var(--display);
      font-size: 2.2rem;
      font-weight: 700;
      margin-bottom: 2rem;
    }
    input {
      width: 100%;
      padding: 12px;
      border-radius: 8px;
      border: 1px solid var(--border);
      background: var(--surface2);
      color: var(--text);
      font-family: var(--body);
      margin-bottom: 12px;
      font-size: 14px;
    }
    input:focus { outline: 1px solid var(--green); }
    .btn-primary {
      width: 100%;
      padding: 12px;
      background: var(--green);
      color: #000;
      border-radius: 8px;
      font-weight: 700;
      font-family: var(--body);
      font-size: 15px;
      transition: all 0.2s;
      border: none;
      cursor: pointer;
      margin-bottom: 1rem;
    }
    .btn-primary:hover { background: #5affc0; }
    .btn-oauth {
      width: 100%;
      padding: 12px;
      border: 1px solid var(--border2);
      color: var(--text);
      border-radius: 8px;
      font-weight: 600;
      font-family: var(--body);
      font-size: 14px;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      background: transparent;
      cursor: pointer;
    }
    .btn-oauth:hover { border-color: var(--muted); }
    .divider {
      color: var(--muted);
      font-size: 13px;
      margin: 1.5rem 0;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .divider::before, .divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--border);
    }
    .social-btn-group {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    .bottom-link {
      margin-top: 1.5rem;
      font-size: 13px;
      color: var(--muted);
    }
    .bottom-link a {
      color: var(--text);
      text-decoration: underline;
      cursor: pointer;
    }
    #auth-status {
      font-family: var(--mono);
      font-size: 12px;
      color: var(--muted);
      margin-top: 1rem;
    }
  </style>
</head>
<body>

  <div class="container" id="login-container">
    <h1 id="title">Sign In</h1>
    
    <div id="email-section">
      <div id="auth-name-group" style="display:none;">
        <input type="text" id="auth-name" placeholder="Enter your name">
      </div>
      <input type="email" id="auth-email" placeholder="Email Address">
      
      <div style="position:relative;">
        <input type="password" id="auth-password" placeholder="Password" style="padding-right:40px;">
        <button type="button" onclick="const p=document.getElementById('auth-password');p.type=p.type==='password'?'text':'password';" style="position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;color:var(--muted);cursor:pointer;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button>
      </div>

      <div class="g-recaptcha" data-sitekey="6LdLA9QsAAAAAAOOIf7RLMjo1DtbhmM5eXk6Wje4" style="margin-bottom:1rem;display:flex;justify-content:center;"></div>

      <button id="auth-submit" class="btn-primary" onclick="handleEmailAuth()">Sign In</button>
    </div>

    <div id="otp-section" style="display:none;">
      <input type="text" id="auth-otp" placeholder="Enter 6-digit Code from Email">
      <button class="btn-primary" style="background:var(--blue);" onclick="verifyOtp()">Verify Code</button>
    </div>

    <div class="divider">or Sign In with</div>

    <div class="social-btn-group">
      <button class="btn-oauth" onclick="handleOAuth('google')">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" style="width:18px;height:18px"> Google
      </button>
      <button class="btn-oauth" onclick="handleOAuth('facebook')">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" style="width:18px;height:18px"> Facebook
      </button>
    </div>

    <div class="bottom-link">
      <span id="bottom-text">Don't have an account? <a onclick="setAuthMode('signup')">Create one now</a></span>
    </div>
    
    <div id="auth-status"></div>
  </div>

  <script>
    const THEME_KEY = 'jumper-junction_theme';
    const COUNTER_API_BASE = 'https://jumperjunction-admin-backend.team-jumperjunction.workers.dev';
    const SUPABASE_URL = 'https://wbriqxebdkuqbtcvxtgv.supabase.co';
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndicmlxeGViZGt1cWJ0Y3Z4dGd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyNTA4MTksImV4cCI6MjA5MTgyNjgxOX0._e1mILmLqzbAfgSsAGWzAez5v6Z7RHNR564O4yfJFN0';
    const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    
    let authMode = 'login';
    let pendingSignupEmail = '';
    let pendingSignupPassword = '';

    function applyTheme(theme) {
      const resolvedTheme = theme === 'light' ? 'light' : 'dark';
      document.body.dataset.theme = resolvedTheme;
      localStorage.setItem(THEME_KEY, resolvedTheme);
    }
    // initialize theme
    applyTheme(localStorage.getItem(THEME_KEY) || 'dark');
    
    function setAuthStatus(msg, tone) {
      const el = document.getElementById('auth-status');
      el.textContent = msg;
      el.style.color = tone === 'error' ? 'var(--red)' : tone === 'success' ? 'var(--green)' : 'var(--muted)';
    }

    function setAuthMode(mode) {
      authMode = mode;
      document.getElementById('auth-name-group').style.display = mode === 'signup' ? 'block' : 'none';
      document.getElementById('title').textContent = mode === 'signup' ? 'Create Account' : 'Sign In';
      document.getElementById('auth-submit').textContent = mode === 'signup' ? 'Send OTP & Create Account' : 'Sign In';
      const bottom = document.getElementById('bottom-text');
      if (mode === 'signup') {
        bottom.innerHTML = 'Already have an account? <a onclick="setAuthMode(\\'login\\')">Sign In</a>';
      } else {
        bottom.innerHTML = 'Don\\'t have an account? <a onclick="setAuthMode(\\'signup\\')">Create one now</a>';
      }
      document.getElementById('otp-section').style.display = 'none';
      document.getElementById('email-section').style.display = 'block';
      setAuthStatus('');
    }

    function getRecaptchaToken() {
      let token = '';
      if (typeof grecaptcha !== 'undefined') {
         const responses = document.querySelectorAll('.g-recaptcha-response');
         for (const res of responses) {
           if (res.value) token = res.value;
         }
      }
      return token;
    }

    function getPostLoginTarget(defaultTarget = '/') {
      const target = sessionStorage.getItem('jj_post_login_target');
      if (target) {
        sessionStorage.removeItem('jj_post_login_target');
        return target;
      }
      return defaultTarget;
    }

    async function handleOAuth(provider) {
      const token = getRecaptchaToken();
      if (!token) return alert('Please complete the ReCAPTCHA before logging in.');
      await supabaseClient.auth.signInWithOAuth({ provider, options: { redirectTo: window.location.origin + getPostLoginTarget() } });
    }

    async function handleEmailAuth() {
      const token = getRecaptchaToken();
      if (!token) return alert('Please complete the ReCAPTCHA before logging in.');
      
      const email = document.getElementById('auth-email').value;
      const password = document.getElementById('auth-password').value;
      if (!email || !password) return alert('Please enter email and password.');

      setAuthStatus('Processing...', 'muted');

      try {
        if (authMode === 'signup') {
          const fullName = document.getElementById('auth-name').value.trim();
          if (!fullName) return alert('Please enter your name.');
          const res = await fetch(\`\${COUNTER_API_BASE}/auth/signup/request\`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, fullName })
          });
          const data = await res.json();
          if (!res.ok || data.error) throw new Error(data.error || 'Could not send signup OTP.');
          pendingSignupEmail = email;
          pendingSignupPassword = password;
          document.getElementById('email-section').style.display = 'none';
          document.getElementById('otp-section').style.display = 'block';
          setAuthStatus('OTP sent. Check your email.', 'success');
        } else {
          const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
          if (error) throw error;
          location.href = getPostLoginTarget('/');
        }
      } catch(e) {
        setAuthStatus(e.message || 'Authentication failed.', 'error');
      }
    }

    async function verifyOtp() {
      const token = document.getElementById('auth-otp').value.trim();
      if (!token) return alert('Please enter the code.');
      setAuthStatus('Verifying...', 'muted');
      try {
        const res = await fetch(\`\${COUNTER_API_BASE}/auth/signup/verify\`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: pendingSignupEmail, otp: token })
        });
        const data = await res.json();
        if (!res.ok || data.error) throw new Error(data.error || 'Verification failed.');
        const { error } = await supabaseClient.auth.signInWithPassword({ email: pendingSignupEmail, password: pendingSignupPassword });
        if (error) throw error;
        location.href = getPostLoginTarget('/');
      } catch(e) {
        setAuthStatus(e.message || 'Failed to verify OTP.', 'error');
      }
    }
    
    // Check if already logged in
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      if (session) location.href = getPostLoginTarget('/');
    });
  </script>
</body>
</html>`;

fs.writeFileSync('login.html', loginHtmlContent);

// Add theme persistence code to dashboard.html and checkout.html explicitly.
// In checkouth.html / dashboard.html, we need to ensure application of theme happens in boot and is synchronized.
const htmlFiles = [
  'index.html',
  'project.html',
  'dashboard.html',
  'checkout.html',
  'browse-projects/index.html'
];

htmlFiles.forEach(file => {
  const fileContent = fs.readFileSync(file, 'utf8');
  let output = fileContent;

  const depthPrefix = file.includes('/') ? '../' : '';

  // 1. Remove login modal HTML block if it exists
  output = output.replace(/<div id="login-modal"[^>]*>[\s\S]*?<!-- LOGIN MODAL END -->|<!-- LOGIN MODAL -->[\s\S]*?<div id="auth-menu-modal"/, '<div id="auth-menu-modal"');

  // Instead of a brittle regex, let's just leave the unused modal div if it fails to grab exactly, but inject a generic replacement for openLoginModal globally.
  // Actually, replacing openLoginModal function is safer and overrides any existing behavior!
  
  const modifiedBootOpenLogin = `
    function openLoginModal() {
      sessionStorage.setItem('jj_post_login_target', location.pathname + location.search + location.hash);
      location.href = '${depthPrefix}login.html';
    }
  `;

  // We should replace existing openLoginModal functions
  output = output.replace(/function openLoginModal\(\)\s*\{([^}]+(\s*.*\s*)*?){0,5}\s*\}/g, (match, p1) => {
    // Only replace if it matches the modal display logic
    if (match.includes('login-modal') || match.includes('.display')) {
      return modifiedBootOpenLogin;
    }
    return match; // fallback
  });

  // Ensure 'checkout.html' and 'dashboard.html' have theme toggle logic
  if (file === 'dashboard.html' || file === 'checkout.html') {
    if (!output.includes('localStorage.setItem(THEME_KEY')) {
       // add apply theme function if not manually added yet
       if (!output.includes('applyTheme(')) {
          output = output.replace('async function boot() {', `
          const THEME_KEY = 'jumper-junction_theme';
          function applyTheme(theme) {
            const t = theme === 'light' ? 'light' : 'dark';
            document.body.dataset.theme = t;
            localStorage.setItem(THEME_KEY, t);
          }
          function toggleTheme() {
            applyTheme(document.body.dataset.theme === 'light' ? 'dark' : 'light');
          }
          async function boot() {
            applyTheme(localStorage.getItem(THEME_KEY) || 'dark');
          `);
       }
    }
  }

  fs.writeFileSync(file, output);
});

console.log('Done transforming login and themes');
