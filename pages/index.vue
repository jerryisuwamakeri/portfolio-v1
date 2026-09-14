<template>
  <div class="home">

    <!-- ── Intro ── -->
    <section class="intro">
      <div class="intro-copy">
        <h1 class="intro-title">Makeri, Jerry Isuwa</h1>
        <h2 class="intro-sub">Fullstack developer — web, mobile, APIs, and the infrastructure underneath.</h2>
        <socials />
      </div>
      <div class="avatar">
        <img src="/image.jpg" alt="Makeri, Jerry Isuwa" width="186" height="186" />
      </div>
    </section>

    <!-- ── About Me ── -->
    <section class="about">
      <h3 class="sec-title">About Me</h3>
      <div class="prose-block">
        <p>
          I'm a fullstack developer with 5+ years of experience. I build the whole product —
          frontend, mobile, APIs, databases, and the server infrastructure underneath — in Go,
          JavaScript, and PHP. I also write TypeScript, Dart, Java, and Elixir depending on the project.
        </p>
        <p>
          I've shipped e-commerce platforms, payment gateways, a government LMS, logistics
          tools, genealogy platforms, and cross-platform mobile apps — most from scratch,
          all in production. Frontends in React, Next.js, and Vue; mobile in Flutter and
          React Native; backends in Node.js, Laravel, Go, and Spring Boot.
        </p>
        <p>
          I tend to work with small teams or directly with clients, remotely, across
          fintech, energy, government tech, e-commerce, logistics, and agriculture.
        </p>
      </div>
      <nuxt-link :to="{name:'about'}" class="arrow-link">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
        Learn more
      </nuxt-link>
    </section>

    <!-- ── Toolbox ── -->
    <section class="toolbox">
      <div class="sec-head">
        <span class="sec-icon">
          <svg viewBox="0 0 512 512" fill="currentColor"><path d="M94.09 57L33 209.7V327h174V217h-87c-23.75 0-41-23-41-49s17.25-49 41-49h50.7l-24.8-62zm272.01 0L305 209.7V489h174V209.7L417.9 57zm25.9 62c23.8 0 41 23 41 49s-17.2 49-41 49-41-23-41-49 17.2-49 41-49zm-272 18c-11.6 0-23 12.8-23 31s11.4 31 23 31h169.9l24.8-62zm272 0c-11.6 0-23 12.8-23 31s11.4 31 23 31 23-12.8 23-31-11.4-31-23-31zM33 345v144h254V345z"/></svg>
        </span>
        <h4>Toolbox</h4>
      </div>
      <ul class="tools">
        <li v-for="t in tools" :key="t.name" class="tool-item">
          <i :class="t.icon"></i>
          <span>{{ t.name }}</span>
        </li>
      </ul>
    </section>

    <!-- ── Works ── -->
    <section class="works">
      <div class="sec-head">
        <span class="sec-icon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 2h12v2h-1v5.2l5.3 9.2A2 2 0 0 1 20.6 22H3.4a2 2 0 0 1-1.7-3.6L7 9.2V4H6V2zm3 2v5.8L4.9 17h14.2L15 9.8V4H9z"/></svg>
        </span>
        <h4>Works</h4>
      </div>
      <ul class="work-list">
        <li v-for="w in works" :key="w.title" class="work-li">
          <component
            :is="w.url ? 'a' : 'nuxt-link'"
            :href="w.url || undefined"
            :to="w.url ? undefined : {name:'work'}"
            :target="w.url ? '_blank' : undefined"
            :rel="w.url ? 'noreferrer' : undefined"
            class="work-link"
          >
            <div class="work-main">
              <h3 class="work-title">
                {{ w.title }}
                <span v-if="w.url" class="ext-mark" aria-hidden="true">↗</span>
              </h3>
              <p class="work-excerpt subtle">{{ w.excerpt }}</p>
            </div>
            <span class="work-date subtle">{{ w.date }}</span>
          </component>
        </li>
      </ul>
      <nuxt-link :to="{name:'work'}" class="arrow-link works-more">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
        All work
      </nuxt-link>
    </section>

    <!-- ── Projects ── -->
    <section class="projects">
      <div class="sec-head">
        <span class="sec-icon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>
        </span>
        <h4>Projects</h4>
      </div>
      <ul class="work-list">
        <li v-for="pr in projects" :key="pr.title" class="work-li">
          <a :href="pr.url" target="_blank" rel="noreferrer" class="work-link">
            <div class="work-main">
              <h3 class="work-title">
                {{ pr.title }}
                <span class="ext-mark" aria-hidden="true">↗</span>
              </h3>
              <p class="work-excerpt subtle">{{ pr.excerpt }}</p>
            </div>
            <span class="work-date subtle">{{ pr.lang }}</span>
          </a>
        </li>
      </ul>
    </section>

    <!-- ── Contact ── -->
    <section class="contact">
      <h3 class="contact-title">
        <span class="contact-icon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.24l-8 5-8-5V6l8 5 8-5v2.24z"/></svg>
        </span>
        Get in touch
      </h3>
      <div class="contact-text subtle">
        <p>Have a product that needs building, fixing, or scaling? I reply within a day or two.</p>
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
      tools: [
        { icon: 'devicon-javascript-plain', name: 'JavaScript' },
        { icon: 'devicon-typescript-plain', name: 'TypeScript' },
        { icon: 'devicon-react-original', name: 'React' },
        { icon: 'devicon-nextjs-original', name: 'Next.js' },
        { icon: 'devicon-vuejs-plain', name: 'Vue.js' },
        { icon: 'devicon-nuxtjs-plain', name: 'Nuxt' },
        { icon: 'devicon-tailwindcss-plain', name: 'Tailwind CSS' },
        { icon: 'devicon-flutter-plain', name: 'Flutter' },
        { icon: 'devicon-dart-plain', name: 'Dart' },
        { icon: 'devicon-nodejs-plain', name: 'Node.js' },
        { icon: 'devicon-php-plain', name: 'PHP' },
        { icon: 'devicon-laravel-plain', name: 'Laravel' },
        { icon: 'devicon-go-plain', name: 'Go' },
        { icon: 'devicon-java-plain', name: 'Java' },
        { icon: 'devicon-spring-plain', name: 'Spring Boot' },
        { icon: 'devicon-postgresql-plain', name: 'PostgreSQL' },
        { icon: 'devicon-mysql-plain', name: 'MySQL' },
        { icon: 'devicon-mongodb-plain', name: 'MongoDB' },
        { icon: 'devicon-redis-plain', name: 'Redis' },
        { icon: 'devicon-amazonwebservices-original', name: 'AWS' },
        { icon: 'devicon-docker-plain', name: 'Docker' },
        { icon: 'devicon-nginx-original', name: 'NGINX' },
        { icon: 'devicon-linux-plain', name: 'Linux' },
        { icon: 'devicon-git-plain', name: 'Git' }
      ],
      projects: [
        { title: 'WarehouseOS', excerpt: 'Grain warehouse inventory — lot tracking, moisture/temperature time series, spoilage risk scoring, FIFO/FEFO picking.', lang: 'Java · Spring Boot', url: 'https://github.com/jerryisuwamakeri/WarehouseOS' },
        { title: 'envx', excerpt: 'CLI for secrets and env vars — AES-256-GCM encrypted local vault, secret injection, leaked-credential scanning.', lang: 'Go', url: 'https://github.com/jerryisuwamakeri/CLI' },
        { title: 'Gothicchopz API', excerpt: 'Restaurant management API — menus, real-time orders over WebSockets, inventory, Flutterwave & Paystack.', lang: 'Laravel 12', url: 'https://github.com/jerryisuwamakeri/Gothicchopz-api' },
        { title: 'OTT — Online Trade Terminal', excerpt: 'Admin-mediated marketplace — buyer/admin chat, Bitcoin payouts with live rates, Flutterwave subscriptions.', lang: 'Laravel 11', url: 'https://github.com/jerryisuwamakeri/ott' }
      ],
      works: [
        { title: 'Leviyah', excerpt: 'Full-stack e-commerce platform — Next.js storefront, Laravel REST API, AWS S3, Livewire admin.', date: '2025', url: 'https://leviyah.com' },
        { title: '3MTT Nigeria', excerpt: "Backend support and platform stability for the Federal Government's national tech upskilling programme.", date: 'Dec 2024 – Nov 2025', url: 'https://3mtt.nitda.gov.ng/' },
        { title: 'Lonepay Africa', excerpt: 'Payment gateway for African merchants — microservices for wallet funding, users, and reconciliation.', date: 'Jun – Oct 2024', url: null },
        { title: 'Fuel Smart Nigeria', excerpt: 'Real-time fueling station and CNG management system with hardware API integration.', date: 'Jan – May 2025', url: 'https://fuelsmart.ng/' }
      ]
    }
  },
  head () {
    return {
      title: 'Makeri, Jerry Isuwa — Fullstack Developer',
      meta: [
        { name: 'description', content: 'Fullstack developer based in Abuja, Nigeria. 5+ years building web apps, mobile apps, and APIs in Go, JavaScript, PHP, and Dart.' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'og:title', content: 'Makeri, Jerry Isuwa — Fullstack Developer' },
        { name: 'og:description', content: 'Fullstack developer building web apps, mobile apps, and APIs.' },
        { name: 'og:image', content: '/image.jpg' }
      ]
    }
  }
}
</script>

<style scoped>
/* ── Intro ── */
.intro {
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  width: 100%;
}
.intro-copy {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.intro-title {
  font-size: 1.875rem;
  font-weight: 700;
  max-width: 42rem;
  color: var(--fore-primary);
  line-height: 1.2;
}
.intro-sub {
  font-size: 1rem;
  font-weight: 400;
  max-width: 32rem;
  margin-bottom: 1rem;
  color: var(--fore-primary);
}
.avatar {
  width: 80px;
  margin-bottom: 1.5rem;
}
.avatar img {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
  display: block;
}

/* ── About ── */
.about { margin-top: 6rem; }
.about .prose-block { margin-bottom: 2rem; }

/* ── Toolbox ── */
.toolbox { padding: 6rem 0; }
.tools {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

/* ── Works ── */
.work-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.work-li { padding: 1.25rem 0; }
.work-link {
  display: flex;
  flex-direction: column;
  padding: 1.25rem 2rem;
  margin: -1.25rem -1.75rem;
  border-bottom: 2px solid var(--border);
  transition: background-color 150ms ease;
}
.work-link:hover { background: var(--back-subtle); }
.work-main { max-width: 32rem; }
.work-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: var(--fore-primary);
  transition: color 150ms ease;
}
.work-link:hover .work-title { color: var(--accent); }
.ext-mark {
  font-size: 0.85em;
  color: var(--fore-subtle);
  margin-left: 0.25rem;
}
.work-excerpt { margin-bottom: 0.75rem; }
.work-date {
  font-size: 0.875rem;
  white-space: nowrap;
}
.works-more { margin-top: 2rem; }
.projects { margin-top: 6rem; }

/* ── Contact ── */
.contact {
  height: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 8rem 0;
  text-align: center;
}
.contact-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.875rem;
  font-weight: 700;
}
.contact-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--back-subtle);
  color: var(--accent);
}
.contact-icon svg { width: 28px; height: 28px; }
.contact-text { margin: 0.75rem 0; }
.contact .btn-gradient { margin-top: 2rem; }

@media (min-width: 640px) {
  .avatar { width: 186px; margin-bottom: 0; }
  .tools { grid-template-columns: repeat(4, 1fr); }
}
@media (min-width: 768px) {
  .intro { flex-direction: row; }
  .intro-title { font-size: 3rem; }
}
@media (min-width: 1024px) {
  .work-link {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .work-excerpt { margin-bottom: 0; padding-right: 1.5rem; }
}
</style>
