<script setup lang="ts">
import Poll from './components/Poll.vue'
import VzyIcon from './components/icons/VzyIcon.vue'
import GithubButton from './components/GithubButton.vue'
</script>

<template>
  <header>
    <div class="menu">
      <div class="logo"><VzyIcon /> Tech Assessment</div>
      <GithubButton href="" />
    </div>
  </header>

  <main>
    <Poll />
  </main>
</template>

<style scoped>
header {
  width: 100%;
  padding: 50px 8px;
}

.logo {
  display: flex;
  height: 20px;
  font-size: 24px;
  line-height: 0.6;
  font-size: 16px;
}

.menu {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  .menu {
    width: 100%;
    height: px;
    display: flex;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
