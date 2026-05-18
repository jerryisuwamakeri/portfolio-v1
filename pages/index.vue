<template>
  <div class="site">

    <header class="nav-wrap">
      <div class="shell">
        <span class="nav-logo font-mono">jerry.dev</span>
        <div class="nav-right">
          <nav class="nav-links">
            <nuxt-link :to="{name:'work'}" class="nav-link">Work</nuxt-link>
            <nuxt-link :to="{name:'about'}" class="nav-link">About</nuxt-link>
            <nuxt-link :to="{name:'contact'}" class="nav-link">Contact</nuxt-link>
          </nav>
          <theme-toggle />
        </div>
      </div>
    </header>

    <div class="shell">
      <main class="main">

        <!-- Intro -->
        <section class="intro">
          <div class="intro-row">
            <img src="/image.jpg" alt="Makeri, Jerry Isuwa" class="avatar" />
            <div>
              <h1 class="name">Makeri, Jerry Isuwa</h1>
              <p class="role font-mono">Software Engineer · Abuja, Nigeria</p>
            </div>
          </div>
          <p class="bio">
            Backend engineer with 10 years of experience. I build APIs, databases,
            and server infrastructure — mostly Go, JavaScript, and PHP. Frontends
            and mobile apps in React, Next.js, Vue, Flutter, and React Native.
          </p>
          <div class="ctas">
            <nuxt-link :to="{name:'work'}" class="cta-link">Work →</nuxt-link>
            <nuxt-link :to="{name:'about'}" class="cta-link">About →</nuxt-link>
            <a href="mailto:makerijerry.dev@gmail.com" class="cta-link">Email →</a>
          </div>
        </section>

        <!-- Selected work -->
        <section class="section">
          <span class="label font-mono">Selected work</span>
          <div class="entry-list">

            <div class="entry">
              <span class="entry-name">Leviyah</span>
              <span class="entry-meta font-mono">Fullstack Engineer · 2025</span>
              <p class="entry-desc">Full-stack e-commerce platform — Next.js, Laravel, AWS S3, Livewire admin.</p>
            </div>

            <div class="entry">
              <span class="entry-name">3MTT Nigeria</span>
              <span class="entry-meta font-mono">Technical Support & Backend · Dec 2024–Nov 2025</span>
              <p class="entry-desc">Backend support for the Federal Government's national tech programme.</p>
            </div>

            <div class="entry">
              <span class="entry-name">Lonepay Africa</span>
              <span class="entry-meta font-mono">Backend Engineer · Jun–Oct 2024</span>
              <p class="entry-desc">Payment gateway for African merchants — microservices, wallet, reconciliation.</p>
            </div>

            <div class="entry">
              <span class="entry-name">Fuel Smart Nigeria</span>
              <span class="entry-meta font-mono">Backend Developer · Jan–May 2025</span>
              <p class="entry-desc">Real-time CNG and fueling station management system.</p>
            </div>

          </div>
          <nuxt-link :to="{name:'work'}" class="cta-link" style="margin-top:20px;display:inline-block;">
            View all work →
          </nuxt-link>
        </section>

        <!-- Stack -->
        <section class="section">
          <span class="label font-mono">Stack</span>
          <p class="stack-text">
            Go, JavaScript, PHP, TypeScript, Dart —
            Node.js, Next.js, React, Vue, Laravel, Flutter, React Native —
            PostgreSQL, MySQL, MongoDB, Redis —
            AWS, S3, Docker, NGINX, Linux
          </p>
        </section>

      </main>

      <scroll-top />

      <footer class="footer">
        <span class="footer-copy font-mono">© 2026 Makeri, Jerry Isuwa</span>
        <footer-links />
      </footer>
    </div>

  </div>
</template>

<script>
import footerLinks from '~/components/footerLinks.vue'
import ThemeToggle from '~/components/ThemeToggle.vue'
import ScrollTop from '~/components/ScrollTop.vue'
export default {
  components: { footerLinks, ThemeToggle, ScrollTop },
  head () {
    return {
      title: 'Makeri, Jerry Isuwa — Software Engineer',
      meta: [
        { name: 'description', content: 'Software engineer based in Abuja, Nigeria. 10 years building APIs, web apps, and mobile software in Go, JavaScript, PHP, and Dart.' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'og:title', content: 'Makeri, Jerry Isuwa — Software Engineer' },
        { name: 'og:description', content: 'Backend engineer. Go, JavaScript, PHP. Abuja, Nigeria.' },
        { name: 'og:image', content: '/image.jpg' }
      ]
    }
  }
}
</script>

<style scoped>
.site { background: var(--bg); min-height: 100vh; }

.shell {
  max-width: 680px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Nav */
.nav-wrap {
  border-bottom: 1px solid var(--bd);
}
.nav-wrap .shell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 28px;
  padding-bottom: 28px;
}
.nav-logo {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--t1);
  letter-spacing: 0.02em;
}
.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
}
.nav-link {
  font-size: 0.82rem;
  color: var(--t4);
  text-decoration: none;
  transition: color 150ms ease;
}
.nav-link:hover { color: var(--t1); }

/* Main */
.main {
  padding-top: 72px;
  padding-bottom: 40px;
}

/* Intro */
.intro { margin-bottom: 64px; }

.intro-row {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 22px;
}

.avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  display: block;
  border: 1px solid var(--bd);
  flex-shrink: 0;
}

.name {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--t1);
  line-height: 1.3;
  margin-bottom: 4px;
  letter-spacing: -0.01em;
}

.role {
  font-size: 0.76rem;
  color: var(--t4);
  letter-spacing: 0.02em;
}

.bio {
  font-size: 0.94rem;
  line-height: 1.8;
  color: var(--t3);
  margin-bottom: 22px;
  max-width: 560px;
}

.ctas {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

/* Sections */
.section { margin-bottom: 52px; }

.label {
  display: block;
  font-size: 0.68rem;
  color: var(--t5);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 18px;
}

/* Entry list */
.entry-list { display: flex; flex-direction: column; }

.entry {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 15px 0;
  border-bottom: 1px solid var(--bd2);
}
.entry:first-child { border-top: 1px solid var(--bd2); }

.entry-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--t2);
}

.entry-meta {
  font-size: 0.7rem;
  color: var(--t5);
  letter-spacing: 0.02em;
}

.entry-desc {
  font-size: 0.82rem;
  color: var(--t4);
  line-height: 1.6;
  margin-top: 2px;
}

/* Stack */
.stack-text {
  font-size: 0.85rem;
  line-height: 2;
  color: var(--t4);
}

/* Links */
.cta-link {
  font-size: 0.82rem;
  color: var(--t3);
  text-decoration: none;
  transition: color 150ms ease;
}
.cta-link:hover { color: var(--hover); }

/* Footer */
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
  border-top: 1px solid var(--bd);
  flex-wrap: wrap;
  gap: 12px;
}
.footer-copy {
  font-size: 0.7rem;
  color: var(--t5);
  letter-spacing: 0.04em;
}

@media (max-width: 480px) {
  .nav-links { gap: 16px; }
  .ctas { gap: 16px; }
}
</style>
