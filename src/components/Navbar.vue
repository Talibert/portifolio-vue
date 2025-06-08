<template>
  <header class="header" :class="{ hidden: isHidden }">
    <nav class="header-buttons">
      <NavButton v-for="item in menus" :key="item.id" :item="item" />
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import NavButton from "@/components/NavButton.vue";

const menus = [
  { id: 1, nome: "Início", path: "beginning"},
  { id: 3, nome: "Carreira", path: "career"},
  { id: 3, nome: "Estudos", path: "section3"},
  { id: 3, nome: "Projetos", path: "section3"},
  { id: 3, nome: "Contato", path: "section3"},
]

const isHidden = ref(false)
let lastScroll = window.scrollY

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
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center; /* centraliza tudo */
  padding: 0 30px;
  background: rgba(18, 18, 18, 0.85);
  backdrop-filter: saturate(180%) blur(12px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
  transition: transform 0.3s ease-in-out, background-color 0.3s ease;
  z-index: 1000;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.header-logo img {
  height: 50px;
  user-select: none;
}

.header-buttons {
  display: flex;
  gap: 50px;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
}

.hidden {
  transform: translateY(-110%);
}

@media (max-width: 600px) {
  .header {
    padding: 0 15px;
  }
  .header-buttons {
    gap: 15px;
  }
}
</style>
