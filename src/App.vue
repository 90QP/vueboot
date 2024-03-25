<template>
  <div>
    <TheHeader></TheHeader>
    <TheView style="min-height: calc(100vh - 192px);"></TheView>
    <Footer></Footer>
  </div>
</template>

<script setup>
import TheView from '@/layouts/TheView.vue';
import TheHeader from './layouts/TheHeader.vue';
import Footer from '@/components/Footer.vue';


</script>

<style lang="scss" scoped>

</style>