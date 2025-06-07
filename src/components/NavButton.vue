<template>
  <RouterLink :to="item.path">
    <button class="header-button">
      {{ item.nome }}
    </button>
  </RouterLink>
</template>

<script setup lang="ts">

defineProps<{
  item: {
    id: number,
    nome: string,
    path: string }
}>()

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
