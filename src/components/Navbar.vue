<template>
  <header class="header">
    <div class="header-title">
      <HeaderWelcome/>
    </div>
    <div class="header-buttons">
      <NavButtonScroll v-for="item in menus" :key="item.id" :item="item"/>
    </div>
  </header>
</template>

<script setup lang="ts">

import NavButtonScroll from "@/components/NavButtonScroll.vue";

const menus = [
  { id: 1, nome: "Home", path: "id1"},
  { id: 2, nome: "About", path: "id2"},
  { id: 2, nome: "Login", path: "id3"}
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
