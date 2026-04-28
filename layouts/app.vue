<template>
  <div style="background:#000; min-height:100vh; overflow-x:hidden;">

    <!-- Fixed Nav -->
    <nav class="app-nav">
      <div class="app-nav-inner">
        <nuxt-link :to="{name:'index'}" class="app-logo font-mono">
          <span class="app-logo-dot"></span>
          jerry.dev
        </nuxt-link>
        <menu-links />
        <a href="mailto:makerijerry.dev@gmail.com?subject=Hi Jerry" class="app-nav-cta font-mono">
          Say hello
        </a>
      </div>
    </nav>

    <!-- Content -->
    <div class="app-content">
      <nuxt />
    </div>

    <!-- Footer -->
    <footer class="app-footer">
      <div class="app-footer-inner">
        <span class="font-mono" style="font-size:0.65rem; color:#1E293B; letter-spacing:0.08em;">
          © 2026 Makeri, Jerry Isuwa
        </span>
        <footer-links />
      </div>
    </footer>

  </div>
</template>

<script>
import menuLinks from '~/components/menuLinks.vue'
import footerLinks from '~/components/footerLinks.vue'
export default {
  components: { menuLinks, footerLinks }
}
</script>

<style scoped>
.app-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(0,0,0,0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.app-nav-inner {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 28px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.app-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  font-weight: 700;
  color: #F1F5F9;
  text-decoration: none;
  letter-spacing: 0.04em;
}

.app-logo-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22D3EE;
  box-shadow: 0 0 10px rgba(34,211,238,0.6);
  animation: dot-pulse 2s ease-in-out infinite;
  flex-shrink: 0;
}

@keyframes dot-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}

.app-nav-cta {
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #000;
  background: #22D3EE;
  padding: 6px 14px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 700;
  transition: background 150ms ease;
  white-space: nowrap;
  flex-shrink: 0;
}

.app-nav-cta:hover { background: #67E8F9; }

.app-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 88px 28px 60px;
}

.app-footer {
  border-top: 1px solid rgba(255,255,255,0.05);
  padding: 22px 28px;
}

.app-footer-inner {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

@media (max-width: 480px) {
  .app-nav-inner { padding: 0 18px; }
  .app-content { padding: 80px 18px 48px; }
  .app-footer { padding: 18px; }
}
</style>
