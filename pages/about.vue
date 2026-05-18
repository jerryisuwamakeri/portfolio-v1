<template>
  <div class="about">

    <!-- Identity -->
    <div class="identity">
      <img src="/image.jpg" alt="Makeri, Jerry Isuwa" class="photo" />
      <div>
        <h1 class="name">Makeri, Jerry Isuwa</h1>
        <p class="role font-mono">Software Engineer · Abuja, Nigeria</p>
      </div>
    </div>

    <!-- Bio -->
    <div class="prose">
      <p>
        Backend engineer with 10 years of experience building APIs, databases,
        and server infrastructure. Go, JavaScript, and PHP are my primary languages.
        I also write TypeScript, Dart, Java, and Elixir depending on the project.
      </p>
      <p>
        On the frontend I use React, Next.js, Vue, and Nuxt. For mobile, Flutter
        and React Native. I've shipped e-commerce platforms, payment gateways,
        government LMS systems, logistics tools, genealogy platforms, and
        cross-platform mobile apps — most from scratch, all in production.
      </p>
      <p>
        I've worked across fintech, energy, government tech, e-commerce, logistics,
        and agricultural systems. Most projects are backend-heavy. I tend to work
        with small teams or directly with clients, remotely.
      </p>
      <p>
        <a href="mailto:makerijerry.dev@gmail.com" class="inline-link">Get in touch</a>
        if you have a project or want to work together.
      </p>
    </div>

    <!-- Experience summary -->
    <div class="section">
      <span class="label font-mono">By the numbers</span>
      <div class="numbers">
        <div class="num-item">
          <span class="num-val">10</span>
          <span class="num-lbl">Years of experience</span>
        </div>
        <div class="num-item">
          <span class="num-val">20+</span>
          <span class="num-lbl">Projects shipped</span>
        </div>
        <div class="num-item">
          <span class="num-val">8+</span>
          <span class="num-lbl">Industries</span>
        </div>
        <div class="num-item">
          <span class="num-val">5</span>
          <span class="num-lbl">Countries served</span>
        </div>
      </div>
    </div>

    <!-- Stack -->
    <div class="section">
      <span class="label font-mono">Stack</span>
      <div class="stack-table">
        <div class="stack-row">
          <span class="stack-cat font-mono">Languages</span>
          <span class="stack-val">Go, JavaScript, PHP, TypeScript, Dart, Java, Elixir</span>
        </div>
        <div class="stack-row">
          <span class="stack-cat font-mono">Frontend</span>
          <span class="stack-val">Next.js, React, Vue, Nuxt, Angular, Svelte, Livewire</span>
        </div>
        <div class="stack-row">
          <span class="stack-cat font-mono">Mobile</span>
          <span class="stack-val">Flutter, React Native</span>
        </div>
        <div class="stack-row">
          <span class="stack-cat font-mono">Backend</span>
          <span class="stack-val">Node.js, Laravel, Express, ASP.NET Core, Ruby on Rails</span>
        </div>
        <div class="stack-row">
          <span class="stack-cat font-mono">Database</span>
          <span class="stack-val">PostgreSQL, MySQL, MongoDB, Redis, Firebase, GraphQL, SQLite</span>
        </div>
        <div class="stack-row">
          <span class="stack-cat font-mono">DevOps</span>
          <span class="stack-val">AWS, S3, Docker, NGINX, Linux, GitHub Actions, Vercel, Netlify</span>
        </div>
        <div class="stack-row">
          <span class="stack-cat font-mono">Tools</span>
          <span class="stack-val">Postman, Swagger, Figma, Notion, Strapi, Shopify, Webflow</span>
        </div>
      </div>
    </div>

    <!-- What I work on -->
    <div class="section">
      <span class="label font-mono">Focus areas</span>
      <div class="focus-list">
        <div class="focus-item">
          <span class="focus-title">API & Backend Development</span>
          <p class="focus-desc">RESTful APIs, microservices, authentication systems, real-time infrastructure, and database architecture.</p>
        </div>
        <div class="focus-item">
          <span class="focus-title">Fullstack Web Applications</span>
          <p class="focus-desc">End-to-end web products — from schema design and server logic to frontend UI, deployment, and ongoing maintenance.</p>
        </div>
        <div class="focus-item">
          <span class="focus-title">Mobile Apps</span>
          <p class="focus-desc">Cross-platform iOS and Android apps with Flutter and React Native, connected to robust backend infrastructure.</p>
        </div>
        <div class="focus-item">
          <span class="focus-title">Server & Cloud Infrastructure</span>
          <p class="focus-desc">Linux server setup and administration, AWS deployments, S3 storage, CI/CD pipelines, and Docker-based environments.</p>
        </div>
      </div>
    </div>

    <!-- Education -->
    <div class="section">
      <span class="label font-mono">Education</span>
      <div class="edu-list">
        <div class="edu-item">
          <span class="edu-title">MSc <span class="edu-tag font-mono">In View</span></span>
          <span class="edu-meta font-mono">Postgraduate studies</span>
        </div>
        <div class="edu-item">
          <span class="edu-title">B. Agriculture (Crop Genetics &amp; Engineering)</span>
          <span class="edu-meta font-mono">Kaduna State University · 2017–2023</span>
        </div>
        <div class="edu-item">
          <span class="edu-title">Careers in Commercial Banking</span>
          <span class="edu-meta font-mono">Corporate Affairs Institute · 2021</span>
        </div>
        <div class="edu-item">
          <span class="edu-title">Accounting Fundamentals</span>
          <span class="edu-meta font-mono">Corporate Affairs Institute · 2021</span>
        </div>
      </div>
    </div>

    <!-- Approach -->
    <div class="section">
      <span class="label font-mono">Approach</span>
      <p class="approach-text">
        Agile, SOLID, DRY, KISS, TDD, CI/CD, clean architecture, code reviews.
        Write things that work, are easy to read, and easy to delete when the time comes.
      </p>
    </div>

  </div>
</template>

<script>
export default {
  layout: 'app',
  head () {
    return {
      title: 'About — Makeri, Jerry Isuwa',
      meta: [
        { name: 'description', content: 'Software engineer with 10 years of experience. Go, JavaScript, PHP, Dart. APIs, web apps, mobile, and cloud infrastructure.' },
        { name: 'og:title', content: 'About — Makeri, Jerry Isuwa' },
        { name: 'og:image', content: '/image.jpg' }
      ]
    }
  }
}
</script>

<style scoped>
.about { padding-bottom: 20px; }

/* Identity */
.identity {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
}

.photo {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  display: block;
  border: 1px solid var(--bd);
  flex-shrink: 0;
}

.name {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--t1);
  letter-spacing: -0.01em;
  margin-bottom: 4px;
  line-height: 1.3;
}

.role {
  font-size: 0.76rem;
  color: var(--t4);
  letter-spacing: 0.02em;
}

/* Prose */
.prose { margin-bottom: 52px; }

.prose p {
  font-size: 0.94rem;
  line-height: 1.8;
  color: var(--t3);
  margin-bottom: 16px;
  max-width: 580px;
}
.prose p:last-child { margin-bottom: 0; }

.inline-link {
  color: var(--t2);
  text-decoration: underline;
  text-decoration-color: var(--bd);
  text-underline-offset: 3px;
  transition: color 150ms ease;
}
.inline-link:hover { color: var(--hover); }

/* Sections */
.section { margin-bottom: 48px; }

.label {
  display: block;
  font-size: 0.68rem;
  color: var(--t5);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 18px;
}

/* Numbers */
.numbers {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border: 1px solid var(--bd2);
  border-radius: 8px;
  overflow: hidden;
}

@media (max-width: 500px) {
  .numbers { grid-template-columns: repeat(2, 1fr); }
}

.num-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 18px 16px;
  border-right: 1px solid var(--bd2);
}
.num-item:last-child { border-right: none; }

@media (max-width: 500px) {
  .num-item:nth-child(2) { border-right: none; }
  .num-item:nth-child(3) { border-right: 1px solid var(--bd2); }
  .num-item:nth-child(1),
  .num-item:nth-child(2) {
    border-bottom: 1px solid var(--bd2);
  }
}

.num-val {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--t1);
  line-height: 1;
  letter-spacing: -0.02em;
}

.num-lbl {
  font-size: 0.68rem;
  color: var(--t5);
  line-height: 1.4;
}

/* Stack */
.stack-table { display: flex; flex-direction: column; }

.stack-row {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 24px;
  padding: 12px 0;
  border-bottom: 1px solid var(--bd2);
  align-items: baseline;
}
.stack-row:first-child { border-top: 1px solid var(--bd2); }

.stack-cat {
  font-size: 0.68rem;
  color: var(--t5);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding-top: 1px;
}

.stack-val {
  font-size: 0.84rem;
  color: var(--t3);
  line-height: 1.65;
}

/* Focus areas */
.focus-list { display: flex; flex-direction: column; }

.focus-item {
  padding: 16px 0;
  border-bottom: 1px solid var(--bd2);
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.focus-item:first-child { border-top: 1px solid var(--bd2); }

.focus-title {
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--t2);
}

.focus-desc {
  font-size: 0.82rem;
  color: var(--t4);
  line-height: 1.65;
}

/* Education */
.edu-list { display: flex; flex-direction: column; }

.edu-item {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 14px 0;
  border-bottom: 1px solid var(--bd2);
}
.edu-item:first-child { border-top: 1px solid var(--bd2); }

.edu-title {
  font-size: 0.88rem;
  color: var(--t2);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.edu-tag {
  font-size: 0.6rem;
  color: var(--t5);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1px solid var(--bd2);
  padding: 1px 6px;
  border-radius: 3px;
  font-weight: 400;
}

.edu-meta {
  font-size: 0.7rem;
  color: var(--t5);
  letter-spacing: 0.02em;
}

/* Approach */
.approach-text {
  font-size: 0.88rem;
  line-height: 1.75;
  color: var(--t4);
}

@media (max-width: 480px) {
  .stack-row { grid-template-columns: 76px 1fr; gap: 16px; }
}
</style>
