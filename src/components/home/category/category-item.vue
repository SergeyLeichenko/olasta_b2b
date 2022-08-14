<template name="category-item">
  <div>
    <router-link to="" tag="li" class="catalog__list_item">
      <div
        class="catalog__list_item_plus"
        @click="hideProductTypes = !hideProductTypes"
      >
        <p class="icon-plus">{{ btnText }}</p>
        <a href="#">{{ category_item_data.name }}</a>
      </div>
      <ul class="catalog__list_item_types" v-if="hideProductTypes">
        <category-prod-types
          v-for="(item, i) in category_item_data.product_types"
          :key="i"
          :category_types_data="item"
        />
      </ul>
    </router-link>
  </div>
</template>

<script>
import categoryProdTypes from "./category_prod_types.vue";
export default {
  name: "category-item",
  props: {
    category_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    categoryProdTypes,
  },
  data() {
    return {
      hideProductTypes: false,
    };
  },
  computed: {
    btnText() {
      if (this.hideProductTypes) {
        return "-";
      }
      return "+";
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
