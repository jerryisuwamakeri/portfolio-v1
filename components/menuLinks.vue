<template>
	<ul class="flex flex-nowrap gap-1 sm:gap-3 px-2">
	  <li class="font-bold text-gray-600 text-xs uppercase hover:text-gray-800 whitespace-nowrap">
	  	<nuxt-link :to="{'name': 'index'}">
	  		Home
	  	</nuxt-link>
	  </li>
	  <li class="font-bold text-gray-600 text-xs uppercase hover:text-gray-800 whitespace-nowrap">
	  	<nuxt-link :to="{'name': 'about'}">
	  		About
	  	</nuxt-link>
	  </li>
	  <li class="font-bold text-gray-600 text-xs uppercase hover:text-gray-800 whitespace-nowrap">
	  	<nuxt-link :to="{'name': 'work'}">
	  		Work
	  	</nuxt-link>
	  </li>
	  <li class="font-bold text-gray-600 text-xs uppercase hover:text-gray-800 whitespace-nowrap">
	  	<nuxt-link :to="{'name': 'contact'}">
	  		Contact
	  	</nuxt-link>
	  </li>
	</ul>
</template>