<template>
  <button class="header-button" @click="scrollTo(item.path)">
    {{ item.nome }}
  </button>
</template>

<script setup lang="ts">

defineProps<{
  item: {
    id: number,
    nome: string,
    path: string }
}>()

/**
 * Vai receber o id do elemento, recuperar e fazer o scroll até ele
 * @param id
 */
function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

</script>

<style scoped>
.header-button {
  background-color: #973526;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
}
.header-button:hover {
  background-color: #458ea0;
}
</style>
