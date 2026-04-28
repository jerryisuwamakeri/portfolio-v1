<template>
  <div class="dot-grid" style="background: #0A0A0A; min-height: 100vh; display: flex; flex-direction: column; overflow-x: hidden;">

    <!-- Nav -->
    <nav style="display: flex; align-items: center; justify-content: space-between; padding: 20px 24px; max-width: 1000px; margin: 0 auto; width: 100%;">
      <span class="font-mono" style="color: #22D3EE; font-size: 0.85rem; font-weight: 700; letter-spacing: 0.02em;">jerry.dev</span>
      <menu-links />
    </nav>

    <!-- Hero -->
    <section style="flex: 1; display: flex; align-items: center; justify-content: center; padding: 24px 24px 48px; max-width: 1000px; margin: 0 auto; width: 100%;">
      <div class="hero-inner">

        <div class="hero-photo">
          <div class="photo-glow"></div>
          <div class="photo-frame">
            <img src="/image.jpg" alt="Makeri, Jerry Isuwa" style="width:100%;height:100%;object-fit:cover;object-position:center;" />
          </div>
          <div class="photo-badge font-mono"><span style="color:#22D3EE;">7+</span> yrs</div>
        </div>

        <div class="hero-text">
          <a href="mailto:makerijerry.dev@gmail.com?subject=Hi Jerry, I'd like to work with you" class="need-something font-mono">
            Need something?
            <svg style="width:11px;height:11px;flex-shrink:0;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7H7"/>
            </svg>
          </a>

          <h1 class="hero-name font-black">
            Makeri,<br>
            <span style="color:#22D3EE;">Jerry Isuwa<span style="color:rgba(255,255,255,0.12);">.</span></span>
          </h1>

          <div class="terminal-line font-mono">
            <span style="color:#22D3EE;">$</span>
            <span style="color:#334155;margin:0 6px;">whoami</span>
            <span style="color:#94A3B8;">"Fullstack Engineer — Backend Major (Go, JS &amp; PHP)"</span>
          </div>

          <p class="hero-desc">
            Backend at heart. Fullstack in practice. I've built payment rails,
            government-scale platforms, and mobile apps — each from zero to production.
            Seven years. No shortcuts.
          </p>

          <div class="hero-ctas">
            <nuxt-link :to="{ name: 'about' }" class="btn-primary font-bold">
              About me
              <svg style="width:14px;height:14px;flex-shrink:0;" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </nuxt-link>
            <nuxt-link :to="{ name: 'work' }" class="btn-ghost">View work</nuxt-link>
          </div>
        </div>

      </div>
    </section>

    <!-- Stats strip -->
    <div class="stats-strip">
      <div class="stats-inner">
        <div class="stat-item">
          <span class="stat-num font-black">7+</span>
          <span class="stat-lbl font-mono">Years shipped</span>
        </div>
        <div class="stat-div"></div>
        <div class="stat-item">
          <span class="stat-num font-black">20+</span>
          <span class="stat-lbl font-mono">Products built</span>
        </div>
        <div class="stat-div"></div>
        <div class="stat-item">
          <span class="stat-num font-black">8+</span>
          <span class="stat-lbl font-mono">Industries</span>
        </div>
        <div class="stat-div"></div>
        <div class="stat-item">
          <span class="stat-num font-black">5</span>
          <span class="stat-lbl font-mono">Countries served</span>
        </div>
      </div>
    </div>

    <!-- What I build -->
    <section class="page-section">
      <div class="sec-label font-mono">// what I build</div>
      <div class="spec-grid">

        <div class="spec-card">
          <div class="spec-num font-mono">01</div>
          <h3 class="spec-name font-bold">Backend Systems</h3>
          <p class="spec-desc">APIs, microservices, and server infrastructure that handle real load — designed for correctness first, performance second.</p>
          <div class="spec-stack font-mono">Go · Node.js · PHP · MySQL · Redis</div>
        </div>

        <div class="spec-card">
          <div class="spec-num font-mono">02</div>
          <h3 class="spec-name font-bold">Fullstack Products</h3>
          <p class="spec-desc">End-to-end web applications — from data modelling and API design to polished, responsive frontends shipped to real users.</p>
          <div class="spec-stack font-mono">Vue · React · Laravel · Nuxt · Tailwind</div>
        </div>

        <div class="spec-card">
          <div class="spec-num font-mono">03</div>
          <h3 class="spec-name font-bold">Mobile Engineering</h3>
          <p class="spec-desc">Cross-platform mobile apps on iOS and Android with a single codebase, wired to robust backend infrastructure.</p>
          <div class="spec-stack font-mono">React Native · REST APIs · Push · Auth</div>
        </div>

        <div class="spec-card">
          <div class="spec-num font-mono">04</div>
          <h3 class="spec-name font-bold">API Design &amp; Integration</h3>
          <p class="spec-desc">Clean, well-documented APIs built for third-party consumption. Integrations with payment rails, identity systems, and hardware.</p>
          <div class="spec-stack font-mono">REST · Swagger · Postman · Webhooks</div>
        </div>

      </div>
    </section>

    <!-- Selected work -->
    <section class="page-section" style="padding-bottom: 64px;">
      <div class="sec-row">
        <div class="sec-label font-mono">// selected work</div>
        <nuxt-link :to="{ name: 'work' }" class="see-all font-mono">View all work →</nuxt-link>
      </div>

      <div class="work-grid">

        <div class="work-card">
          <div class="work-card-accent" style="background:#F87171;"></div>
          <div class="work-card-body">
            <div class="work-card-meta">
              <span class="work-tag font-mono">Fintech</span>
              <span class="work-year font-mono">2024</span>
            </div>
            <h3 class="work-card-name font-bold">Lonepay Africa</h3>
            <p class="work-card-desc">Secure payment gateway for African merchants — microservices, wallet funding, real-time reconciliation.</p>
            <div class="work-card-stack font-mono">Node.js · TypeScript · Microservices · DevOps</div>
          </div>
        </div>

        <div class="work-card">
          <div class="work-card-accent" style="background:#22D3EE;"></div>
          <div class="work-card-body">
            <div class="work-card-meta">
              <span class="work-tag font-mono">GovTech</span>
              <span class="work-year font-mono">2024 – 2025</span>
            </div>
            <h3 class="work-card-name font-bold">3MTT Nigeria</h3>
            <p class="work-card-desc">Backend support for the Federal Government's tech upskilling initiative — platform stability, bug fixes, and developer support.</p>
            <div class="work-card-stack font-mono">Backend · LMS · Technical Support</div>
          </div>
        </div>

        <div class="work-card">
          <div class="work-card-accent" style="background:#60A5FA;"></div>
          <div class="work-card-body">
            <div class="work-card-meta">
              <span class="work-tag font-mono">Energy</span>
              <span class="work-year font-mono">2025</span>
            </div>
            <h3 class="work-card-name font-bold">Fuel Smart Nigeria</h3>
            <p class="work-card-desc">Real-time fueling station &amp; CNG management system — pump tracking, billing, hardware API integration.</p>
            <div class="work-card-stack font-mono">AWS · Node.js · MySQL · IoT APIs</div>
          </div>
        </div>

      </div>
    </section>

    <!-- Footer -->
    <footer style="display:flex;justify-content:center;padding:0 24px 32px;border-top:1px solid rgba(255,255,255,0.04);">
      <div style="max-width:1000px;width:100%;display:flex;align-items:center;justify-content:space-between;padding-top:24px;flex-wrap:wrap;gap:12px;">
        <span class="font-mono" style="font-size:0.68rem;color:#1E293B;letter-spacing:0.08em;">© 2026 Makeri, Jerry Isuwa</span>
        <footer-links />
      </div>
    </footer>

  </div>
</template>

<script>
import menuLinks from '~/components/menuLinks.vue'
import footerLinks from '~/components/footerLinks.vue'
export default {
  components: { menuLinks, footerLinks },
  head () {
    return {
      title: 'Makeri, Jerry Isuwa — Fullstack Engineer — Backend Major',
      meta: [
        { name: 'description', content: 'Fullstack Engineer and Backend Developer (Go, JS & PHP). 7+ years building payment systems, government platforms, and mobile apps from zero to production.' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@makeri_jerry' },
        { name: 'twitter:creator', content: '@makeri_jerry' },
        { name: 'og:title', content: 'Makeri, Jerry Isuwa — Fullstack Engineer — Backend Major' },
        { name: 'og:description', content: 'Backend at heart. Fullstack in practice. 7+ years, 20+ products shipped.' },
        { name: 'og:image', content: '/image.jpg' }
      ]
    }
  }
}
</script>

<style scoped>
/* ── Hero ── */
.hero-inner {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 40px;
  width: 100%;
}

@media (min-width: 768px) {
  .hero-inner { flex-direction: row; gap: 64px; }
}

.hero-photo {
  flex-shrink: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo-glow {
  position: absolute;
  inset: -20px;
  border-radius: 20px;
  background: radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%);
  pointer-events: none;
}

.photo-frame {
  width: 180px;
  height: 180px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(34,211,238,0.2);
  box-shadow: 0 0 40px rgba(34,211,238,0.08);
  position: relative;
  z-index: 1;
}

@media (min-width: 768px) {
  .photo-frame { width: 240px; height: 240px; }
}

.photo-badge {
  position: absolute;
  bottom: -10px;
  right: -10px;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 0.72rem;
  font-weight: 600;
  background: #111;
  border: 1px solid rgba(34,211,238,0.2);
  color: #64748B;
  z-index: 2;
}

.hero-text {
  flex: 1;
  text-align: center;
  max-width: 500px;
}

@media (min-width: 768px) {
  .hero-text { text-align: left; }
}

.need-something {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #22D3EE;
  text-decoration: none;
  margin-bottom: 18px;
  transition: color 150ms ease;
}

.need-something:hover { color: #67E8F9; }

.hero-name {
  font-size: clamp(2rem, 6vw, 3.8rem);
  line-height: 1.0;
  color: #F8FAFC;
  margin-bottom: 16px;
  font-weight: 900;
}

.terminal-line {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2px;
  font-size: 0.78rem;
  margin-bottom: 16px;
  justify-content: center;
}

@media (min-width: 768px) {
  .terminal-line { justify-content: flex-start; }
}

.hero-desc {
  font-size: 0.95rem;
  line-height: 1.75;
  color: #64748B;
  margin-bottom: 28px;
  max-width: 440px;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 768px) {
  .hero-desc { margin-left: 0; margin-right: 0; }
}

.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

@media (min-width: 768px) {
  .hero-ctas { justify-content: flex-start; }
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 11px 22px;
  border-radius: 8px;
  font-size: 0.82rem;
  font-weight: 700;
  background: #22D3EE;
  color: #0A0A0A;
  text-decoration: none;
  transition: all 150ms ease;
}

.btn-primary:hover { background: #67E8F9; transform: translateY(-1px); }

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 11px 22px;
  border-radius: 8px;
  font-size: 0.82rem;
  font-weight: 600;
  border: 1px solid rgba(34,211,238,0.25);
  color: #22D3EE;
  background: rgba(34,211,238,0.04);
  text-decoration: none;
  transition: all 150ms ease;
}

.btn-ghost:hover {
  border-color: rgba(34,211,238,0.5);
  background: rgba(34,211,238,0.09);
  transform: translateY(-1px);
}

/* ── Stats strip ── */
.stats-strip {
  border-top: 1px solid rgba(255,255,255,0.05);
  border-bottom: 1px solid rgba(255,255,255,0.05);
  padding: 0 24px;
}

.stats-inner {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  gap: 0;
  overflow-x: auto;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex: 1;
  min-width: 80px;
}

.stat-num {
  font-size: 1.6rem;
  font-weight: 900;
  color: #F1F5F9;
  line-height: 1;
}

.stat-lbl {
  font-size: 0.6rem;
  color: #334155;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.stat-div {
  width: 1px;
  height: 32px;
  background: rgba(255,255,255,0.05);
  flex-shrink: 0;
}

/* ── Sections ── */
.page-section {
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  padding: 56px 24px 0;
}

.sec-label {
  font-size: 0.7rem;
  color: #22D3EE;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.sec-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.sec-row .sec-label { margin-bottom: 0; }

.see-all {
  font-size: 0.68rem;
  color: #334155;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 150ms ease;
}

.see-all:hover { color: #22D3EE; }

/* ── Specialty grid ── */
.spec-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

@media (max-width: 540px) {
  .spec-grid { grid-template-columns: 1fr; }
}

.spec-card {
  padding: 22px 20px;
  border-radius: 12px;
  background: #0D0D0D;
  border: 1px solid rgba(255,255,255,0.05);
  transition: border-color 200ms ease;
}

.spec-card:hover {
  border-color: rgba(34,211,238,0.12);
}

.spec-num {
  font-size: 0.65rem;
  color: #22D3EE;
  letter-spacing: 0.12em;
  margin-bottom: 12px;
  opacity: 0.7;
}

.spec-name {
  font-size: 0.95rem;
  color: #F1F5F9;
  font-weight: 700;
  margin-bottom: 8px;
}

.spec-desc {
  font-size: 0.8rem;
  color: #475569;
  line-height: 1.65;
  margin-bottom: 14px;
}

.spec-stack {
  font-size: 0.63rem;
  color: #334155;
  letter-spacing: 0.04em;
}

/* ── Selected work ── */
.work-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

@media (max-width: 640px) {
  .work-grid { grid-template-columns: 1fr; }
}

@media (min-width: 641px) and (max-width: 900px) {
  .work-grid { grid-template-columns: 1fr 1fr; }
}

.work-card {
  border-radius: 12px;
  overflow: hidden;
  background: #0D0D0D;
  border: 1px solid rgba(255,255,255,0.05);
  display: flex;
  flex-direction: column;
  transition: border-color 200ms ease, transform 200ms ease;
}

.work-card:hover {
  border-color: rgba(255,255,255,0.1);
  transform: translateY(-3px);
}

.work-card-accent {
  height: 3px;
  width: 100%;
  opacity: 0.8;
}

.work-card-body {
  padding: 18px 18px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.work-card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.work-tag {
  font-size: 0.58rem;
  color: #334155;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.work-year {
  font-size: 0.58rem;
  color: #1E293B;
  letter-spacing: 0.06em;
}

.work-card-name {
  font-size: 1rem;
  color: #F1F5F9;
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 1.2;
}

.work-card-desc {
  font-size: 0.78rem;
  color: #475569;
  line-height: 1.6;
  flex: 1;
  margin-bottom: 14px;
}

.work-card-stack {
  font-size: 0.62rem;
  color: #1E293B;
  letter-spacing: 0.04em;
}
</style>
