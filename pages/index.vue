<template>
  <div class="min-h-screen flex flex-col justify-center items-center text-center px-3 sm:px-6 md:px-0 pt-16 pb-16 sm:pt-20 sm:pb-20 md:pt-0 md:pb-0">
    <div class="flex justify-center py-2 absolute top-0 left-0 right-0">
      <menu-links />
    </div>
    <div class="w-full max-w-2xl">
      <div class="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-lg mb-3 sm:mb-4 md:mb-6 overflow-hidden flex-shrink-0">
        <!-- <img class="w-40 h-40 rounded-full shadow" src="https://www.gravatar.com/avatar/708ff0173fd2695ef4ef92cbf98975c8?s=500"> -->
        <img class="object-cover object-center w-full h-full rounded-full shadow" src="/image.jpg" alt="Makeri Jerry Isuwa">
      </div>
      <h3 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight break-words">Hello, I am Makeri Jerry Isuwa</h3>
      <p class="text-xs sm:text-base md:text-lg lg:text-xl text-gray-600 mt-2 sm:mt-3 md:mt-4 break-words">A Fullstack Software Developer | AWS Cloud Engineer and IT Consultant</p>
      <p class="text-xs sm:text-sm md:text-base text-gray-500 mt-2 sm:mt-3 md:mt-4 break-words">I don't just write code; I architect digital experiences that solve real-world problems. My passion lies in transforming complex ideas into elegant, user-centric software.</p>
      <nuxt-link class="text-xs sm:text-sm font-medium inline-flex items-center text-gray-500 mt-3 sm:mt-4 md:mt-6 hover:text-gray-700 transition-colors" :to="{ name: 'about'}">
        Read more about me
        <svg class="h-4 w-4 ml-1" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
      </nuxt-link>
    </div>
    <div class="flex justify-center py-2 absolute bottom-0 left-0 right-0">
      <ul>
        <footer-links />
      </ul>
    </div>
  </div>
</template>
<script>
import menuLinks from '~/components/menuLinks.vue'
import footerLinks from '~/components/footerLinks.vue'
export default {
  components: {menuLinks, footerLinks},
  head () {
      return {
        title: 'Makeri Jerry Isuwa - Fullstack Software Developer | AWS Cloud Engineer',
        meta: [
          { name: 'description', content: "Hello, I am Makeri Jerry Isuwa. A Fullstack Software Developer, AWS Cloud Engineer and IT Consultant. I architect digital experiences that solve real-world problems." },
          { name: "twitter:card", content: "summary"},
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: "twitter:site", content: "@makeri_jerry"},
          { name: "twitter:creator", content: "@makeri_jerry"},
          { name: "og:title", content: "Makeri Jerry Isuwa - Fullstack Software Developer | AWS Cloud Engineer"},
          { name: "og:description", content: "I architect digital experiences that solve real-world problems. Fullstack Software Developer, AWS Cloud Engineer and IT Consultant."},
          { name: "og:image", content: "/image.jpg"}
        ]
      }
  }  
}
</script>
