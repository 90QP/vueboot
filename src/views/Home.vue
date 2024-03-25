<template>
  <div class="py-5 my-0 my-lg-5">
    <section>
      <div class="container-xl">
        <div class="row">
          <div class="col-lg-6 ">
            <h2 class="intro-text">
              Welcome<br>
              <span class="text-danger">VUE-<br>BOOTSTRAP</span><br>
              <strong>Agency</strong>
            </h2>
            <p class="mt-4 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis risus sit amet laoreet ornare. Proin cursus mauris nec ultricies faucibus. Fusce et laoreet mi, eget condimentum odio. Nullam aliquet pulvinar leo, eget iaculis mauris consectetur at. Sed nunc tortor, vehicula ac felis vitae, lacinia semper augue.
            </p>
            <div class="">
              <a @click="$router.push('about')" class="btn btn-danger me-2 px-4">About US</a>
              <a @click="$router.replace('portfolio')" class="btn btn-secondary px-4">Portfolio</a>
              <!-- 
                프로그래밍 방식
                $router.push('about')    -히스토리 스택에 추가
                $router.replace('portfolio')   -히스토리 스택에 추가 ❌ (단순 페이지 전환)
                $router.go(-1)               -한단계 이전 페이지로 가기
              -->
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-center justify-content-center  mt-5 mt-lg-0">
            <img src="@/assert/gate.png" alt="" class="homeImg w-100">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .intro-text {
    font-family: "Bungee", sans-serif;
    font-size: 2rem;
    line-height: 1.2;

    span {
      font-size: 3rem;
      font-family: "Bungee", sans-serif;
    }

    strong {
      font-family: "Bungee", sans-serif;
      font-size: 2.8rem;
    }

    &::after {
      display: block;
      content: "";
      margin-top:10px;
      width: 100px;
      height: 8px;
      background-color: #212529;
    }
  }

  .homeImg {
    @media (max-width:992px){
      width: 75% !important;
    }

  }
</style>