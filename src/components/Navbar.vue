<template>
  <header class="header">
    <div class="header-title">
      <HeaderWelcome/>
    </div>
    <div class="header-buttons">
      <NavButton v-for="item in menus" :key="item.id" :item="item"/>
    </div>
  </header>
</template>

<script setup lang="ts">

const menus = [
  { id: 1, nome: "Home", path: "/"},
  { id: 2, nome: "About", path: "/about"},
  { id: 2, nome: "Login", path: "/login"}
]

// Importação dos componentes filhos
import NavButton from "./NavButton.vue";
import HeaderWelcome from "./HeaderWelcome.vue";

</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fbb8a6;
  padding: 0 20px;
  height: 80px;
}

.header-title{
  margin-right: auto;
}

.header-buttons {
  display: flex;;
  padding: 15px;
  gap: 20px;
}
</style>
