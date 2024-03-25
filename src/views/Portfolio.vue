<template>
  <div class="py-5 my-0 my-lg-5">
    <section>
      <div class="container-xl">

          <div class="text-center">
            <h2 class="portfolio-text about-text page-title d-inline-block mb-3">Portfolio</h2>
            <p class="mb-4 d-none d-md-block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis risus sit amet laoreet ornare.
            </p>
          </div>

          <section class="portfolio-tab">
            <div class="text-center">
              <button 
                class="btn mx-1 mx-lg-2"
                @click="activePf = 'mobileApp'" 
                :class="activePf === 'mobileApp' ? 'btn-danger' : 'btn-outline-secondary' "
              >Mobile App</button>
              <button 
                class="btn mx-1 mx-lg-2"
                @click="activePf = 'resWeb'" 
                :class="activePf === 'resWeb' ? 'btn-danger' : 'btn-outline-secondary' "
              >Responsive Web</button>
              <button 
                class="btn mx-1 mx-lg-2"
                @click="activePf = 'frontWeb'" 
                :class="activePf === 'frontWeb' ? 'btn-danger' : 'btn-outline-secondary' "
              >Frontend Web</button>
            </div>
          </section>

          <div class="my-5">
            <div class="row row-gap-3">

              <!-- slot을 이용하여 if구문 사용. (div나 template로 해도 상관없음)-->
              <slot v-if="activePf === 'mobileApp'">
                <div class="col-sm-6 col-md-4 col-xxl-3" 
                  v-for="(item, moIdx) in mobileApps" :key="moIdx">
                  <div class="card">
                    <div class="card_img_wrap">
                      <img :src="item.image" class="card-img-top" alt="image">
                      <div class="card-img-overlay"></div>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">{{ item.title }}</h5>
                      <p class="card-text">Some quick example text to build on the card's content.</p>
                    </div>
                  </div>
                </div>
              </slot>

              <slot v-if="activePf === 'resWeb'">
                <div class="col-sm-6 col-md-4 col-xxl-3" 
                  v-for="(item, Idx) in resWebs" :key="Idx">
                  <div class="card">
                    <div class="card_img_wrap">
                      <img :src="item.image" class="card-img-top" alt="image">
                      <div class="card-img-overlay"></div>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">{{ item.title }}</h5>
                      <p class="card-text">Some quick example text to build on the card's content.</p>
                    </div>
                  </div>
                </div>
              </slot>

              <slot v-if="activePf === 'frontWeb'">
                <div class="col-sm-6 col-md-4 col-xxl-3" 
                  v-for="(item, Idx) in frontWebs" :key="Idx">
                  <div class="card">
                    <div class="card_img_wrap">
                      <img :src="item.image" class="card-img-top" alt="image">
                      <div class="card-img-overlay"></div>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">{{ item.title }}</h5>
                      <p class="card-text">Some quick example text to build on the card's content.</p>
                    </div>
                  </div>
                </div>
              </slot>

            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

  const activePf = ref('mobileApp');

  const mobileAppimg = 'https://mobileapps.yourniche.com/images/iphone%20app%203d.png';
  const mobileApps = [
    { title: 'Mobile App 1', image: 'https://mobileapps.yourniche.com/images/iphone%20app%203d.png' },
    { title: 'Mobile App 2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSigFFJ5GliAZIS974ppmi_or26OimvDKJy0Q&usqp=CAU' },
    { title: 'Mobile App 3', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTbvrumCm7AhJ23kMoa_UxSebmjkyLo5mk3Q&usqp=CAU' },
    { title: 'Mobile App 4', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyMbOsEnEliNjCnceNZipX3jm0Mu0e7jdnvA&usqp=CAU' },
    { title: 'Mobile App 5', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCBzWXglfQnpodPI9bthIN85YISu5VO9mfow&usqp=CAU' },
    { title: 'Mobile App 6', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrXbixmGIgLmEZp503IZcxC7EjthmSz627dw&usqp=CAU' },
    { title: 'Mobile App 6', image: mobileAppimg },
  ]

  const resWebimg = 'https://www.webfx.com/wp-content/uploads/2021/10/iStock-612224522.jpg';
  const resWebs = [
    { title: 'Responsive Web 1', image: resWebimg },
    { title: 'Responsive Web 2', image: resWebimg },
    { title: 'Responsive Web 3', image: resWebimg },
    { title: 'Responsive Web 4', image: resWebimg },
    { title: 'Responsive Web 5', image: resWebimg },
    { title: 'Responsive Web 6', image: resWebimg },
    { title: 'Responsive Web 7', image: resWebimg },
    { title: 'Responsive Web 8', image: resWebimg },
    { title: 'Responsive Web 9', image: resWebimg },
    { title: 'Responsive Web 10', image: resWebimg },
  ]

  const frontWebimg = 'https://www.weblineindia.com/wp-content/uploads/2017/04/front-end-development-with-weblineindia-1.jpg';
  const frontWebs = [
    { title: 'Frontend Web 1', image: frontWebimg },
    { title: 'Frontend Web 2', image: frontWebimg },
    { title: 'Frontend Web 3', image: frontWebimg },
    { title: 'Frontend Web 4', image: frontWebimg },
    { title: 'Frontend Web 5', image: frontWebimg },
  ]
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

.portfolio-tab .btn {
  font-size: 15px;
}

.card-img-overlay {
  background: rgb(19,20,24);
  background: linear-gradient(180deg, rgba(61,58,58,0.7329306722689075) 0%, rgba(0,0,0,0) 23%);
  }

  .card_img_wrap {
    width: 100%;
    height: 0;
    padding-bottom: 70%;
    overflow: hidden;
  }

  .modal {
      --bs-modal-width: 70%;
      text-align: center;
  img {
      max-width:100%
    }
}

  @media (max-width:576px) {
    .btn { font-size: 14px; line-height: 1;
    }
  }

</style>