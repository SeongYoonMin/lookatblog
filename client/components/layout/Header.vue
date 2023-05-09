<script setup lang="ts">
const windowY = ref<number>(0);
const headers = ref<HTMLElement | null>(null);
onMounted(() => {
  headers.value = document.getElementById("header");
  window.addEventListener("scroll", function () {
    windowY.value = window.scrollY;
  });
});

watch(windowY, (y) => {
  if(y > 10) {
    headers.value?.classList.add("on");
  } else {
    headers.value?.classList.remove("on");
  }
});
</script>

<template>
  <header id="header">
    <NuxtLink to="/">HOME</NuxtLink>
    <nav class="menu">
      <NuxtLink :to="menu.path" v-for="menu in setMenus()">{{
        menu.name
      }}</NuxtLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
#header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: .4s all;
  background-color: transparent;

  &.on {
    background-color: white;
  }

  a {
    text-decoration: none;
  }

  .menu {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 12px;
  }
}
</style>
