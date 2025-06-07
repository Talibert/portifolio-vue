<template>
  <button class="header-button" @click="scrollTo(item.path)">
    {{ item.nome }}
    <span class="underline"></span>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  item: {
    id: number,
    nome: string,
    path: string
  }
}>()

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style scoped>
.header-button {
  position: relative;
  background: transparent;
  color: #ccc;
  border: none;
  font-size: 20px;
  padding: 10px 0;
  cursor: pointer;
  user-select: none;
  transition: color 0.3s ease;
}

.header-button:hover {
  color: #1e90ff; /* azul vibrante */
}

.header-button .underline {
  position: absolute;
  bottom: 0;
  left: 10%;
  width: 80%;
  height: 2px;
  background: #1e90ff;
  transform: scaleX(0);
  transition: transform 0.3s ease;
  transform-origin: left;
}

.header-button:hover .underline {
  transform: scaleX(1);
}
</style>
