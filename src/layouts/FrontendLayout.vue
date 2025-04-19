<template>
   



   
		
			<NavBar/>

			
			
		

		       <router-view />
 

           


		
	

	


		<Footer/>
		











  </template>
 <script setup>
  


import { onMounted } from 'vue' 
   
import { loadStyle, loadScript } from '../utils/loadExternal'

import NavBar from '../components/Frontend/NavBar.vue'

import Footer from '../components/Frontend/Footer.vue'
import About from '../pages/Frontend/About.vue'
import Baner from '../components/Frontend/Baner.vue'
import Blog from '../pages/Frontend/Blog.vue'
import Contact from '../pages/Frontend/Contact.vue'
import Pricing from '../pages/Frontend/Pricing.vue'
import Schedule from '../pages/Frontend/Schedule.vue'
import Testimonial from '../pages/Frontend/testimonial.vue'


onMounted(async () => {
  // ✅ CSS
  await loadStyle('https://cdn.jsdelivr.net/npm/simple-datatables@7.1.2/dist/style.min.css')

  // ✅ JS
  





 await loadStyle('../assets/forntend-layout/css/bootstrap.css')
 await loadStyle('../assets/forntend-layout/css/style.css')
 await loadStyle('../assets/forntend-layout/css/font-awesome.css')
 await loadStyle('../assets/forntend-layout/css/owl.carousel.css')
 await loadStyle('../assets/forntend-layout/css/flexslider.css')
 await loadStyle('../assets/forntend-layout/css/fancySelect.css')
 await loadStyle('../assets/forntend-layout/css/responsive.css')


 await loadScript('https://maps.googleapis.com/maps/api/js?sensor=false')
  await loadScript('../assets/forntend-layout/js/jquery-2.1.0.min.js')
  window.$ = window.jQuery = window.jQuery || $;
  await loadScript('../assets/forntend-layout/js/bootstrap.min.js')
  await loadScript('../assets/forntend-layout/js/jquery.scrollTo.js')
  await loadScript('../assets/forntend-layout/js/jquery.nav.js')
  await loadScript('../assets/forntend-layout/js/jquery.flexslider.js')
  await loadScript('../assets/forntend-layout/js/jquery.accordion.js')
  await loadScript('../assets/forntend-layout/js/jquery.placeholder.js')
  await loadScript('../assets/forntend-layout/js/jquery.fitvids.js')
  await loadScript('../assets/forntend-layout/js/gmap3.js')
  await loadScript('../assets/forntend-layout/js/fancySelect.js')
  await loadScript('../assets/forntend-layout/js/owl.carousel.min.js')
  
  await loadScript('../assets/forntend-layout/js/main.js')
 










})



</script>
 
 <style scoped>



</style>
  