<template>
  <div class="about-page">

    <!-- Hero intro -->
    <div class="about-hero">
      <div class="hero-left">
        <div class="section-label">// about me</div>
        <h2 class="about-name font-black">Makeri,<br><span style="color:#22D3EE;">Jerry Isuwa</span></h2>
        <div class="role-tags">
          <span class="role-tag">Backend Engineer</span>
          <span class="role-tag role-tag--accent">Go · JS · PHP</span>
          <span class="role-tag">Technical Support</span>
          <span class="role-tag">API Developer</span>
        </div>
        <p class="about-bio">
          I don't just write code — I architect digital systems built to last.
          <strong>7+ years</strong> across fintech, energy, e-commerce, and social platforms.
          My edge is bridging the gap between business needs and technical execution — fast, clean, and at scale.
        </p>
        <p class="about-bio">Based in <strong>Abuja, Nigeria</strong>.</p>
        <a href="mailto:makerijerry.dev@gmail.com?subject=Hi Jerry, I'd like to work with you" class="need-something font-mono">
          Need something?
          <svg style="width:11px;height:11px;flex-shrink:0;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M7 17l9.2-9.2M17 17V7H7"/>
          </svg>
        </a>
      </div>
      <div class="hero-right">
        <div class="photo-glow"></div>
        <div class="photo-frame">
          <img src="/image.jpg" alt="Makeri, Jerry Isuwa" />
        </div>
        <!-- Stats floating -->
        <div class="floating-stats">
          <div class="fstat">
            <span class="fstat-num font-black">7+</span>
            <span class="fstat-lbl">Years</span>
          </div>
          <div class="fstat-sep"></div>
          <div class="fstat">
            <span class="fstat-num font-black">20+</span>
            <span class="fstat-lbl">Projects</span>
          </div>
          <div class="fstat-sep"></div>
          <div class="fstat">
            <span class="fstat-num font-black">99%</span>
            <span class="fstat-lbl">Satisfaction</span>
          </div>
        </div>
      </div>
    </div>

    <!-- What I Do -->
    <div class="section">
      <div class="section-label">// services</div>
      <h3 class="section-title font-bold">What I Do</h3>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon" style="color:#22D3EE;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
          <h4 class="service-name font-bold">Backend Engineering</h4>
          <p class="service-desc">Scalable APIs, microservices, and server architecture in Go, Node.js, and PHP.</p>
        </div>
        <div class="service-card">
          <div class="service-icon" style="color:#A78BFA;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
            </svg>
          </div>
          <h4 class="service-name font-bold">Fullstack Development</h4>
          <p class="service-desc">End-to-end web apps using Vue, React, Laravel, and modern deployment stacks.</p>
        </div>
        <div class="service-card">
          <div class="service-icon" style="color:#4ADE80;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
            </svg>
          </div>
          <h4 class="service-name font-bold">Mobile Development</h4>
          <p class="service-desc">Cross-platform mobile apps with React Native — iOS and Android from one codebase.</p>
        </div>
        <div class="service-card">
          <div class="service-icon" style="color:#F472B6;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
          </div>
          <h4 class="service-name font-bold">Technical Support</h4>
          <p class="service-desc">Developer advocacy, API documentation, and integration support for engineering teams.</p>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <!-- Skills -->
    <div class="section">
      <div class="section-label">// skills</div>
      <h3 class="section-title font-bold">Tech Stack</h3>

      <div class="skill-rows">
        <div class="skill-row">
          <div class="skill-row-label font-mono">Languages</div>
          <div class="pills">
            <span class="skill-pill" style="border-color:rgba(34,211,238,0.3);color:#67E8F9;background:rgba(34,211,238,0.07);">Go ★</span>
            <span class="skill-pill" style="border-color:rgba(34,211,238,0.3);color:#67E8F9;background:rgba(34,211,238,0.07);">JavaScript ★</span>
            <span class="skill-pill" style="border-color:rgba(34,211,238,0.3);color:#67E8F9;background:rgba(34,211,238,0.07);">PHP ★</span>
            <span class="skill-pill">TypeScript</span>
            <span class="skill-pill">Java</span>
            <span class="skill-pill">Elixir</span>
          </div>
        </div>
        <div class="skill-row">
          <div class="skill-row-label font-mono">Frameworks</div>
          <div class="pills">
            <span class="skill-pill">Node.js</span>
            <span class="skill-pill">React</span>
            <span class="skill-pill">Vue</span>
            <span class="skill-pill">Angular</span>
            <span class="skill-pill">Svelte</span>
            <span class="skill-pill">Laravel</span>
            <span class="skill-pill">ASP.NET Core</span>
            <span class="skill-pill">Ruby on Rails</span>
          </div>
        </div>
        <div class="skill-row">
          <div class="skill-row-label font-mono">Databases</div>
          <div class="pills">
            <span class="skill-pill">PostgreSQL</span>
            <span class="skill-pill">MySQL</span>
            <span class="skill-pill">MongoDB</span>
            <span class="skill-pill">Redis</span>
            <span class="skill-pill">Firebase</span>
            <span class="skill-pill">Supabase</span>
            <span class="skill-pill">GraphQL</span>
            <span class="skill-pill">SQLite</span>
          </div>
        </div>
        <div class="skill-row">
          <div class="skill-row-label font-mono">DevOps</div>
          <div class="pills">
            <span class="skill-pill">AWS</span>
            <span class="skill-pill">Docker</span>
            <span class="skill-pill">NGINX</span>
            <span class="skill-pill">Linux</span>
            <span class="skill-pill">GitHub Actions</span>
            <span class="skill-pill">Vercel</span>
            <span class="skill-pill">Netlify</span>
            <span class="skill-pill">Heroku</span>
          </div>
        </div>
        <div class="skill-row">
          <div class="skill-row-label font-mono">Mobile &amp; CMS</div>
          <div class="pills">
            <span class="skill-pill">React Native</span>
            <span class="skill-pill">Strapi</span>
            <span class="skill-pill">Shopify</span>
            <span class="skill-pill">Webflow</span>
            <span class="skill-pill">Ghost</span>
          </div>
        </div>
        <div class="skill-row">
          <div class="skill-row-label font-mono">Tooling</div>
          <div class="pills">
            <span class="skill-pill">Postman</span>
            <span class="skill-pill">Swagger</span>
            <span class="skill-pill">Jest</span>
            <span class="skill-pill">Figma</span>
            <span class="skill-pill">Notion</span>
            <span class="skill-pill">Tableau</span>
          </div>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <!-- Strengths -->
    <div class="section">
      <div class="section-label">// strengths</div>
      <h3 class="section-title font-bold">What Sets Me Apart</h3>
      <div class="strengths-grid">
        <div class="strength-card">
          <div class="strength-icon" style="color:#22D3EE;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h4 class="strength-name font-bold">Fast Execution</h4>
          <p class="strength-desc">Shipping clean, production-ready code quickly without sacrificing quality or maintainability.</p>
        </div>
        <div class="strength-card">
          <div class="strength-icon" style="color:#A78BFA;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18"/>
            </svg>
          </div>
          <h4 class="strength-name font-bold">Systems Thinking</h4>
          <p class="strength-desc">Designing architectures that account for edge cases, growth, and long-term maintainability.</p>
        </div>
        <div class="strength-card">
          <div class="strength-icon" style="color:#4ADE80;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <h4 class="strength-name font-bold">Team Leadership</h4>
          <p class="strength-desc">Mentoring devs, coordinating tasks, and driving best practices for timely delivery.</p>
        </div>
        <div class="strength-card">
          <div class="strength-icon" style="color:#F472B6;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </div>
          <h4 class="strength-name font-bold">Clear Communication</h4>
          <p class="strength-desc">Translating technical complexity into plain language — for clients, teams, and stakeholders.</p>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <!-- Education -->
    <div class="section">
      <div class="section-label">// education &amp; certs</div>
      <h3 class="section-title font-bold">Credentials</h3>
      <div class="edu-list">
        <div class="edu-item">
          <div class="edu-year font-mono">2023</div>
          <div class="edu-bar"></div>
          <div class="edu-content">
            <h4 class="edu-title font-bold">B.Sc. Crop Genetics &amp; Engineering</h4>
            <span class="edu-meta font-mono">Kaduna State University · 2017 – 2023</span>
          </div>
        </div>
        <div class="edu-item">
          <div class="edu-year font-mono">2021</div>
          <div class="edu-bar"></div>
          <div class="edu-content">
            <h4 class="edu-title font-bold">Careers in Commercial Banking</h4>
            <span class="edu-meta font-mono">Corporate Affairs Institute · 2021</span>
          </div>
        </div>
        <div class="edu-item">
          <div class="edu-year font-mono">2021</div>
          <div class="edu-bar"></div>
          <div class="edu-content">
            <h4 class="edu-title font-bold">Accounting Fundamentals</h4>
            <span class="edu-meta font-mono">Corporate Affairs Institute · 2021</span>
          </div>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <!-- Principles -->
    <div class="section" style="margin-bottom:60px;">
      <div class="section-label">// principles</div>
      <h3 class="section-title font-bold">How I Work</h3>
      <div class="pills" style="margin-top:14px; gap:8px;">
        <span class="principle-pill">Agile / Scrum</span>
        <span class="principle-pill">SOLID Principles</span>
        <span class="principle-pill">DRY</span>
        <span class="principle-pill">KISS</span>
        <span class="principle-pill">YAGNI</span>
        <span class="principle-pill">TDD</span>
        <span class="principle-pill">CI / CD</span>
        <span class="principle-pill">Clean Architecture</span>
        <span class="principle-pill">Code Reviews</span>
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
        { name: 'description', content: 'Fullstack Engineer — Backend Major (Go, JS & PHP). 7+ years building scalable digital products across fintech, energy, and e-commerce.' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@makeri_jerry' },
        { name: 'og:title', content: 'About — Makeri, Jerry Isuwa' },
        { name: 'og:description', content: 'Fullstack Engineer, Backend Major. 7+ years, 20+ projects.' },
        { name: 'og:image', content: '/image.jpg' }
      ]
    }
  }
}
</script>

<style scoped>
.about-page {
  padding-top: 12px;
  padding-bottom: 20px;
}

.section-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  color: #22D3EE;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

/* ── Hero intro ── */
.about-hero {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 48px;
}

@media (min-width: 600px) {
  .about-hero {
    flex-direction: row;
    align-items: flex-start;
    gap: 48px;
  }
}

.hero-left {
  flex: 1;
  order: 2;
}

@media (min-width: 600px) {
  .hero-left {
    order: 1;
  }
}

.hero-right {
  flex-shrink: 0;
  position: relative;
  order: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

@media (min-width: 600px) {
  .hero-right {
    order: 2;
    align-items: flex-end;
  }
}

.photo-glow {
  position: absolute;
  top: -16px;
  left: -16px;
  right: -16px;
  bottom: -16px;
  border-radius: 20px;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

.photo-frame {
  width: 160px;
  height: 160px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(34, 211, 238, 0.2);
  box-shadow: 0 0 40px rgba(34, 211, 238, 0.08);
  position: relative;
  z-index: 1;
}

@media (min-width: 600px) {
  .photo-frame {
    width: 180px;
    height: 180px;
  }
}

.photo-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* Floating stats under photo */
.floating-stats {
  display: flex;
  align-items: center;
  gap: 0;
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.fstat {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 16px;
  gap: 2px;
}

.fstat-num {
  font-size: 1.1rem;
  font-weight: 900;
  color: #22D3EE;
  line-height: 1;
}

.fstat-lbl {
  font-size: 0.6rem;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.fstat-sep {
  width: 1px;
  height: 28px;
  background: rgba(255, 255, 255, 0.06);
}

/* Name & role */
.about-name {
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.05;
  color: #F8FAFC;
  font-weight: 900;
  margin-bottom: 14px;
}

.role-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 18px;
}

.role-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  padding: 3px 10px;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #475569;
  background: rgba(255, 255, 255, 0.02);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.role-tag--accent {
  border-color: rgba(34, 211, 238, 0.25);
  color: #22D3EE;
  background: rgba(34, 211, 238, 0.05);
}

.about-bio {
  font-size: 0.88rem;
  line-height: 1.75;
  color: #64748B;
  margin-bottom: 10px;
  max-width: 480px;
}

.about-bio strong {
  color: #94A3B8;
  font-weight: 600;
}

.need-something {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #22D3EE;
  text-decoration: none;
  margin-top: 6px;
  transition: color 150ms ease;
}

.need-something:hover {
  color: #67E8F9;
}

/* Divider */
.divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.05);
  margin: 40px 0;
}

.section {
  margin-bottom: 0;
}

.section-title {
  font-size: 1.2rem;
  color: #F1F5F9;
  margin-bottom: 20px;
  font-weight: 700;
}

/* ── Services ── */
.services-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

@media (max-width: 460px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}

.service-card {
  padding: 20px;
  border-radius: 12px;
  background: #0F0F0F;
  border: 1px solid rgba(255, 255, 255, 0.04);
  transition: border-color 180ms ease, transform 180ms ease;
}

.service-card:hover {
  border-color: rgba(34, 211, 238, 0.12);
  transform: translateY(-2px);
}

.service-icon {
  width: 28px;
  height: 28px;
  margin-bottom: 12px;
}

.service-icon svg {
  width: 100%;
  height: 100%;
}

.service-name {
  font-size: 0.88rem;
  color: #E2E8F0;
  font-weight: 700;
  margin-bottom: 6px;
}

.service-desc {
  font-size: 0.78rem;
  color: #475569;
  line-height: 1.65;
}

/* ── Skills rows ── */
.skill-rows {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.skill-row {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 16px;
  align-items: flex-start;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.skill-row:last-child {
  border-bottom: none;
}

@media (max-width: 480px) {
  .skill-row {
    grid-template-columns: 1fr;
    gap: 6px;
  }
}

.skill-row-label {
  font-size: 0.65rem;
  color: #334155;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  padding-top: 4px;
  white-space: nowrap;
}

.pills {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

/* ── Strengths ── */
.strengths-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

@media (max-width: 400px) {
  .strengths-grid {
    grid-template-columns: 1fr;
  }
}

.strength-card {
  padding: 20px;
  border-radius: 12px;
  background: #0F0F0F;
  border: 1px solid rgba(255, 255, 255, 0.04);
  transition: border-color 180ms ease;
}

.strength-card:hover {
  border-color: rgba(255, 255, 255, 0.08);
}

.strength-icon {
  width: 28px;
  height: 28px;
  margin-bottom: 12px;
}

.strength-icon svg {
  width: 100%;
  height: 100%;
}

.strength-name {
  font-size: 0.88rem;
  color: #F1F5F9;
  margin-bottom: 6px;
  font-weight: 700;
}

.strength-desc {
  font-size: 0.78rem;
  color: #475569;
  line-height: 1.65;
}

/* ── Education ── */
.edu-list {
  display: flex;
  flex-direction: column;
}

.edu-item {
  display: grid;
  grid-template-columns: 44px 2px 1fr;
  gap: 0 16px;
  align-items: flex-start;
  padding: 16px 0;
}

.edu-item + .edu-item .edu-bar {
  margin-top: 0;
}

.edu-year {
  font-size: 0.68rem;
  color: #334155;
  letter-spacing: 0.06em;
  padding-top: 2px;
  text-align: right;
}

.edu-bar {
  width: 2px;
  background: rgba(34, 211, 238, 0.2);
  border-radius: 1px;
  align-self: stretch;
  min-height: 40px;
}

.edu-content {
  padding-bottom: 4px;
}

.edu-title {
  font-size: 0.9rem;
  color: #E2E8F0;
  margin-bottom: 4px;
  font-weight: 700;
  line-height: 1.3;
}

.edu-meta {
  font-size: 0.68rem;
  color: #334155;
  letter-spacing: 0.04em;
}
</style>
