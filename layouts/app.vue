<template>
  <div class="dot-grid" style="background: #0A0A0A; min-height: 100vh;">
    <div class="container">
      <div class="flex justify-center">
        <div class="w-full px-4 md:px-6" style="max-width: 820px;">

          <!-- Top nav bar -->
          <div class="flex items-center justify-between py-5 mb-1">
            <nuxt-link :to="{name: 'index'}" class="font-mono text-sm font-bold" style="color: #22D3EE; text-decoration: none;">
              jerry.dev
            </nuxt-link>
            <menu-links />
          </div>

          <!-- Page content -->
          <nuxt />

          <!-- Footer -->
          <div class="flex items-center justify-between py-10 mt-8" style="border-top: 1px solid rgba(255,255,255,0.05);">
            <span class="font-mono text-xs" style="color: #334155;">© 2026 Makeri, Jerry Isuwa</span>
            <footer-links />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menuLinks from '~/components/menuLinks.vue'
import footerLinks from '~/components/footerLinks.vue'
export default {
  components: { menuLinks, footerLinks }
}
</script>
