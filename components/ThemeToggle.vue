<template>
  <button
    class="toggle"
    :aria-label="dark ? 'Activate light mode' : 'Activate dark mode'"
    :title="dark ? 'Activate light mode' : 'Activate dark mode'"
    @click="toggle"
  >
    <span class="dot" :class="dark ? 'dot-light' : 'dot-dark'"></span>
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
      document.documentElement.classList.toggle('light', !this.dark)
      localStorage.setItem('jerry-theme', this.dark ? 'dark' : 'light')
    }
  }
}
</script>

<style scoped>
.toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: 0;
}
.dot {
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transition: transform 150ms ease;
}
.dot-light { background: #fff; }
.dot-dark { background: #000; }
.toggle:hover .dot { transform: translateY(-4px); }
</style>
