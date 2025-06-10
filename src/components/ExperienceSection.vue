<template>
  <MotionDiv
    :whileHover="{ scale: 1.15}"
    :whilePress="{ scale: 0.95}"
  >
    <div class="content">
      <h3 class="title">{{ title }}</h3>
      <p class="description">{{ description }}</p>
    </div>
  </MotionDiv>
</template>

<script setup lang="ts">
import {motion} from "motion-v";

const MotionDiv = motion.div;

const props = defineProps<{
  title: string
  description: string
  align: 'left' | 'right'
  current?: boolean
}>()


</script>



<style scoped>
.observer-wrapper {
  min-height: 100px;
}

.block {
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: 40px;
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
}

.block.left .content {
  border-left: none;
  border-right: 5px solid #1e90ff;
}

.block.current .content {
  border-color: #ff4c4c;
  transform: scale(1.05);
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
