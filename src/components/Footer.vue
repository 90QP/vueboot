<template>
  <div class="border-top bg-secondary-subtle py-4">
    <div class="container-xl">
      <footer class="d-flex justify-content-between align-items-center">
        <div class="">
          <Title v-on:click="$router.push('/')" style="filter: grayscale(1); font-size: 1.2rem;"></Title>
        </div>
        <ul class="nav fs-4 d-none d-sm-flex">
          <li v-for="sns in icons" class="nav-item ms-3 ">
            <RouterLink to="">
              <i class="bi text-secondary-emphasis" :class="sns"></i>
            </RouterLink>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script setup>
import Title from './Title.vue'

const icons = [
  'bi-facebook',
  'bi-twitter-x',
  'bi-instagram',
  'bi-tiktok'
]
</script>

<style lang="scss" scoped>
</style>