<template name="category">
  <div>
    <div class="catalog catalog-des">
      <ul class="catalog__list">
        <category-item
          v-for="item in category_data"
          :key="item.id"
          :category_item_data="item"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import categoryItem from "./category-item.vue";
export default {
  components: {
    categoryItem,
  },
  name: "category",
  props: {
    category_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions(["GET_CATEGORIES_FROM_API"]),
  },
  mounted() {
    this.GET_CATEGORIES_FROM_API().then((response) => {
      if (response.data) {
        // console.log("categories");
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
