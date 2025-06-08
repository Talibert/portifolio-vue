<template>
  <div class="intro">
    <div class="intro-content">
      <h1 class="name">Guilherme Taliberti</h1>
      <h2 class="work">Desenvolvedor Fullstack</h2>
      <p class="about-me">
        <span class="invisible-placeholder">{{aboutMeText}}</span>
        <span>{{ displayedText }}</span>
        <span class="cursor" />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTypingEffect } from '@/composables/useTypingEffect'

const aboutMeText = "Programador Java que curte escrever código limpo, resolver problemas e aprender algo novo todo dia.";

const { displayedText } = useTypingEffect(
    aboutMeText,
    1500,
    50,
    30,
    true
)

</script>

<style scoped>
.intro {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 40px;
  font-family: 'Inter', sans-serif;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.intro:hover {
  transform: scale(1.05);
}

.intro-content {
  max-width: 500px;
}

.name {
  font-size: 3rem;
  margin-bottom: 10px;
  font-weight: bold;
  color: #f1f1f1;
  text-align: right;
}

.work {
  font-size: 1.6rem;
  margin-bottom: 20px;
  color: #1e90ff;
  font-style: italic;
  text-align: right;
}

.about-me {
  font-size: 1.1rem;
  line-height: 1.6;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  color: #cccccc;
  min-height: 3.5em;
  white-space: normal; /* ✅ PERMITE QUEBRAS DE LINHA */
  overflow: hidden;
  position: relative;
  text-align: right;
}

.cursor {
  width: 2px;
  height: 1.1em;
  background-color: #1e90ff;
  display: inline-block;
  animation: blink 0.8s infinite;
  margin-left: 2px;
}

@keyframes blink {
  0%, 100% { opacity: 1 }
  50% { opacity: 0 }
}
</style>
