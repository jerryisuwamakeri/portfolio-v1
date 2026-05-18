<template>
  <div class="contact">

    <div class="page-head">
      <h1 class="page-title">Contact</h1>
      <p class="page-subtitle">Get in touch.</p>
    </div>

    <div class="prose">
      <p>
        The best way to reach me is by email. I check it daily and respond within a day or two.
      </p>
    </div>

    <div class="section">
      <span class="label font-mono">Email</span>
      <a href="mailto:makerijerry.dev@gmail.com" class="contact-link">
        makerijerry.dev@gmail.com
      </a>
    </div>

    <div class="section">
      <span class="label font-mono">Elsewhere</span>
      <div class="links-list">
        <a href="https://github.com/jerryisuwamakeri" target="_blank" rel="noreferrer" class="ext-link">
          GitHub
          <span class="ext-handle font-mono">jerryisuwamakeri</span>
        </a>
        <a href="https://linkedin.com/in/jerryisuwamakeri" target="_blank" rel="noreferrer" class="ext-link">
          LinkedIn
          <span class="ext-handle font-mono">jerryisuwamakeri</span>
        </a>
        <a href="https://twitter.com/makerijerry" target="_blank" rel="noreferrer" class="ext-link">
          Twitter
          <span class="ext-handle font-mono">@makerijerry</span>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  layout: 'app',
  head () {
    return {
      title: 'Contact — Makeri, Jerry Isuwa',
      meta: [
        { name: 'description', content: 'Get in touch with Makeri, Jerry Isuwa — Software Engineer based in Abuja, Nigeria.' },
        { name: 'og:title', content: 'Contact — Makeri, Jerry Isuwa' },
        { name: 'og:image', content: '/image.jpg' }
      ]
    }
  }
}
</script>

<style scoped>
.contact { padding-bottom: 20px; }

.page-head { margin-bottom: 32px; }

.page-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--t1);
  letter-spacing: -0.015em;
  margin-bottom: 6px;
}

.page-subtitle {
  font-size: 0.85rem;
  color: #52525b;
}

.prose {
  margin-bottom: 48px;
}

.prose p {
  font-size: 0.94rem;
  line-height: 1.8;
  color: #71717a;
}

.section { margin-bottom: 40px; }

.label {
  display: block;
  font-size: 0.7rem;
  color: var(--t5);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 14px;
}

.contact-link {
  font-size: 0.95rem;
  color: var(--t2);
  text-decoration: none;
  font-weight: 500;
  transition: color 150ms ease;
}

.contact-link:hover { color: var(--hover); }

.links-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.ext-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 0;
  border-bottom: 1px solid var(--bd2);
  text-decoration: none;
  font-size: 0.88rem;
  color: var(--t2);
  font-weight: 500;
  transition: color 150ms ease;
}

.ext-link:first-child { border-top: 1px solid var(--bd2); }

.ext-link:hover { color: var(--t1); }

.ext-handle {
  font-size: 0.72rem;
  color: var(--t5);
  letter-spacing: 0.02em;
  font-weight: 400;
}
</style>
