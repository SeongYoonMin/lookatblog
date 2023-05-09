import {Swiper, SwiperSlide} from "swiper/vue";
import { Controller } from "swiper"

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('Swiper', Swiper);
  nuxtApp.vueApp.component('SwiperSlide', SwiperSlide);

  return {
    provide: {
      swiper: {
        controller: Controller,
      }
    }
  }
})