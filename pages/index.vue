<template>
  <div class="w-screen overflow-hidden min-h-screen flex flex-col justify-center items-center text-center px-2 sm:px-4 md:px-6 lg:px-0 pt-14 pb-14 sm:pt-16 md:pt-20 md:pb-0">
    <div class="flex justify-center py-1 absolute top-0 left-0 right-0 w-screen overflow-x-hidden">
      <menu-links />
    </div>
    <div class="w-full max-w-lg px-1">
      <div class="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full mx-auto shadow-lg mb-2 sm:mb-3 md:mb-4 overflow-hidden flex-shrink-0">
        <!-- <img class="w-40 h-40 rounded-full shadow" src="https://www.gravatar.com/avatar/708ff0173fd2695ef4ef92cbf98975c8?s=500"> -->
        <img class="object-cover object-center w-full h-full rounded-full shadow" src="/image.jpg" alt="Makeri Jerry Isuwa">
      </div>
      <h3 class="text-base sm:text-xl md:text-2xl lg:text-4xl font-extrabold leading-snug break-words mt-6 sm:mt-4">Hello, I am Makeri Jerry Isuwa</h3>
      <p class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mt-5 sm:mt-3 md:mt-4 break-words">A Fullstack Software Developer | AWS Cloud Engineer and IT Consultant</p>
      <p class="text-xs sm:text-sm md:text-sm lg:text-base text-gray-500 mt-5 sm:mt-3 md:mt-4 px-1 break-words">I don't just write code; I architect digital experiences that solve real-world problems. My passion lies in transforming complex ideas into elegant, user-centric software.</p>
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
