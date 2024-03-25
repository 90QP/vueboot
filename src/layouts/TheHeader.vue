<template>
  <nav class="navbar navbar-expand-lg bg-white shadow-sm" aria-label="Offcanvas navbar large">
    <div class="container-fluid container-xl">
      <Title></Title>

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title bungee-regular" id="offcanvasNavbar2Label">
            WELCOME
            <Title></Title>
          </h5>
          <button type="button" class="btn-close btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div class="offcanvas-body">
          <ul class="navbar-nav">
            <li v-for="(menu, idx) in menus" class="nav-item" :key="idx">
              <RouterLink class="nav-link" aria-current="page" :to="menu.route">{{ menu.title }}</RouterLink>
            </li>
          </ul>
          <!--form 있던 자리-->
        </div>
      </div> <!-- offcanvas END -->

      <div class="icons d-none d-sm-flex column-gap-2 column-gap-lg-4 me-2 me-lg-0">
        <RouterLink to="/"><i class="bi bi-person-circle"></i></RouterLink>
        <RouterLink to="/"><i class="bi bi-bell-fill"></i></RouterLink>
        <RouterLink to="/"><i class="bi bi-plus-circle-fill"></i></RouterLink>
      </div>

      <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

    </div>
  </nav>


</template>

<script setup>
import Title from '@/components/Title.vue';


// 배열 객체 생성
const menus = [
  { route: "/", title : "Home" },
  { route: "/about", title : "About" },
  { route: "/portfolio", title : "Portfolio" },
  { route: "/gallery", title : "Gallery" },
  { route: "/contact", title : "Contact" },
]


</script>

<style lang="scss" scoped>
.navbar-toggler:focus {
  box-shadow: none;
}

.icons a {
  color:var(--bs-gray-800);

  &:hover {
    color:var(--bs-danger)
  }
}


.nav-item {
  margin: 0 3px;
  .nav-link {
    font-weight: 600;
    text-transform: uppercase;

    &:hover, &.router-link-exact-active {
      font-weight: 800;
      color: var(--bs-danger);
    }
  }

  @media (max-width:992px){
    font-size: 22px;
  }
}
</style>