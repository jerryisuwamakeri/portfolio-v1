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
  bottom: 28px;
  right: 28px;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid var(--bd);
  background: var(--bg);
  color: var(--t4);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color 150ms ease, border-color 150ms ease, opacity 150ms ease;
  opacity: 0.8;
  z-index: 50;
}
.scroll-top:hover {
  color: var(--t1);
  border-color: var(--t5);
  opacity: 1;
}
</style>
