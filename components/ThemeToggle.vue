<template>
  <button class="toggle" @click="toggle" :title="dark ? 'Switch to light mode' : 'Switch to dark mode'">
    <!-- Sun: shown in dark mode -->
    <svg v-if="dark" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
    <!-- Moon: shown in light mode -->
    <svg v-else width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
    </svg>
  </button>
</template>

<script>
export default {
  data () {
    return { dark: true }
  },
  mounted () {
    this.dark = !document.documentElement.classList.contains('light')
  },
  methods: {
    toggle () {
      this.dark = !this.dark
      if (this.dark) {
        document.documentElement.classList.remove('light')
        localStorage.setItem('jerry-theme', 'dark')
      } else {
        document.documentElement.classList.add('light')
        localStorage.setItem('jerry-theme', 'light')
      }
    }
  }
}
</script>

<style scoped>
.toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid var(--bd);
  background: transparent;
  color: var(--t4);
  cursor: pointer;
  transition: color 150ms ease, border-color 150ms ease;
  flex-shrink: 0;
}
.toggle:hover {
  color: var(--t1);
  border-color: var(--t5);
}
</style>
