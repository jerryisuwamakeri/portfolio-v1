<template>
  <div class="contact">
    <h1 class="page-title">Contact</h1>

    <div class="prose-block intro">
      <p>
        The best way to reach me is by email. I check it daily and respond within a day or two.
        Projects, contracts, consulting, or just a question — all welcome.
      </p>
    </div>

    <socials />

    <section class="block">
      <div class="sec-head">
        <span class="sec-icon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.9 12a5 5 0 0 1 5-5h4v2h-4a3 3 0 0 0 0 6h4v2h-4a5 5 0 0 1-5-5zm6.1 1v-2h4v2h-4zm5.1-6h4a5 5 0 0 1 0 10h-4v-2h4a3 3 0 0 0 0-6h-4V7z"/></svg>
        </span>
        <h4>Elsewhere</h4>
      </div>
      <ul class="links">
        <li v-for="l in links" :key="l.name">
          <a :href="l.href" :target="l.external ? '_blank' : undefined" :rel="l.external ? 'noreferrer' : undefined" class="link-row">
            <span class="link-name">{{ l.name }}</span>
            <span class="link-handle subtle">{{ l.handle }}</span>
          </a>
        </li>
      </ul>
    </section>

    <section class="cta">
      <h3 class="cta-title">
        <span class="cta-icon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.24l-8 5-8-5V6l8 5 8-5v2.24z"/></svg>
        </span>
        Let's build something
      </h3>
      <div class="cta-text subtle">
        <p>Have a product that needs building, fixing, or scaling?</p>
      </div>
      <a href="mailto:makerijerry.dev@gmail.com" class="btn-gradient">Say hello</a>
    </section>
  </div>
</template>

<script>
import Socials from '~/components/Socials.vue'
export default {
  layout: 'app',
  components: { Socials },
  data () {
    return {
      links: [
        { name: 'Email', handle: 'makerijerry.dev@gmail.com', href: 'mailto:makerijerry.dev@gmail.com', external: false },
        { name: 'GitHub', handle: 'jerryisuwamakeri', href: 'https://github.com/jerryisuwamakeri', external: true },
        { name: 'LinkedIn', handle: 'jerryisuwamakeri', href: 'https://linkedin.com/in/jerryisuwamakeri', external: true },
        { name: 'Twitter / X', handle: '@makerijerry', href: 'https://twitter.com/makerijerry', external: true }
      ]
    }
  },
  head () {
    return {
      title: 'Contact — Makeri, Jerry Isuwa',
      meta: [
        { name: 'description', content: 'Get in touch with Makeri, Jerry Isuwa — Fullstack Developer based in Abuja, Nigeria.' },
        { name: 'og:title', content: 'Contact — Makeri, Jerry Isuwa' },
        { name: 'og:image', content: '/image.jpg' }
      ]
    }
  }
}
</script>

<style scoped>
.page-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--fore-primary);
}
.intro {
  max-width: 36rem;
  margin-bottom: 2rem;
}

.block { margin-top: 5rem; }

.links {
  list-style: none;
  padding: 0;
  margin: 0;
}
.link-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.85rem 0;
  border-bottom: 1px solid var(--border);
  transition: color 150ms ease;
}
.links li:first-child .link-row { border-top: 1px solid var(--border); }
.link-name { font-weight: 700; color: var(--fore-primary); transition: color 150ms ease; }
.link-row:hover .link-name { color: var(--accent); }
.link-handle { font-size: 0.875rem; text-align: right; word-break: break-word; }

.cta {
  height: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 6rem 0 2rem;
  text-align: center;
}
.cta-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.875rem;
  font-weight: 700;
}
.cta-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--back-subtle);
  color: var(--accent);
}
.cta-icon svg { width: 28px; height: 28px; }
.cta-text { margin: 0.75rem 0; }
.cta .btn-gradient { margin-top: 2rem; }

@media (min-width: 768px) {
  .page-title { font-size: 1.875rem; }
}
</style>
