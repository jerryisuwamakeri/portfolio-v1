<template>
  <div class="site">
    <div class="shell">

      <nav class="nav">
        <nuxt-link :to="{name:'index'}" class="nav-logo font-mono">jerry.dev</nuxt-link>
        <div class="nav-right">
          <div class="nav-links">
            <nuxt-link :to="{name:'index'}" class="nav-link">Home</nuxt-link>
            <nuxt-link :to="{name:'work'}" class="nav-link">Work</nuxt-link>
            <nuxt-link :to="{name:'about'}" class="nav-link">About</nuxt-link>
            <nuxt-link :to="{name:'contact'}" class="nav-link">Contact</nuxt-link>
          </div>
          <theme-toggle />
        </div>
      </nav>

      <main class="main">
        <nuxt />
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
  components: { footerLinks, ThemeToggle, ScrollTop }
}
</script>

<style scoped>
.site { background: var(--bg); min-height: 100vh; }

.shell {
  max-width: 680px;
  margin: 0 auto;
  padding: 0 24px;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 0;
  border-bottom: 1px solid var(--bd);
  margin-bottom: 64px;
}

.nav-logo {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--t1);
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: color 150ms ease;
}
.nav-logo:hover { color: var(--hover); }

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
.nuxt-link-exact-active { color: var(--t2) !important; }

.main { min-height: 60vh; }

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 36px 0 28px;
  border-top: 1px solid var(--bd);
  margin-top: 80px;
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
}
</style>
