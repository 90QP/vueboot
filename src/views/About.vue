<template>
  <div class="py-5 my-0 my-lg-5">
    <section>
      <div class="container-xl">
        <div class="row">
          <div class="col-lg-5 d-flex align-items-center justify-content-center mb-4 mb-lg-0">
            <img class="aboutImg w-100" src="./../assert/about.png" alt="" >
          </div>
          <div class="col-lg-7">
            <h2 class="about-text page-title">
              About us
            </h2>
            <p class="mt-4 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis risus sit amet laoreet ornare. Proin cursus mauris nec ultricies faucibus.</p>
            <article>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><i class="bi bi-check-lg text-success me-2"></i>An Item</li>
                <li class="list-group-item"><i class="bi bi-check-lg text-success me-2"></i>A second item</li>
                <li class="list-group-item"><i class="bi bi-check-lg text-success me-2"></i>A third item</li>
              </ul>
              <p class="mt-4 text-secondary fs-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br> Praesent mattis risus sit amet<br> laoreet ornare. Proin cursus mauris nec ultricies faucibus.Lorem ipsum dolor sit amet,<br> consectetur adipiscing elit.<br> Praesent mattis risus sit amet laoreet ornare. Proin cursus mauris nec ultricies faucibus.
              </p>
            </article>
          </div>


        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .aboutImg {
    @media (max-width:992px){
      width: 75% !important;
    }

  }
</style>