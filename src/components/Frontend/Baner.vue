<template>
  <div class="header-cta">
    <div class="container">
      <div class="row">
        <div class="entry-content">
          <p><span class="start-text"><b>From THE MARCH 7, 2014</b></span></p>
          <h4 class="entry-title"><a href="#">Organizing World class events</a></h4>
          <h5><span><b>Schrodinger confirms that Germany international ...</b></span></h5>
        </div>
      </div>
    </div>
  </div>

  <div class="header-bg">
    <div id="preloader">
      <div class="preloader"></div>
    </div>
    <div class="main-slider" id="main-slider">
      <ul class="slides">
        <li><img src="../../assets/forntend-layout/images/demo/bg-slide-01.jpg" alt="Slide 1" /></li>
        <li><img src="../../assets/forntend-layout/images/demo/bg-slide-02.jpg" alt="Slide 2" /></li>
      </ul>
    </div>
  </div>
</template>


<script setup>
defineOptions({ name: 'Baner' })

import { onMounted, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import imagesLoaded from 'imagesloaded'
import { loadStyle, loadScript } from '../../utils/loadExternal'

const route = useRoute()

// 🔁 স্লাইডার ইনিশিয়ালাইজ ফাংশন
const initSlider = async () => {
  await nextTick()

  imagesLoaded(document.querySelector('.main-slider'), () => {
    $('.main-slider').flexslider({
      noCSS: true,
      touch: false,
      controlNav: false,
      directionNav: false,
      animation: 'fade',
      start: function () {
        $('#preloader').addClass('ready')
      }
    })

    const container = $('.header-bg')
    function centerImage() {
      const imageWidth = container.find('img').width()
      const widthFix = imageWidth / 2
      container.find('img').css('margin-left', -widthFix)
    }
    $(window).on('load resize', centerImage)

    $('.flexslider').flexslider({
      noCSS: true,
      touch: false,
      directionNav: false,
      animation: 'fade'
    })
  })
}

// ✅ প্রথমবার লোডে
onMounted(async () => {
  
  await loadStyle('../../assets/forntend-layout/css/bootstrap.css')
  await loadStyle('../../assets/forntend-layout/css/style.css')
  await loadStyle('../../assets/forntend-layout/css/font-awesome.css')
  await loadStyle('../../assets/forntend-layout/css/owl.carousel.css')
  await loadStyle('../../assets/forntend-layout/css/flexslider.css')
  await loadStyle('../../assets/forntend-layout/css/fancySelect.css')
  await loadStyle('../../assets/forntend-layout/css/responsive.css')

  await loadScript('../../assets/forntend-layout/js/jquery-2.1.0.min.js')
  window.$ = window.jQuery = window.jQuery || $

  await loadScript('../../assets/forntend-layout/js/bootstrap.min.js')
  await loadScript('../../assets/forntend-layout/js/jquery.flexslider.js')
  await loadScript('../../assets/forntend-layout/js/owl.carousel.min.js')
  await loadScript('../../assets/forntend-layout/js/main.js')
  // 🔁 Init slider
  await initSlider()
})

// ✅ রাউট চেঞ্জ হলে আবার স্লাইডার ইনিশিয়াল
watch(route, async () => {
  await initSlider()
})
</script>



