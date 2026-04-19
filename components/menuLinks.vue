<template>
  <ul class="flex items-center" style="gap: 4px; list-style: none; padding: 0; margin: 0;">
    <li v-for="link in links" :key="link.route">
      <nuxt-link
        :to="{ name: link.route }"
        class="nav-item font-mono"
        style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.12em; padding: 5px 10px; border-radius: 6px; display: block; font-weight: 600; text-decoration: none; transition: all 150ms ease;"
      >
        {{ link.name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { name: 'Home', route: 'index' },
        { name: 'About', route: 'about' },
        { name: 'Work', route: 'work' },
        { name: 'Contact', route: 'contact' }
      ]
    }
  }
}
</script>

<style scoped>
.nav-item {
  color: #475569;
}
.nav-item:hover {
  color: #22D3EE !important;
  background: rgba(34, 211, 238, 0.06);
}
.nuxt-link-exact-active {
  color: #22D3EE !important;
  background: rgba(34, 211, 238, 0.08);
}
</style>
