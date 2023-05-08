<script setup lang='ts'>

</script>

<template>
  <header id="header">
    <NuxtLink to="/">HOME</NuxtLink>
    <nav class="menu">
      <NuxtLink :to="menu.path" v-for="menu in setMenus()">{{ menu.name }}</NuxtLink>
    </nav>
  </header>
</template>

<style lang='scss' scoped>
#header {
  position: sticky;
  top: 0;
  left: 0;
  padding: 12px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ededed;
  
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