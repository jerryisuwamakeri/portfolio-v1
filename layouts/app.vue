<template>
  <div class="site">

    <!-- Desktop header -->
    <header class="header">
      <nav class="nav" aria-label="Main Navigation">
        <nuxt-link :to="{name:'index'}" class="logo" aria-label="Go back to homepage">
          <span>makeri</span><span class="logo-accent">.dev</span>
        </nuxt-link>
        <div class="menu">
          <nuxt-link v-for="r in routes" :key="r.name" :to="{name:r.name}" class="nav--item" exact>{{ r.label }}</nuxt-link>
        </div>
        <theme-toggle />
      </nav>
    </header>

    <!-- Mobile bar -->
    <nav class="mnav" :class="{ 'mnav-open': navOpen }">
      <button class="mnav-btn" :aria-label="navOpen ? 'Close Menu' : 'Open Menu'" @click="navOpen = !navOpen">
        <svg v-if="!navOpen" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/></svg>
        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12 5.7 16.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z"/></svg>
      </button>
      <nuxt-link v-if="!navOpen" :to="{name:'index'}" class="logo mnav-logo">
        <span>makeri</span><span class="logo-accent">.dev</span>
      </nuxt-link>
      <div v-else class="mnav-sheet">
        <ul class="mnav-list">
          <li v-for="r in routes" :key="r.name" class="mnav-li">
            <nuxt-link :to="{name:r.name}" class="mnav-link" exact @click.native="navOpen = false">{{ r.label }}</nuxt-link>
          </li>
        </ul>
        <div class="mnav-foot">
          <theme-toggle />
        </div>
      </div>
    </nav>

    <main class="main">
      <nuxt />
    </main>

    <footer class="footer">
      <div class="footer-menu">
        <nuxt-link v-for="r in routes" :key="r.name" :to="{name:r.name}" class="nav--item" exact>{{ r.label }}</nuxt-link>
      </div>
      <div class="footer-bottom">
        <span class="footer-copy">&copy; {{ year }} Makeri, Jerry Isuwa. All rights reserved.</span>
        <footer-links />
      </div>
    </footer>

  </div>
</template>

<script>
import footerLinks from '~/components/footerLinks.vue'
import ThemeToggle from '~/components/ThemeToggle.vue'
export default {
  components: { footerLinks, ThemeToggle },
  data () {
    return {
      navOpen: false,
      year: new Date().getFullYear(),
      routes: [
        { name: 'index', label: 'Home' },
        { name: 'work', label: 'Work' },
        { name: 'about', label: 'About' },
        { name: 'contact', label: 'Contact' }
      ]
    }
  },
  watch: {
    navOpen (v) {
      document.body.style.touchAction = v ? 'none' : ''
      document.documentElement.style.overflow = v ? 'hidden' : ''
    },
    '$route' () { this.navOpen = false }
  }
}
</script>

<style scoped>
.site {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* ── Desktop header ── */
.header {
  display: none;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 3rem 0;
}
.nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.875rem;
}
.menu {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex: 1;
}

.logo {
  font-size: 0.875rem;
  color: var(--fore-primary);
  transition: opacity 150ms ease;
}
.logo:hover { opacity: 0.6; }
.logo-accent { color: var(--accent); }

/* ── Mobile nav ── */
.mnav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3rem;
  z-index: 50;
  background: var(--back-primary);
  border-bottom: 1px solid var(--border);
}
.mnav-btn {
  position: absolute;
  top: 0.75rem;
  right: 0.5rem;
  z-index: 60;
  background: transparent;
  border: 0;
  color: var(--fore-primary);
  cursor: pointer;
  padding: 0;
  display: inline-flex;
}
.mnav-logo {
  position: absolute;
  top: 0.8rem;
  left: 0.75rem;
}
.mnav-sheet {
  position: fixed;
  inset: 0;
  background: var(--back-primary);
  padding: 4rem 1rem 3rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.mnav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
.mnav-li {
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.5rem;
}
.mnav-link {
  font-size: 1.05rem;
  color: var(--fore-secondary);
}
.mnav-link.nuxt-link-exact-active { font-weight: 700; }
.mnav-foot {
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
}

/* ── Main ── */
.main {
  flex: 1;
  width: 100%;
  max-width: 1024px;
  margin: 4rem auto 0;
  padding: 3rem 1.25rem 0;
  display: flex;
  flex-direction: column;
}

/* ── Footer ── */
.footer {
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.875rem;
}
.footer-menu {
  display: flex;
  gap: 1.5rem;
}
.footer-bottom {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
}
.footer-copy { color: var(--fore-primary); }

@media (min-width: 768px) {
  .header { display: block; }
  .mnav { display: none; }
  .main { margin-top: 4rem; padding: 0 3rem; }
  .footer { align-items: stretch; padding: 3rem; }
  .footer-bottom { flex-direction: row; justify-content: space-between; }
}
@media (min-width: 1024px) {
  .header { padding: 1rem 5rem 0; }
  .main { padding: 0 5rem; }
  .footer { padding: 3rem 5rem; }
}
</style>
