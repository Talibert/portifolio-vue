<template>
  <div class="block" :class="[align, { current }]">
    <div class="content">
      <h3 class="title">{{ title }}</h3>
      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  align: 'left' | 'right'
  current?: boolean
}>()
</script>

<style scoped>
.block {
  display: flex;
  margin-bottom: 40px;
  width: 100%;
  justify-content: flex-start;
}

.block.right {
  justify-content: flex-end;
}

.content {
  max-width: 500px;
  padding: 20px;
  background-color: #1e1e1e;
  border-left: 5px solid #1e90ff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
}

.block.left .content {
  border-left: none;
  border-right: 5px solid #1e90ff;
}

.block.current .content {
  border-color: #ff4c4c;
  transform: scale(1.3);
}

.block.current .title {
  color: #ff4c4c;
}

.title {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #1e90ff;
}

.description {
  font-size: 1rem;
  color: #cccccc;
  line-height: 1.6;
}
</style>
