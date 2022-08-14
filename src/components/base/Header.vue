<template>
  <div>
    <header class="block-header">
      <div class="container">
        <div class="top-nav">
          <div class="top-nav__logo">
            <router-link :to="{ name: 'home' }">
              <img src="@/assets/images/logo.svg" alt="OLASTA" />
            </router-link>
          </div>
          <nav-bar />
          <div class="top-nav__burger" @click="showNav">
            <i class="fas fa-bars"></i>
          </div>
          <nav-bar-mobile v-if="mobileView" />
        </div>
      </div>
    </header>

    <section class="block-header-second">
      <div class="container">
        <div class="top-nav-second">
          <div class="top-nav-second__block">
            <nav class="top-nav-second__block_nav">
              <ul class="top-nav-second__block_nav_list">
                <li
                  class="top-nav-second__block_nav_list_item"
                  @click="showBrandList"
                >
                  <a href="#">Бренды</a>
                </li>
                <li
                  class="top-nav-second__block_nav_list_item"
                  @click="showCategoryList"
                >
                  <a href="#">Категории</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="top-nav-second__block_search">
            <input type="text" class="search" placeholder="Найти..." />
            <img
              class="search-icon"
              src="@/assets/images/search.svg"
              alt="search"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from "./nav-bar";
import NavBarMobile from "./nav-bar-mobile";
export default {
  components: {
    NavBar,
    NavBarMobile,
  },
  name: "block-header",
  component: {
    NavBar,
    NavBarMobile,
  },
  data() {
    return {
      mobileView: false,
    };
  },
  methods: {
    showNav() {
      this.mobileView = !this.mobileView;
    },
    showBrandList() {
      this.$emit("showBrandList");
    },
    showCategoryList() {
      this.$emit("showCategoryList");
    },
  },
};
</script>

<style lang="scss" scoped></style>
