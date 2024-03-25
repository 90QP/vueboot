<template>
  <div class="py-5 my-0 my-lg-5">
    <section>
      <div class="container-xl">
        <div class="gallery-text text-center">
          <h2 class="d-inline-block page-title mb-4">Contact</h2>
          <p class="d-none d-md-block mb-5">
            구글 맵에서 원하는 지역 검색 후 공유 > 지도 퍼가기
          </p>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.6792554798403!2d126.76367587934571!3d37.6567441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c8541726f44d1%3A0xe2a7cae3a3b21eed!2z7J287IKw7Zi47IiY6rO17JuQ!5e0!3m2!1sko!2skr!4v1711332877989!5m2!1sko!2skr" width="100%" height="500" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="col-lg-6 mt-3 mt-lg-0">
            <form @submit.prevent="reset"> <!--클릭 했을 때 새로고침 되는 걸 막음-->
              <div class="mb-2">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@address.com" v-model="contactInfo.email">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Your password must be 8-20 characters long. " maxlength="20" v-model="contactInfo.password">
              </div>
              <select class="form-select mb-3" aria-label="Default select example" v-model="contactInfo.select">
                <option value="" selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write here" v-model="contactInfo.message"></textarea>
              </div>
              <div class="form-check form-switch mb-4">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="contactInfo.checked">
                <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
              </div>
              <div class="text-end">
                <button type="submit" class="btn btn-danger px-4">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const reset = ()=>{
  contactInfo.email = ""
  contactInfo.password = ""
  contactInfo.message = ""
  contactInfo.select = ""
  contactInfo.checked = false
}
let contactInfo = reactive({
  email:'',
  password:'',
  message:'',
  select:'',
  checked:false
})

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

textarea {
  resize: none;
}

input::placeholder, textarea::placeholder {
  font-size:14px;
  color:#aaa
}

</style>