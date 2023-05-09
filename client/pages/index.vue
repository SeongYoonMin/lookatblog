<script setup lang="ts">
useNuxtApp();
</script>

<template>
  <section id="home">
    <ClientOnly>
      <Swiper>
        <SwiperSlide>
          <picture><img src="~/assets/images/jpg/1.jpg" alt="메인 1번 사진"></picture>
        </SwiperSlide>
        <SwiperSlide>
          <picture><img src="~/assets/images/jpg/2.jpg" alt="메인 2번 사진"></picture>
        </SwiperSlide>
      </Swiper>
    </ClientOnly>
  </section>
</template>

<style lang="scss" scoped>
#home {
  box-sizing: border-box;
}
</style>
