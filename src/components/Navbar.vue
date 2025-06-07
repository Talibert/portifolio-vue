<template>
  <header class="header" :class="{ hidden: isHidden }">
    <div class="header-title">
      <HeaderWelcome/>
    </div>
    <div class="header-buttons">
      <NavButton v-for="item in menus" :key="item.id" :item="item"/>
    </div>
  </header>
</template>

<script setup lang="ts">

import { ref, onMounted, onUnmounted } from 'vue'
import HeaderWelcome from "./HeaderWelcome.vue";
import NavButton from "@/components/NavButton.vue";

/**
 * itens do menu
 */
const menus = [
  { id: 1, nome: "Home", path: "section1"},
  { id: 2, nome: "About", path: "section2"},
  { id: 2, nome: "Login", path: "id3"}
]

/**
 * Comportamento da navbar quando o usuário faz o scroll
 */
const isHidden = ref(false)
let lastScroll = window.scrollY

/**
 * Sempre que o scroll ocorre, a função compara a posição atual com a ultima
 * Assim ela sabe dizer se o usuário foi para cima ou para baixo
 */
const handleScroll = () => {
  const currentScroll = window.scrollY
  isHidden.value = currentScroll > lastScroll && currentScroll > 100
  lastScroll = currentScroll
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #121212;
  padding: 0 20px;
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
}

.header-title{
  margin-right: auto;
}

.header-buttons {
  display: flex;;
  padding: 15px;
  gap: 20px;
}

.hidden {
  transform: translateY(-100%);
}
</style>
