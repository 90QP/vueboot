<template>
  <div class="py-5 my-0 my-lg-5">
    <section>
      <div class="container-xl">
        <div class="gallery-text text-center">
          <h2 class="d-inline-block page-title mb-4">gallery</h2>
          <p class="d-none d-md-block mb-5">
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus mauris ex, commodo a erat ac.
          </p>
        </div>

        <section class="gallery-wrap border p-3">
          <div class="row row-gap-4">
            <div class="col-6 col-md-4 col-xl-3" v-for="n in 20">
              <img 
                class="ratio ratio-1x1 object-fit-cover" 
                :src="`https://picsum.photos/id/${150 + n}/500/300`" 
                :lazy-src="`https://picsum.photos/id/${150 + n}/10/6`" 
                alt="" >
            </div>            
          </div>
        </section>
      </div>   
    </section>  
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .page-title {
  &::after {
    display: block;
    content: "";
    margin:10px 90px;
    width: 100px;
    height: 8px;
    background-color: #212529;
  }
}

</style>