<template>
  <div class="photo-container">
    <img src="@/assets/images/profile.jpg" alt="Guilherme Taliberti" class="photo" />
  </div>
</template>

<style scoped>
.photo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.photo {
  width: 40vw;
  height: 40vh;
  object-fit: cover;
  clip-path: polygon(
      10% 0%, 90% 0%, 100% 30%, 90% 100%, 10% 100%, 0% 70%
  );
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
}

.photo:hover {
  transform: scale(1.05);
}
</style>
