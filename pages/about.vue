<template>
  <div class="about-page">

    <!-- Hero -->
    <div class="a-hero">
      <div class="a-hero-glow"></div>
      <div class="a-hero-inner">
        <div class="a-hero-left">
          <p class="a-eyebrow font-mono">// about me</p>
          <h1 class="a-title font-black">
            MAKERI,<br>
            <span class="a-title-cyan">JERRY</span><br>
            ISUWA.
          </h1>
          <p class="a-bio">
            Fullstack engineer, backend-focused. APIs, databases, and server
            infrastructure in Go, JavaScript, and PHP. I also build frontends
            and mobile apps when the project calls for it.
          </p>
          <p class="a-bio">
            I've worked across fintech, energy, government tech, e-commerce, and logistics.
            Based in <strong>Abuja, Nigeria</strong>.
          </p>
          <a href="mailto:makerijerry.dev@gmail.com?subject=Hi Jerry" class="a-contact font-mono">
            Need something? →
          </a>
        </div>
        <div class="a-hero-right">
          <div class="a-photo-halo"></div>
          <div class="a-photo-frame">
            <img src="/image.jpg" alt="Makeri, Jerry Isuwa" />
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="a-stats">
        <div class="a-stat">
          <span class="a-stat-num font-black">10+</span>
          <span class="a-stat-lbl font-mono">Years exp.</span>
        </div>
        <div class="a-stat-div"></div>
        <div class="a-stat">
          <span class="a-stat-num font-black">20+</span>
          <span class="a-stat-lbl font-mono">Products shipped</span>
        </div>
        <div class="a-stat-div"></div>
        <div class="a-stat">
          <span class="a-stat-num font-black">8+</span>
          <span class="a-stat-lbl font-mono">Industries</span>
        </div>
        <div class="a-stat-div"></div>
        <div class="a-stat">
          <span class="a-stat-num font-black">5</span>
          <span class="a-stat-lbl font-mono">Countries served</span>
        </div>
      </div>
    </div>

    <!-- What I build -->
    <div class="a-section">
      <p class="a-kicker font-mono">// services</p>
      <h2 class="a-heading font-black">WHAT I BUILD</h2>
      <div class="a-svc-grid">
        <div class="a-svc">
          <span class="a-svc-n font-mono">01</span>
          <h3 class="a-svc-title font-bold">Backend Systems</h3>
          <p class="a-svc-desc">APIs, microservices, and database architecture built for reliability and scale.</p>
          <p class="a-svc-stack font-mono">Go · Node.js · PHP · MySQL · Redis · PostgreSQL</p>
        </div>
        <div class="a-svc">
          <span class="a-svc-n font-mono">02</span>
          <h3 class="a-svc-title font-bold">Fullstack Web</h3>
          <p class="a-svc-desc">End-to-end web applications — from data models and APIs to polished frontends.</p>
          <p class="a-svc-stack font-mono">Next.js · Vue · React · Laravel · Nuxt · Livewire</p>
        </div>
        <div class="a-svc">
          <span class="a-svc-n font-mono">03</span>
          <h3 class="a-svc-title font-bold">Mobile Apps</h3>
          <p class="a-svc-desc">Cross-platform iOS &amp; Android apps with one codebase, backed by solid infrastructure.</p>
          <p class="a-svc-stack font-mono">Flutter · Dart · React Native · REST APIs · Auth</p>
        </div>
        <div class="a-svc">
          <span class="a-svc-n font-mono">04</span>
          <h3 class="a-svc-title font-bold">Cloud &amp; DevOps</h3>
          <p class="a-svc-desc">Server setup, S3 storage, deployment pipelines, and infrastructure that stays up.</p>
          <p class="a-svc-stack font-mono">AWS · S3 · Docker · NGINX · Linux · CI/CD</p>
        </div>
      </div>
    </div>

    <!-- Tech stack -->
    <div class="a-section">
      <p class="a-kicker font-mono">// skills</p>
      <h2 class="a-heading font-black">TECH STACK</h2>
      <div class="a-stack-table">
        <div class="a-stack-row">
          <span class="a-stack-cat font-mono">Languages</span>
          <div class="a-stack-pills">
            <span class="pill pill--accent">Go ★</span>
            <span class="pill pill--accent">JavaScript ★</span>
            <span class="pill pill--accent">PHP ★</span>
            <span class="pill">TypeScript</span>
            <span class="pill">Dart</span>
            <span class="pill">Java</span>
            <span class="pill">Elixir</span>
          </div>
        </div>
        <div class="a-stack-row">
          <span class="a-stack-cat font-mono">Frameworks</span>
          <div class="a-stack-pills">
            <span class="pill">Node.js</span>
            <span class="pill">Next.js</span>
            <span class="pill">React</span>
            <span class="pill">Vue</span>
            <span class="pill">Laravel</span>
            <span class="pill">Nuxt</span>
            <span class="pill">Livewire</span>
            <span class="pill">React Native</span>
            <span class="pill">Flutter</span>
            <span class="pill">Angular</span>
            <span class="pill">Svelte</span>
          </div>
        </div>
        <div class="a-stack-row">
          <span class="a-stack-cat font-mono">Databases</span>
          <div class="a-stack-pills">
            <span class="pill">PostgreSQL</span>
            <span class="pill">MySQL</span>
            <span class="pill">MongoDB</span>
            <span class="pill">Redis</span>
            <span class="pill">Firebase</span>
            <span class="pill">Supabase</span>
            <span class="pill">GraphQL</span>
          </div>
        </div>
        <div class="a-stack-row">
          <span class="a-stack-cat font-mono">DevOps</span>
          <div class="a-stack-pills">
            <span class="pill">AWS</span>
            <span class="pill">S3</span>
            <span class="pill">Docker</span>
            <span class="pill">NGINX</span>
            <span class="pill">Linux</span>
            <span class="pill">GitHub Actions</span>
            <span class="pill">Vercel</span>
            <span class="pill">Netlify</span>
          </div>
        </div>
        <div class="a-stack-row">
          <span class="a-stack-cat font-mono">Tooling</span>
          <div class="a-stack-pills">
            <span class="pill">Postman</span>
            <span class="pill">Swagger</span>
            <span class="pill">Figma</span>
            <span class="pill">Strapi</span>
            <span class="pill">Shopify</span>
            <span class="pill">Webflow</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Credentials -->
    <div class="a-section">
      <p class="a-kicker font-mono">// education</p>
      <h2 class="a-heading font-black">CREDENTIALS</h2>
      <div class="a-creds">
        <div class="a-cred">
          <span class="a-cred-year font-mono">2023</span>
          <div class="a-cred-body">
            <h3 class="a-cred-title font-bold">B.Sc. Crop Genetics &amp; Engineering</h3>
            <p class="a-cred-meta font-mono">Kaduna State University · 2017 – 2023</p>
          </div>
        </div>
        <div class="a-cred">
          <span class="a-cred-year font-mono">2021</span>
          <div class="a-cred-body">
            <h3 class="a-cred-title font-bold">Careers in Commercial Banking</h3>
            <p class="a-cred-meta font-mono">Corporate Affairs Institute · 2021</p>
          </div>
        </div>
        <div class="a-cred">
          <span class="a-cred-year font-mono">2021</span>
          <div class="a-cred-body">
            <h3 class="a-cred-title font-bold">Accounting Fundamentals</h3>
            <p class="a-cred-meta font-mono">Corporate Affairs Institute · 2021</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Principles -->
    <div class="a-section a-section--last">
      <p class="a-kicker font-mono">// how I work</p>
      <h2 class="a-heading font-black">PRINCIPLES</h2>
      <div class="a-principles">
        <span class="prin font-mono">Agile / Scrum</span>
        <span class="prin font-mono">SOLID</span>
        <span class="prin font-mono">DRY</span>
        <span class="prin font-mono">KISS</span>
        <span class="prin font-mono">YAGNI</span>
        <span class="prin font-mono">TDD</span>
        <span class="prin font-mono">CI / CD</span>
        <span class="prin font-mono">Clean Architecture</span>
        <span class="prin font-mono">Code Reviews</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  layout: 'app',
  head () {
    return {
      title: 'About — Makeri, Jerry Isuwa',
      meta: [
        { name: 'description', content: 'Fullstack Engineer, Backend Major — Go, JS & PHP. 10+ years building APIs, e-commerce platforms, mobile apps, and web software.' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@makeri_jerry' },
        { name: 'og:title', content: 'About — Makeri, Jerry Isuwa' },
        { name: 'og:description', content: 'Fullstack Engineer, Backend Major. 10+ years, 20+ projects shipped.' },
        { name: 'og:image', content: '/image.jpg' }
      ]
    }
  }
}
</script>

<style scoped>
.about-page { padding-bottom: 40px; }

/* ── Hero ── */
.a-hero {
  position: relative;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  margin-bottom: 72px;
  overflow: hidden;
}
.a-hero-glow {
  position: absolute;
  top: -40px; right: -80px;
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 65%);
  pointer-events: none;
}
.a-hero-inner {
  display: flex;
  align-items: flex-start;
  gap: 48px;
  margin-bottom: 48px;
  flex-direction: column;
}
@media (min-width: 640px) {
  .a-hero-inner { flex-direction: row; align-items: center; }
}
.a-hero-left { flex: 1; }

.a-eyebrow {
  font-size: 0.66rem;
  color: #22D3EE;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 14px;
}
.a-title {
  font-size: clamp(2.8rem, 7vw, 5rem);
  line-height: 0.88;
  font-weight: 900;
  color: #F8FAFC;
  letter-spacing: -0.025em;
  margin-bottom: 24px;
}
.a-title-cyan { color: #22D3EE; }
.a-bio {
  font-size: 0.88rem;
  line-height: 1.8;
  color: #475569;
  margin-bottom: 10px;
  max-width: 460px;
}
.a-bio strong { color: #94A3B8; font-weight: 600; }
.a-contact {
  display: inline-block;
  font-size: 0.68rem;
  color: #22D3EE;
  text-decoration: none;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 16px;
  transition: opacity 150ms ease;
}
.a-contact:hover { opacity: 0.7; }

/* Photo */
.a-hero-right {
  flex-shrink: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.a-photo-halo {
  position: absolute;
  inset: -24px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(34,211,238,0.09) 0%, transparent 65%);
  pointer-events: none;
}
.a-photo-frame {
  width: 180px; height: 180px;
  border-radius: 50%;
  overflow: hidden;
  border: 1.5px solid rgba(34,211,238,0.2);
  box-shadow: 0 0 60px rgba(34,211,238,0.07);
  position: relative; z-index: 1;
}
.a-photo-frame img {
  width: 100%; height: 100%;
  object-fit: cover; object-position: center;
  display: block;
}

/* Stats */
.a-stats {
  display: flex;
  align-items: center;
  gap: 0;
  flex-wrap: wrap;
}
.a-stat {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding: 16px 32px 16px 0;
  min-width: 120px;
}
.a-stat-num {
  font-size: 2.2rem;
  font-weight: 900;
  color: #F1F5F9;
  line-height: 1;
}
.a-stat-lbl {
  font-size: 0.6rem;
  color: #334155;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.a-stat-div {
  width: 1px;
  height: 40px;
  background: rgba(255,255,255,0.06);
  margin-right: 32px;
  flex-shrink: 0;
}

/* ── Sections ── */
.a-section {
  margin-bottom: 72px;
}
.a-section--last { margin-bottom: 0; }
.a-kicker {
  font-size: 0.66rem;
  color: #22D3EE;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.a-heading {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 900;
  color: #F8FAFC;
  line-height: 0.9;
  letter-spacing: -0.02em;
  margin-bottom: 36px;
}

/* Services */
.a-svc-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.04);
  border-radius: 20px;
  overflow: hidden;
}
@media (max-width: 540px) {
  .a-svc-grid { grid-template-columns: 1fr; }
}
.a-svc {
  padding: 28px 24px;
  background: #000;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: background 200ms ease;
}
.a-svc:hover { background: #060606; }
.a-svc-n {
  font-size: 0.6rem;
  color: #22D3EE;
  letter-spacing: 0.14em;
  opacity: 0.6;
}
.a-svc-title {
  font-size: 0.95rem;
  color: #E2E8F0;
  font-weight: 700;
}
.a-svc-desc {
  font-size: 0.78rem;
  color: #475569;
  line-height: 1.7;
  flex: 1;
}
.a-svc-stack {
  font-size: 0.6rem;
  color: #1E293B;
  letter-spacing: 0.04em;
  padding-top: 10px;
  border-top: 1px solid rgba(255,255,255,0.04);
  margin-top: 4px;
}

/* Stack table */
.a-stack-table { display: flex; flex-direction: column; gap: 0; }
.a-stack-row {
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 24px;
  align-items: flex-start;
  padding: 14px 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}
.a-stack-row:last-child { border-bottom: none; }
@media (max-width: 480px) {
  .a-stack-row { grid-template-columns: 1fr; gap: 8px; }
}
.a-stack-cat {
  font-size: 0.62rem;
  color: #334155;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding-top: 4px;
  white-space: nowrap;
}
.a-stack-pills { display: flex; flex-wrap: wrap; gap: 6px; }
.pill {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid rgba(255,255,255,0.06);
  color: #334155;
  background: rgba(255,255,255,0.02);
  letter-spacing: 0.02em;
}
.pill--accent {
  border-color: rgba(34,211,238,0.25);
  color: #22D3EE;
  background: rgba(34,211,238,0.05);
}

/* Credentials */
.a-creds { display: flex; flex-direction: column; }
.a-cred {
  display: grid;
  grid-template-columns: 52px 1fr;
  gap: 20px;
  align-items: flex-start;
  padding: 18px 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);
}
.a-cred:last-child { border-bottom: none; }
.a-cred-year {
  font-size: 0.66rem;
  color: #1E293B;
  letter-spacing: 0.08em;
  padding-top: 3px;
  text-align: right;
}
.a-cred-title {
  font-size: 0.92rem;
  color: #CBD5E1;
  font-weight: 700;
  margin-bottom: 4px;
}
.a-cred-meta {
  font-size: 0.65rem;
  color: #334155;
  letter-spacing: 0.04em;
}

/* Principles */
.a-principles { display: flex; flex-wrap: wrap; gap: 8px; }
.prin {
  font-size: 0.68rem;
  padding: 7px 14px;
  border-radius: 100px;
  border: 1px solid rgba(255,255,255,0.06);
  color: #334155;
  background: rgba(255,255,255,0.02);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: border-color 150ms ease, color 150ms ease;
}
.prin:hover {
  border-color: rgba(34,211,238,0.2);
  color: #22D3EE;
}
</style>
