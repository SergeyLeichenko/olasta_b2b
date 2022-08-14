<template>
  <div class="nav-mobile">
    <ul class="top-nav__menu">
      <router-link tag="li" to="" class="top-nav__menu_list_link">
        <a href=""><span>|</span>Специальная цена</a>
      </router-link>
      <router-link
        tag="li"
        :to="{ name: 'orders' }"
        class="top-nav__menu_list_link"
      >
        <a href=""><span>|</span>История заказов</a>
      </router-link>
      <div class="top-nav__menu_lang">
        <span>|</span>
        <a class="ua" href="#">UA</a>
        <a href="#">RU</a>
        <!-- <a href="#">EN</a> -->
        <span class="lang-border">|</span>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "nav-mobile",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
