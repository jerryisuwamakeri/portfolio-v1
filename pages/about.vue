<template>
  <div class="about">
    <section>
      <h1 class="page-title">About me</h1>

      <div class="split">
        <div class="photo">
          <img src="/image.jpg" alt="Makeri, Jerry Isuwa" width="270" height="270" />
        </div>

        <div class="body">
          <div class="prose-block">
            <p>
              I'm Makeri, Jerry Isuwa — a fullstack developer based in Abuja, Nigeria, with 5+
              years of experience building web apps, mobile apps, APIs, and the infrastructure
              they run on. Go, JavaScript, and PHP are my primary languages. I also write
              TypeScript, Dart, Java, and Elixir depending on the project.
            </p>
            <p>
              On the frontend I use React, Next.js, Vue, and Nuxt. For mobile, Flutter and
              React Native. I've shipped e-commerce platforms, payment gateways, government
              LMS systems, logistics tools, genealogy platforms, and cross-platform mobile
              apps — most from scratch, all in production.
            </p>
            <p>
              I've worked across fintech, energy, government tech, e-commerce, logistics,
              and agricultural systems — usually owning the product end to end. I tend to
              work with small teams or directly with clients, remotely.
            </p>
            <p>
              My approach: Agile, SOLID, DRY, KISS, TDD, CI/CD, clean architecture, code
              reviews. Write things that work, are easy to read, and easy to delete when
              the time comes.
            </p>
          </div>
          <socials />
        </div>
      </div>
    </section>

    <!-- Numbers -->
    <section class="block">
      <ul class="numbers">
        <li v-for="n in numbers" :key="n.label" class="num">
          <span class="num-val">{{ n.value }}</span>
          <span class="num-lbl subtle">{{ n.label }}</span>
        </li>
      </ul>
    </section>

    <!-- Focus -->
    <section class="block">
      <div class="sec-head">
        <span class="sec-icon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-13a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>
        </span>
        <h4>What I work on</h4>
      </div>
      <ul class="focus">
        <li v-for="f in focus" :key="f.title" class="focus-item">
          <h3 class="focus-title">{{ f.title }}</h3>
          <p class="focus-desc subtle">{{ f.desc }}</p>
        </li>
      </ul>
    </section>

    <!-- Stack -->
    <section class="block">
      <div class="sec-head">
        <span class="sec-icon">
          <svg viewBox="0 0 512 512" fill="currentColor"><path d="M94.09 57L33 209.7V327h174V217h-87c-23.75 0-41-23-41-49s17.25-49 41-49h50.7l-24.8-62zm272.01 0L305 209.7V489h174V209.7L417.9 57zm25.9 62c23.8 0 41 23 41 49s-17.2 49-41 49-41-23-41-49 17.2-49 41-49zm-272 18c-11.6 0-23 12.8-23 31s11.4 31 23 31h169.9l24.8-62zm272 0c-11.6 0-23 12.8-23 31s11.4 31 23 31 23-12.8 23-31-11.4-31-23-31zM33 345v144h254V345z"/></svg>
        </span>
        <h4>Stack</h4>
      </div>
      <dl class="stack">
        <div v-for="s in stack" :key="s.cat" class="stack-row">
          <dt class="stack-cat subtle">{{ s.cat }}</dt>
          <dd class="stack-val">{{ s.items }}</dd>
        </div>
      </dl>
    </section>

    <!-- Education -->
    <section class="block">
      <div class="sec-head">
        <span class="sec-icon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13.5L5 12.6V16l7 3.8 7-3.8v-3.4l-7 3.9z"/></svg>
        </span>
        <h4>Education</h4>
      </div>
      <ul class="edu">
        <li v-for="e in education" :key="e.title" class="edu-item">
          <h3 class="edu-title">
            {{ e.title }}
            <span v-if="e.tag" class="edu-tag">{{ e.tag }}</span>
          </h3>
          <span class="edu-meta subtle">{{ e.meta }}</span>
        </li>
      </ul>
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
      numbers: [
        { value: '5+', label: 'Years of experience' },
        { value: '20+', label: 'Projects shipped' },
        { value: '8+', label: 'Industries' },
        { value: '5', label: 'Countries served' }
      ],
      focus: [
        { title: 'Fullstack Web Applications', desc: 'End-to-end web products — from schema design and server logic to frontend UI, deployment, and ongoing maintenance.' },
        { title: 'API & Backend Development', desc: 'RESTful APIs, microservices, authentication systems, real-time infrastructure, and database architecture.' },
        { title: 'Mobile Apps', desc: 'Cross-platform iOS and Android apps with Flutter and React Native, connected to robust backend infrastructure.' },
        { title: 'Server & Cloud Infrastructure', desc: 'Linux server setup and administration, AWS deployments, S3 storage, CI/CD pipelines, and Docker-based environments.' }
      ],
      stack: [
        { cat: 'Languages', items: 'Go, JavaScript, PHP, TypeScript, Dart, Java, Elixir' },
        { cat: 'Frontend', items: 'Next.js, React, Vue, Nuxt, Angular, Svelte, Livewire' },
        { cat: 'Mobile', items: 'Flutter, React Native' },
        { cat: 'Backend', items: 'Node.js, Laravel, Express, Spring Boot, ASP.NET Core, Ruby on Rails' },
        { cat: 'Database', items: 'PostgreSQL, MySQL, MongoDB, Redis, Firebase, GraphQL, SQLite' },
        { cat: 'DevOps', items: 'AWS, S3, Docker, NGINX, Linux, GitHub Actions, Vercel, Netlify' },
        { cat: 'Tools', items: 'Postman, Swagger, Figma, Notion, Strapi, Shopify, Webflow' }
      ],
      education: [
        { title: 'MSc', tag: 'In view', meta: 'Postgraduate studies' },
        { title: 'B. Agriculture (Crop Genetics & Engineering)', meta: 'Kaduna State University · 2017–2023' },
        { title: 'Careers in Commercial Banking', meta: 'Corporate Affairs Institute · 2021' },
        { title: 'Accounting Fundamentals', meta: 'Corporate Affairs Institute · 2021' }
      ]
    }
  },
  head () {
    return {
      title: 'About — Makeri, Jerry Isuwa',
      meta: [
        { name: 'description', content: 'Fullstack developer with 5+ years of experience. Go, JavaScript, PHP, Dart. Web apps, mobile, APIs, and cloud infrastructure.' },
        { name: 'og:title', content: 'About — Makeri, Jerry Isuwa' },
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
  margin-bottom: 3rem;
  color: var(--fore-primary);
}

.split {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.photo {
  max-width: 200px;
  margin-bottom: 3rem;
}
.photo img {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center top;
  border-radius: 0.5rem;
  display: block;
}
.body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.body .prose-block { margin-bottom: 0; }

.block { margin-top: 6rem; }

/* Numbers */
.numbers {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
.num {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1.25rem;
  background: var(--back-card);
  border-radius: 0.25rem;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}
.num-val {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--accent);
  line-height: 1;
}
.num-lbl { font-size: 0.85rem; }

/* Focus */
.focus {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
.focus-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: var(--fore-primary);
}
.focus-desc { font-size: 0.95rem; }

/* Stack */
.stack { margin: 0; }
.stack-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.25rem;
  padding: 0.85rem 0;
  border-bottom: 1px solid var(--border);
}
.stack-row:first-child { border-top: 1px solid var(--border); }
.stack-cat { font-size: 0.85rem; }
.stack-val { margin: 0; }

/* Education */
.edu {
  list-style: none;
  padding: 0;
  margin: 0;
}
.edu-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.85rem 0;
  border-bottom: 1px solid var(--border);
}
.edu-item:first-child { border-top: 1px solid var(--border); }
.edu-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--fore-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.edu-tag {
  background: var(--back-subtle);
  color: var(--accent);
  padding: 0.1rem 0.6rem;
  border-radius: 0.25rem;
  font-size: 0.72rem;
  font-weight: 400;
}
.edu-meta { font-size: 0.85rem; }

@media (min-width: 768px) {
  .page-title { font-size: 1.875rem; }
  .split { flex-direction: row-reverse; }
  .photo { max-width: 24rem; width: 270px; margin-bottom: 0; }
  .body { padding-right: 3rem; }
  .numbers { grid-template-columns: repeat(4, 1fr); }
  .focus { grid-template-columns: repeat(2, 1fr); }
  .stack-row { grid-template-columns: 160px 1fr; gap: 1.5rem; }
}
</style>
