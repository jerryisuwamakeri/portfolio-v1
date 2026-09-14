<template>
  <button v-if="visible" class="scroll-top" @click="scrollUp" title="Back to top">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 15l-6-6-6 6"/>
    </svg>
  </button>
</template>

<script>
export default {
  data () {
    return { visible: false }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      this.visible = window.scrollY > 300
    },
    scrollUp () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.scroll-top {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--back-subtle);
  color: var(--fore-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color 150ms ease, transform 150ms ease;
  z-index: 40;
}
.scroll-top:hover { color: var(--accent); transform: translateY(-2px); }
</style>
