<template>
  <div class="intro">
    <div class="intro-content">
      <h1 class="name">Guilherme Taliberti</h1>
      <h2 class="work">Desenvolvedor Fullstack</h2>
      <p class="about-me">
        Programador Java que curte escrever código limpo, resolver problemas e aprender algo novo todo dia.
      </p>
    </div>
  </div>
</template>

<style scoped>
.intro {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 40px;
  font-family: 'Inter', sans-serif;
  color: white;
  box-sizing: border-box;
}

.intro-content {
  max-width: 500px;
}

.name {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.work {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #1e90ff;
  font-style: italic;
}

.about-me {
  font-size: 1rem;
  line-height: 1.6;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  font-style: italic;
}
</style>
