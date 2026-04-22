<template>
  <div class="dot-grid" style="background: #0A0A0A; min-height: 100vh; display: flex; flex-direction: column; overflow-x: hidden;">

    <!-- Nav -->
    <nav style="display: flex; align-items: center; justify-content: space-between; padding: 20px 24px; max-width: 1000px; margin: 0 auto; width: 100%;">
      <span class="font-mono" style="color: #22D3EE; font-size: 0.85rem; font-weight: 700; letter-spacing: 0.02em;">jerry.dev</span>
      <menu-links />
    </nav>

    <!-- Hero -->
    <main style="flex: 1; display: flex; align-items: center; justify-content: center; padding: 24px 24px 60px; max-width: 1000px; margin: 0 auto; width: 100%;">
      <div class="hero-inner">

        <!-- Photo side -->
        <div class="hero-photo">
          <div class="photo-glow"></div>
          <div class="photo-frame">
            <img src="/image.jpg" alt="Makeri, Jerry Isuwa" style="width: 100%; height: 100%; object-fit: cover; object-position: center;" />
          </div>
          <div class="photo-badge font-mono">
            <span style="color: #22D3EE;">7+</span> yrs
          </div>
        </div>

        <!-- Text side -->
        <div class="hero-text">

          <!-- Need something CTA -->
          <a href="mailto:makerijerry.dev@gmail.com?subject=Hi Jerry, I'd like to work with you" class="need-something font-mono">
            Need something?
            <svg style="width:11px;height:11px;flex-shrink:0;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7H7"/>
            </svg>
          </a>

          <!-- Name -->
          <h1 class="hero-name font-black">
            Makeri,<br>
            <span style="color: #22D3EE;">Jerry Isuwa<span style="color: rgba(255,255,255,0.12);">.</span></span>
          </h1>

          <!-- Terminal line -->
          <div class="terminal-line font-mono">
            <span style="color: #22D3EE;">$</span>
            <span style="color: #334155; margin: 0 6px;">whoami</span>
            <span style="color: #94A3B8;">"Fullstack Engineer — Backend Major (Go, JS &amp; PHP)"</span>
          </div>

          <!-- Description -->
          <p class="hero-desc">
            I architect scalable systems and ship digital products that move the needle.
            7+ years turning complex problems into elegant, maintainable solutions.
          </p>

          <!-- CTAs -->
          <div class="hero-ctas">
            <nuxt-link :to="{ name: 'about' }" class="btn-primary font-bold">
              About me
              <svg style="width:14px;height:14px;flex-shrink:0;" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </nuxt-link>
            <nuxt-link :to="{ name: 'work' }" class="btn-ghost">View work</nuxt-link>
          </div>
        </div>

      </div>
    </main>

    <!-- Footer socials -->
    <footer style="display: flex; justify-content: center; padding-bottom: 28px;">
      <footer-links />
    </footer>

  </div>
</template>

<script>
import menuLinks from '~/components/menuLinks.vue'
import footerLinks from '~/components/footerLinks.vue'
export default {
  components: { menuLinks, footerLinks },
  head () {
    return {
      title: 'Makeri, Jerry Isuwa — Fullstack Engineer — Backend Major',
      meta: [
        { name: 'description', content: 'Fullstack Software Developer, AWS Cloud Engineer and IT Consultant. I architect digital experiences that solve real-world problems.' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@makeri_jerry' },
        { name: 'twitter:creator', content: '@makeri_jerry' },
        { name: 'og:title', content: 'Makeri, Jerry Isuwa — Fullstack Engineer — Backend Major' },
        { name: 'og:description', content: 'I architect scalable systems and ship digital products. 7+ years of experience.' },
        { name: 'og:image', content: '/image.jpg' }
      ]
    }
  }
}
</script>

<style scoped>
.hero-inner {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 40px;
  width: 100%;
}

@media (min-width: 768px) {
  .hero-inner {
    flex-direction: row;
    align-items: center;
    gap: 64px;
  }
}

/* Photo */
.hero-photo {
  flex-shrink: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo-glow {
  position: absolute;
  inset: -20px;
  border-radius: 20px;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%);
  pointer-events: none;
}

.photo-frame {
  width: 180px;
  height: 180px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(34, 211, 238, 0.2);
  box-shadow: 0 0 40px rgba(34, 211, 238, 0.08);
  position: relative;
  z-index: 1;
}

@media (min-width: 768px) {
  .photo-frame {
    width: 240px;
    height: 240px;
  }
}

.photo-badge {
  position: absolute;
  bottom: -10px;
  right: -10px;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 0.72rem;
  font-weight: 600;
  background: #111;
  border: 1px solid rgba(34, 211, 238, 0.2);
  color: #64748B;
  z-index: 2;
}

/* Text */
.hero-text {
  flex: 1;
  text-align: center;
  max-width: 480px;
}

@media (min-width: 768px) {
  .hero-text {
    text-align: left;
  }
}

.need-something {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #22D3EE;
  text-decoration: none;
  margin-bottom: 20px;
  transition: color 150ms ease;
}

.need-something:hover {
  color: #67E8F9;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.hero-name {
  font-size: clamp(2rem, 6vw, 3.8rem);
  line-height: 1.0;
  color: #F8FAFC;
  margin-bottom: 18px;
  font-weight: 900;
}

.terminal-line {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2px;
  font-size: 0.78rem;
  margin-bottom: 16px;
  justify-content: center;
}

@media (min-width: 768px) {
  .terminal-line {
    justify-content: flex-start;
  }
}

.hero-desc {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #64748B;
  margin-bottom: 28px;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 768px) {
  .hero-desc {
    margin-left: 0;
    margin-right: 0;
  }
}

.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

@media (min-width: 768px) {
  .hero-ctas {
    justify-content: flex-start;
  }
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 0.82rem;
  font-weight: 700;
  background: #22D3EE;
  color: #0A0A0A;
  text-decoration: none;
  transition: all 150ms ease;
}

.btn-primary:hover {
  background: #67E8F9;
  color: #0A0A0A;
  transform: translateY(-1px);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 0.82rem;
  font-weight: 600;
  border: 1px solid rgba(34, 211, 238, 0.25);
  color: #22D3EE;
  background: rgba(34, 211, 238, 0.04);
  text-decoration: none;
  transition: all 150ms ease;
}

.btn-ghost:hover {
  border-color: rgba(34, 211, 238, 0.5);
  background: rgba(34, 211, 238, 0.09);
  color: #22D3EE;
  transform: translateY(-1px);
}

.btn-muted {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 0.82rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.07);
  color: #64748B;
  background: rgba(255, 255, 255, 0.02);
  text-decoration: none;
  transition: all 150ms ease;
}

.btn-muted:hover {
  border-color: rgba(255, 255, 255, 0.15);
  color: #94A3B8;
  transform: translateY(-1px);
}
</style>
