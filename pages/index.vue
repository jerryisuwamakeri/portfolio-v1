<template>
  <div style="background:#000; min-height:100vh; overflow-x:hidden;">

    <!-- Fixed Nav -->
    <nav class="site-nav">
      <div class="nav-inner">
        <nuxt-link :to="{ name: 'index' }" class="nav-logo font-mono">
          <span class="logo-pulse"></span>
          jerry.dev
        </nuxt-link>
        <menu-links />
        <a href="mailto:makerijerry.dev@gmail.com?subject=Hi Jerry" class="nav-cta font-mono">
          Say hello
        </a>
      </div>
    </nav>

    <!-- Hero -->
    <section class="hero">
      <div class="hero-glow-a"></div>
      <div class="hero-glow-b"></div>

      <div class="hero-inner">

        <!-- Left -->
        <div class="hero-left">
          <p class="hero-eyebrow font-mono">
            <span class="eyebrow-dot"></span>
            Fullstack Engineer &nbsp;·&nbsp; Backend Major
          </p>

          <h1 class="hero-title font-black">
            MAKERI,<br>
            <em class="hero-title-em">JERRY</em><br>
            ISUWA.
          </h1>

          <p class="hero-desc">
            I build backend systems, web apps, and mobile products —
            APIs, databases, and infrastructure from spec to production.
            Based in Abuja, Nigeria. 10+ years in.
          </p>

          <div class="hero-stack font-mono">
            <span>Go</span><span class="dot">·</span>
            <span>JavaScript</span><span class="dot">·</span>
            <span>PHP</span><span class="dot">·</span>
            <span>Node.js</span><span class="dot">·</span>
            <span>React Native</span>
          </div>

          <div class="hero-ctas">
            <nuxt-link :to="{ name: 'work' }" class="btn-primary font-bold">
              View Work
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </nuxt-link>
            <nuxt-link :to="{ name: 'about' }" class="btn-ghost font-mono">About me</nuxt-link>
          </div>
        </div>

        <!-- Right -->
        <div class="hero-right">
          <div class="photo-halo"></div>
          <div class="photo-frame">
            <img src="/image.jpg" alt="Makeri, Jerry Isuwa" class="hero-photo" />
          </div>
          <div class="exp-pill font-mono">
            <span style="color:#22D3EE;">10+</span>&nbsp;years
          </div>
        </div>

      </div>
    </section>

    <!-- Marquee strip -->
    <div class="marquee-wrap">
      <div class="marquee-track font-mono">
        <span>Go</span><span class="mx">·</span>
        <span>JavaScript</span><span class="mx">·</span>
        <span>PHP</span><span class="mx">·</span>
        <span>Next.js</span><span class="mx">·</span>
        <span>Laravel</span><span class="mx">·</span>
        <span>Vue</span><span class="mx">·</span>
        <span>React Native</span><span class="mx">·</span>
        <span>Flutter</span><span class="mx">·</span>
        <span>Dart</span><span class="mx">·</span>
        <span>AWS S3</span><span class="mx">·</span>
        <span>PostgreSQL</span><span class="mx">·</span>
        <span>Docker</span><span class="mx">·</span>
        <span>Livewire</span><span class="mx">·</span>
        <span>MySQL</span><span class="mx">·</span>
        <span>Redis</span><span class="mx">·</span>
        <span>Microservices</span><span class="mx">·</span>
        &nbsp;&nbsp;
        <span>Go</span><span class="mx">·</span>
        <span>JavaScript</span><span class="mx">·</span>
        <span>PHP</span><span class="mx">·</span>
        <span>Next.js</span><span class="mx">·</span>
        <span>Laravel</span><span class="mx">·</span>
        <span>Vue</span><span class="mx">·</span>
        <span>React Native</span><span class="mx">·</span>
        <span>Flutter</span><span class="mx">·</span>
        <span>Dart</span><span class="mx">·</span>
        <span>AWS S3</span><span class="mx">·</span>
        <span>PostgreSQL</span><span class="mx">·</span>
        <span>Docker</span><span class="mx">·</span>
        <span>Livewire</span><span class="mx">·</span>
        <span>MySQL</span><span class="mx">·</span>
        <span>Redis</span><span class="mx">·</span>
        <span>Microservices</span><span class="mx">·</span>
      </div>
    </div>

    <!-- What I build -->
    <section class="pg-section">
      <div class="pg-inner">
        <div class="section-kicker font-mono">// what I build</div>
        <h2 class="section-heading font-black">SERVICES</h2>

        <div class="svc-grid">
          <div class="svc-card">
            <div class="svc-num font-mono">01</div>
            <h3 class="svc-title font-bold">Backend Systems</h3>
            <p class="svc-desc">APIs, microservices, and database architecture designed for reliability. Go, Node.js, PHP.</p>
            <div class="svc-footer font-mono">Go · Node.js · PHP · MySQL · Redis · PostgreSQL</div>
          </div>

          <div class="svc-card">
            <div class="svc-num font-mono">02</div>
            <h3 class="svc-title font-bold">Fullstack Web</h3>
            <p class="svc-desc">End-to-end web apps — data models, APIs, and polished frontends shipped to real users.</p>
            <div class="svc-footer font-mono">Next.js · Vue · Laravel · Nuxt · Livewire</div>
          </div>

          <div class="svc-card">
            <div class="svc-num font-mono">03</div>
            <h3 class="svc-title font-bold">Mobile Apps</h3>
            <p class="svc-desc">Cross-platform iOS &amp; Android apps with a single codebase, backed by solid infrastructure.</p>
            <div class="svc-footer font-mono">Flutter · Dart · React Native · REST · Auth</div>
          </div>

          <div class="svc-card">
            <div class="svc-num font-mono">04</div>
            <h3 class="svc-title font-bold">Cloud &amp; DevOps</h3>
            <p class="svc-desc">Server setup, S3 storage, deployment pipelines, and infrastructure that stays up.</p>
            <div class="svc-footer font-mono">AWS · S3 · Docker · NGINX · Linux · CI/CD</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Selected work -->
    <section class="pg-section" style="padding-top:0;">
      <div class="pg-inner">
        <div class="section-row">
          <div>
            <div class="section-kicker font-mono">// experience</div>
            <h2 class="section-heading font-black">SELECTED WORK</h2>
          </div>
          <nuxt-link :to="{ name: 'work' }" class="all-link font-mono">All work →</nuxt-link>
        </div>

        <div class="work-grid">

          <div class="work-card">
            <div class="wc-accent" style="background:#6366F1;"></div>
            <div class="wc-body">
              <div class="wc-meta"><span class="wc-cat font-mono">E-commerce</span><span class="wc-yr font-mono">2025–Now</span></div>
              <h3 class="wc-name font-bold">Leviyah</h3>
              <p class="wc-desc">Full-stack e-commerce — Next.js storefront, Laravel API, S3 media, Livewire admin.</p>
              <div class="wc-tags"><span class="wct font-mono">Next.js</span><span class="wct font-mono">Laravel</span><span class="wct font-mono">S3</span><span class="wct font-mono">Livewire</span></div>
            </div>
          </div>

          <div class="work-card">
            <div class="wc-accent" style="background:#F87171;"></div>
            <div class="wc-body">
              <div class="wc-meta"><span class="wc-cat font-mono">Fintech</span><span class="wc-yr font-mono">2024</span></div>
              <h3 class="wc-name font-bold">Lonepay Africa</h3>
              <p class="wc-desc">Payment gateway for African merchants — microservices, wallet funding, real-time reconciliation.</p>
              <div class="wc-tags"><span class="wct font-mono">Node.js</span><span class="wct font-mono">TypeScript</span><span class="wct font-mono">Microservices</span></div>
            </div>
          </div>

          <div class="work-card">
            <div class="wc-accent" style="background:#22D3EE;"></div>
            <div class="wc-body">
              <div class="wc-meta"><span class="wc-cat font-mono">GovTech</span><span class="wc-yr font-mono">2024–25</span></div>
              <h3 class="wc-name font-bold">3MTT Nigeria</h3>
              <p class="wc-desc">Backend &amp; technical support for the Federal Government's national tech programme.</p>
              <div class="wc-tags"><span class="wct font-mono">Backend</span><span class="wct font-mono">LMS</span><span class="wct font-mono">Support</span></div>
            </div>
          </div>

          <div class="work-card">
            <div class="wc-accent" style="background:#60A5FA;"></div>
            <div class="wc-body">
              <div class="wc-meta"><span class="wc-cat font-mono">Energy</span><span class="wc-yr font-mono">2025</span></div>
              <h3 class="wc-name font-bold">Fuel Smart Nigeria</h3>
              <p class="wc-desc">Real-time CNG &amp; fueling station management with hardware API integration.</p>
              <div class="wc-tags"><span class="wct font-mono">AWS</span><span class="wct font-mono">Node.js</span><span class="wct font-mono">MySQL</span></div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="cta-glow"></div>
      <div class="cta-inner">
        <p class="cta-kicker font-mono">// contact</p>
        <h2 class="cta-heading font-black">GOT SOMETHING<br>TO BUILD?</h2>
        <p class="cta-sub">Drop a message — I'll get back to you.</p>
        <a href="mailto:makerijerry.dev@gmail.com?subject=Hi Jerry" class="cta-btn font-bold">
          makerijerry.dev@gmail.com
          <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 17l9.2-9.2M17 17V7H7"/>
          </svg>
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="footer-inner">
        <span class="font-mono" style="font-size:0.63rem; color:#1E293B; letter-spacing:0.08em;">© 2026 Makeri, Jerry Isuwa</span>
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
      title: 'Makeri, Jerry Isuwa — Fullstack Engineer, Backend Major',
      meta: [
        { name: 'description', content: 'Fullstack engineer based in Abuja, Nigeria. Go, JavaScript, PHP. 10+ years building APIs, e-commerce platforms, mobile apps, and web software.' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@makeri_jerry' },
        { name: 'twitter:creator', content: '@makeri_jerry' },
        { name: 'og:title', content: 'Makeri, Jerry Isuwa — Fullstack Engineer, Backend Major' },
        { name: 'og:description', content: 'Fullstack engineer, backend-focused. Go, JavaScript, PHP. Based in Abuja, Nigeria.' },
        { name: 'og:image', content: '/image.jpg' }
      ]
    }
  }
}
</script>

<style scoped>
/* ── Nav ── */
.site-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255,255,255,0.04);
}
.nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 32px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.nav-logo {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 0.82rem;
  font-weight: 700;
  color: #E2E8F0;
  text-decoration: none;
  letter-spacing: 0.04em;
}
.logo-pulse {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: #22D3EE;
  box-shadow: 0 0 8px rgba(34,211,238,0.7);
  animation: blink 2.4s ease-in-out infinite;
  flex-shrink: 0;
}
@keyframes blink {
  0%,100% { opacity:1; } 50% { opacity:0.35; }
}
.nav-cta {
  font-size: 0.67rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #000;
  background: #22D3EE;
  padding: 7px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 700;
  transition: background 150ms ease;
  white-space: nowrap;
  flex-shrink: 0;
}
.nav-cta:hover { background: #67E8F9; }

/* ── Hero ── */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 32px 80px;
  position: relative;
  overflow: hidden;
}
.hero-glow-a {
  position: absolute;
  top: -10%;
  left: -15%;
  width: 700px; height: 700px;
  background: radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 60%);
  pointer-events: none;
}
.hero-glow-b {
  position: absolute;
  bottom: 0;
  right: -10%;
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 60%);
  pointer-events: none;
}
.hero-inner {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
  flex-direction: column-reverse;
}
@media (min-width: 860px) {
  .hero-inner { flex-direction: row; }
}
.hero-left { flex: 1; }

.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.67rem;
  color: #334155;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 22px;
}
.eyebrow-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: #22D3EE;
  flex-shrink: 0;
}
.hero-title {
  font-size: clamp(3.4rem, 9vw, 8rem);
  line-height: 0.87;
  color: #F8FAFC;
  font-weight: 900;
  letter-spacing: -0.03em;
  margin-bottom: 28px;
  font-style: normal;
}
.hero-title-em {
  color: #22D3EE;
  font-style: normal;
}
.hero-desc {
  font-size: 0.97rem;
  line-height: 1.8;
  color: #475569;
  max-width: 450px;
  margin-bottom: 24px;
}
.hero-stack {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  font-size: 0.68rem;
  color: #1E293B;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 36px;
}
.hero-stack .dot { color: #22D3EE; }
.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 26px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 700;
  background: #22D3EE;
  color: #000;
  text-decoration: none;
  transition: all 180ms ease;
  box-shadow: 0 0 20px rgba(34,211,238,0.18);
}
.btn-primary:hover {
  background: #67E8F9;
  box-shadow: 0 0 32px rgba(34,211,238,0.32);
  transform: translateY(-2px);
}
.btn-ghost {
  display: inline-flex;
  align-items: center;
  padding: 12px 26px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid rgba(255,255,255,0.08);
  color: #64748B;
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: all 180ms ease;
}
.btn-ghost:hover {
  border-color: rgba(255,255,255,0.16);
  color: #94A3B8;
  transform: translateY(-2px);
}

/* Photo */
.hero-right {
  flex-shrink: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.photo-halo {
  position: absolute;
  inset: -32px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(34,211,238,0.09) 0%, transparent 65%);
  pointer-events: none;
}
.photo-frame {
  width: 220px; height: 220px;
  border-radius: 50%;
  overflow: hidden;
  border: 1.5px solid rgba(34,211,238,0.2);
  box-shadow: 0 0 80px rgba(34,211,238,0.08);
  position: relative;
  z-index: 1;
}
@media (min-width: 860px) {
  .photo-frame { width: 300px; height: 300px; }
}
.hero-photo {
  width: 100%; height: 100%;
  object-fit: cover; object-position: center;
  display: block;
}
.exp-pill {
  position: absolute;
  bottom: -4px; right: -12px;
  background: #0A0A0A;
  border: 1px solid rgba(34,211,238,0.18);
  padding: 6px 14px;
  border-radius: 100px;
  font-size: 0.68rem;
  color: #334155;
  letter-spacing: 0.08em;
  z-index: 2;
}

/* ── Marquee ── */
.marquee-wrap {
  border-top: 1px solid rgba(255,255,255,0.04);
  border-bottom: 1px solid rgba(255,255,255,0.04);
  overflow: hidden;
  padding: 14px 0;
}
.marquee-track {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.65rem;
  color: #1E293B;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  white-space: nowrap;
  animation: scroll 32s linear infinite;
  width: max-content;
}
.marquee-track .mx { color: #22D3EE; opacity: 0.5; }
@keyframes scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* ── Sections ── */
.pg-section { padding: 96px 32px; }
.pg-inner { max-width: 1100px; margin: 0 auto; }

.section-kicker {
  font-size: 0.66rem;
  color: #22D3EE;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.section-heading {
  font-size: clamp(2rem, 4.5vw, 3.2rem);
  font-weight: 900;
  color: #F8FAFC;
  line-height: 0.9;
  letter-spacing: -0.025em;
  margin-bottom: 48px;
}
.section-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 0;
}
.section-row .section-heading { margin-bottom: 0; }
.all-link {
  font-size: 0.66rem;
  color: #334155;
  text-decoration: none;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: color 150ms ease;
  margin-bottom: 4px;
}
.all-link:hover { color: #22D3EE; }

/* Services */
.svc-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.04);
  border-radius: 20px;
  overflow: hidden;
}
@media (max-width: 600px) {
  .svc-grid { grid-template-columns: 1fr; }
}
.svc-card {
  padding: 32px 28px;
  background: #000;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: background 200ms ease;
}
.svc-card:hover { background: #080808; }
.svc-num {
  font-size: 0.62rem;
  color: #22D3EE;
  letter-spacing: 0.14em;
  opacity: 0.6;
}
.svc-title {
  font-size: 1rem;
  color: #E2E8F0;
  font-weight: 700;
}
.svc-desc {
  font-size: 0.8rem;
  color: #475569;
  line-height: 1.7;
  flex: 1;
}
.svc-footer {
  font-size: 0.63rem;
  color: #1E293B;
  letter-spacing: 0.04em;
  padding-top: 8px;
  border-top: 1px solid rgba(255,255,255,0.04);
  margin-top: auto;
}

/* Work grid */
.work-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 36px;
}
@media (min-width: 900px) {
  .work-grid { grid-template-columns: repeat(4, 1fr); }
}
@media (max-width: 560px) {
  .work-grid { grid-template-columns: 1fr; }
}
.work-card {
  border-radius: 18px;
  overflow: hidden;
  background: #0A0A0A;
  border: 1px solid rgba(255,255,255,0.05);
  display: flex;
  flex-direction: column;
  transition: border-color 200ms ease, transform 200ms ease;
}
.work-card:hover {
  border-color: rgba(255,255,255,0.1);
  transform: translateY(-5px);
}
.wc-accent { height: 2px; }
.wc-body {
  padding: 18px 16px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.wc-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.wc-cat {
  font-size: 0.58rem;
  color: #334155;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.wc-yr {
  font-size: 0.58rem;
  color: #1E293B;
  letter-spacing: 0.06em;
}
.wc-name {
  font-size: 0.95rem;
  color: #F1F5F9;
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 1.2;
}
.wc-desc {
  font-size: 0.76rem;
  color: #475569;
  line-height: 1.65;
  flex: 1;
  margin-bottom: 14px;
}
.wc-tags { display: flex; flex-wrap: wrap; gap: 5px; }
.wct {
  font-size: 0.58rem;
  color: #334155;
  letter-spacing: 0.06em;
  padding: 2px 7px;
  border-radius: 3px;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.05);
}

/* ── CTA ── */
.cta-section {
  padding: 120px 32px;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(255,255,255,0.04);
}
.cta-glow {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  width: 700px; height: 350px;
  background: radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 65%);
  pointer-events: none;
}
.cta-inner {
  max-width: 540px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.cta-kicker {
  font-size: 0.66rem;
  color: #22D3EE;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.cta-heading {
  font-size: clamp(2.4rem, 5.5vw, 4.5rem);
  font-weight: 900;
  color: #F8FAFC;
  line-height: 0.9;
  letter-spacing: -0.03em;
  margin-bottom: 20px;
}
.cta-sub {
  font-size: 0.9rem;
  color: #475569;
  margin-bottom: 40px;
}
.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 700;
  background: #22D3EE;
  color: #000;
  text-decoration: none;
  transition: all 180ms ease;
  box-shadow: 0 0 28px rgba(34,211,238,0.2);
}
.cta-btn:hover {
  background: #67E8F9;
  box-shadow: 0 0 40px rgba(34,211,238,0.36);
  transform: translateY(-2px);
}

/* ── Footer ── */
.site-footer {
  border-top: 1px solid rgba(255,255,255,0.04);
  padding: 22px 32px;
}
.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

@media (max-width: 500px) {
  .hero { padding: 90px 20px 60px; }
  .pg-section { padding: 70px 20px; }
  .cta-section { padding: 80px 20px; }
  .nav-inner { padding: 0 20px; }
  .site-footer { padding: 20px; }
}
</style>
