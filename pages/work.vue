<template>
  <div class="work">
    <h1 class="page-title">Work</h1>

    <ul class="filters">
      <li
        v-for="c in categories"
        :key="c"
        class="filter"
        :class="c === active ? 'filter--active' : 'filter--idle'"
        @click="active = c"
      >{{ c }}</li>
    </ul>

    <ul class="grid">
      <li v-for="job in filtered" :key="job.title" class="card">
        <component
          :is="job.url ? 'a' : 'div'"
          :href="job.url || undefined"
          :target="job.url ? '_blank' : undefined"
          :rel="job.url ? 'noreferrer' : undefined"
          class="card-link"
        >
          <div class="card-top">
            <h3 class="card-title">{{ job.title }}</h3>
            <p class="card-role subtle">{{ job.role }} · {{ job.date }}</p>
            <p class="card-desc subtle">{{ job.desc }}</p>
          </div>
          <div class="card-foot">
            <span class="card-tags subtle">{{ job.tags.join(' · ') }}</span>
            <span v-if="job.url" class="card-more subtle">
              Visit site
              <svg viewBox="0 0 24 24" fill="currentColor" class="card-arrow"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
            </span>
          </div>
          <span class="card-cat">{{ job.category }}</span>
        </component>
      </li>
    </ul>

    <section class="side">
      <div class="sec-head">
        <span class="sec-icon">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>
        </span>
        <h4>Open source &amp; side projects</h4>
      </div>
      <ul class="grid">
        <li v-for="pr in projects" :key="pr.title" class="card">
          <a :href="pr.url" target="_blank" rel="noreferrer" class="card-link">
            <div class="card-top">
              <h3 class="card-title">{{ pr.title }}</h3>
              <p class="card-role subtle">{{ pr.kind }}</p>
              <p class="card-desc subtle">{{ pr.desc }}</p>
            </div>
            <div class="card-foot">
              <span class="card-tags subtle">{{ pr.tags.join(' · ') }}</span>
              <span class="card-more subtle">
                GitHub
                <svg viewBox="0 0 24 24" fill="currentColor" class="card-arrow"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
              </span>
            </div>
            <span class="card-cat">{{ pr.lang }}</span>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'app',
  data () {
    return {
      active: 'All',
      projects: [
        { title: 'WarehouseOS', kind: 'Grain warehouse inventory system', lang: 'Java', url: 'https://github.com/jerryisuwamakeri/WarehouseOS',
          desc: 'Tracks grain lots from intake to dispatch. Moisture and temperature readings as time series, A/B/C/REJECT grading against configurable thresholds, 0–100 spoilage risk scoring, FIFO/FEFO pick lists, and a transactional stock ledger. Expiry is computed from measured conditions, not fixed dates. 65 unit and integration tests.',
          tags: ['Java 17', 'Spring Boot 3.5', 'MySQL', 'Vue 3'] },
        { title: 'envx', kind: 'Secrets & environment CLI', lang: 'Go', url: 'https://github.com/jerryisuwamakeri/CLI',
          desc: 'Secure CLI for managing environment variables across projects. Secrets live in a local AES-256-GCM encrypted SQLite vault instead of .env files. Inject secrets into any command, scan repos for leaked AWS/GitHub/Stripe keys and JWTs, import/export .env, JSON, and YAML. Cross-platform builds via GoReleaser.',
          tags: ['Go', 'SQLite', 'AES-256-GCM', 'scrypt', 'GitHub Actions'] },
        { title: 'Gothicchopz API', kind: 'Restaurant management backend', lang: 'PHP', url: 'https://github.com/jerryisuwamakeri/Gothicchopz-api',
          desc: 'REST API for a restaurant management system. Menus with categories, variants, and add-ons; order processing with real-time updates over WebSockets; inventory and waste tracking; Flutterwave and Paystack payments; role-based access with JWT and Sanctum; activity logging and reporting.',
          tags: ['Laravel 12', 'PHP 8.2', 'MySQL', 'Reverb', 'Sanctum'] },
        { title: 'OTT — Online Trade Terminal', kind: 'Admin-mediated marketplace', lang: 'PHP', url: 'https://github.com/jerryisuwamakeri/ott',
          desc: 'Marketplace where every order is handled by a real admin — no automated checkout. Buyers chat with admins, sellers receive crypto payouts. WebSockets messaging, Bitcoin payments with live rate tracking, Flutterwave subscriptions.',
          tags: ['Laravel 11', 'Livewire 3', 'Alpine.js', 'WebSockets', 'Bitcoin'] }
      ],
      jobs: [
        { title: 'Lambuvet', role: 'Fullstack Developer', date: 'Sep 2026', url: 'https://lambuvet.com', category: 'AgriTech',
          desc: 'Digital veterinary and livestock management platform for Nigerian farmers. Farmer registration with persistent IDs, animal-by-animal and flock-level records, vet case reporting from field to resolution, vaccination and treatment history, and animal health insurance plans.',
          tags: ['Fullstack', 'Livestock Records', 'Case Management', 'Insurance', 'Auth'] },
        { title: 'Leviyah', role: 'Fullstack Engineer', date: '2025', url: 'https://leviyah.com', category: 'E-commerce',
          desc: 'Full-stack e-commerce platform. Next.js storefront covering shop, cart, checkout, and account management. Laravel REST API backend. AWS S3 for media storage. Livewire admin dashboard for real-time order tracking and inventory.',
          tags: ['Next.js', 'Laravel', 'Livewire', 'AWS S3', 'TypeScript', 'MySQL'] },
        { title: 'Women Thrive by Design', role: 'Web Developer', date: 'Apr 2026', url: 'https://womenthrivebydesign.com/', category: 'Web',
          desc: 'Built a purpose-driven platform for women from concept to production. Responsive UI, CMS integration, performance and SEO optimisation.',
          tags: ['Web Dev', 'CMS', 'SEO', 'Performance'] },
        { title: 'Terraverdecare', role: 'Web Developer', date: 'Apr 2026', url: 'https://terraverdecare.com', category: 'E-commerce',
          desc: 'Brand and e-commerce site for a Nigerian menstrual health company making pads from plant-based agricultural fibres. Product shop with single and bulk ordering, partnership enquiries, impact metrics, and a journal for research and media stories.',
          tags: ['E-commerce', 'CMS', 'SEO', 'Performance'] },
        { title: 'Tuwanx', role: 'Mobile App & Backend Developer', date: 'Jul 2025 – Jan 2026', url: 'https://tuwanx.com', category: 'Mobile',
          desc: 'Built the mobile application and backend infrastructure from scratch. Cross-platform app on iOS and Android, real-time APIs, auth, and deployment pipeline.',
          tags: ['React Native', 'Node.js', 'REST APIs', 'Auth'] },
        { title: 'Imam Maliki Abdullahi Family Tree', role: 'Fullstack Developer', date: 'Dec 2025', url: null, category: 'Web',
          desc: 'Secure genealogy platform with NIN identity verification and role-based access control. Multi-generational family tree UI, encrypted storage, audit logging.',
          tags: ['NIN', 'RBAC', 'Genealogy', 'Security', 'PHP'] },
        { title: '3MTT Nigeria', role: 'Technical Support & Backend Developer', date: 'Dec 2024 – Nov 2025', url: 'https://3mtt.nitda.gov.ng/', category: 'GovTech',
          desc: "Backend support and technical operations for the Federal Government's national tech upskilling programme. First and second-line support, bug fixes, incident logging, and platform stability.",
          tags: ['Backend', 'LMS', 'Technical Support', 'GovTech'] },
        { title: 'Fuel Smart Nigeria', role: 'Backend Developer', date: 'Jan – May 2025', url: 'https://fuelsmart.ng/', category: 'Energy',
          desc: 'Real-time fueling station and CNG management system. Pump tracking, billing, hardware API integration, staff shifts, and operational analytics dashboards.',
          tags: ['AWS', 'Node.js', 'MySQL', 'IoT APIs'] },
        { title: 'Sustena Energy', role: 'Server Admin & Web Developer', date: 'Dec 2024 – Mar 2025', url: null, category: 'Energy',
          desc: 'Platform for CNG logistics, conversion scheduling, and virtual pipeline distribution. Custom SDKs, RESTful endpoints, and data-driven dashboards for operations.',
          tags: ['SDK', 'REST APIs', 'Infrastructure', 'PHP'] },
        { title: 'Brand You Digital', role: 'Server Admin & Web Developer', date: 'Jan – Dec 2024', url: 'https://www.brandyou.ie/', category: 'Infrastructure',
          desc: 'Managed 500+ websites across 10+ Linux servers. Maintenance automation, DNS/SSL, performance diagnostics, server migrations, and incident response. Remote, Dublin.',
          tags: ['Linux', 'Server Admin', 'DNS', 'SSL', 'Automation'] },
        { title: 'Lonepay Africa', role: 'Backend Engineer', date: 'Jun – Oct 2024', url: null, category: 'Fintech',
          desc: 'Payment gateway for African merchants. Microservices for wallet funding, user management, and reconciliation. Third-party bank integrations, zero-downtime DevOps.',
          tags: ['Node.js', 'TypeScript', 'Microservices', 'Fintech'] },
        { title: 'Gnpay Africa', role: 'Backend Developer', date: 'Mar – May 2024', url: null, category: 'Fintech',
          desc: 'Buy-Now-Pay-Later platform backend. KYC flows, credit scoring, payment scheduling, and PostgreSQL performance optimisation.',
          tags: ['PostgreSQL', 'KYC', 'TypeScript', 'BNPL'] },
        { title: 'Afrostreet Festival', role: 'Web Developer', date: 'Jun 2021', url: null, category: 'Web',
          desc: 'Digital ticketing and merchandise platform. Flutterwave and Paystack integration. 2× session time, 30%+ reduction in bounce rate.',
          tags: ['Flutterwave', 'Paystack', 'Performance'] },
        { title: 'Ladi Morals Integrated Farms', role: 'Server Admin & Developer', date: 'Apr 2020', url: null, category: 'Infrastructure',
          desc: 'Internal systems for agricultural logistics. Legacy refactoring, mobile responsiveness, delivery tracking tools. Led hiring and training of junior developers.',
          tags: ['Refactoring', 'Logistics', 'Team Lead'] }
      ]
    }
  },
  computed: {
    categories () {
      return ['All', ...new Set(this.jobs.map(j => j.category))]
    },
    filtered () {
      return this.active === 'All' ? this.jobs : this.jobs.filter(j => j.category === this.active)
    }
  },
  head () {
    return {
      title: 'Work — Makeri, Jerry Isuwa',
      meta: [
        { name: 'description', content: '5+ years of fullstack work — fintech, energy, e-commerce, government tech, and open source.' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'og:title', content: 'Work — Makeri, Jerry Isuwa' },
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
  color: var(--fore-primary);
}

/* Filters */
.filters {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
}
.filter {
  cursor: pointer;
  position: relative;
  transition: color 150ms ease;
  user-select: none;
}
.filter--idle { color: var(--fore-subtle); }
.filter--idle:hover { color: var(--accent); }
.filter--active {
  font-weight: 700;
  color: var(--fore-primary);
}
.filter--active::after {
  content: '';
  position: absolute;
  height: 2px;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(200deg, var(--accent), var(--second-accent));
}

/* Grid */
.grid {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
.card {
  display: flex;
  flex-direction: column;
  background: var(--back-card);
  border-radius: 0.25rem;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  position: relative;
  transition: box-shadow 150ms ease;
}
.card:hover { box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1); }
.card-link {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 2rem;
  height: 100%;
}
.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: var(--fore-primary);
  padding-right: 5rem;
  transition: color 150ms ease;
}
a.card-link:hover .card-title { color: var(--accent); }
.card-role {
  font-size: 0.8rem;
  margin-bottom: 0.75rem;
}
.card-desc { font-size: 0.95rem; }
.card-foot {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.875rem;
}
.card-tags { font-size: 0.78rem; }
.card-more {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  white-space: nowrap;
}
.card-arrow {
  width: 1.2em;
  height: 1.2em;
  opacity: 0;
  transition: opacity 150ms ease;
}
a.card-link:hover .card-arrow { opacity: 1; }
.card-cat {
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  background: var(--back-subtle);
  color: var(--accent);
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
}

.side { margin-top: 6rem; }

@media (min-width: 768px) {
  .page-title { font-size: 1.875rem; }
  .grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
