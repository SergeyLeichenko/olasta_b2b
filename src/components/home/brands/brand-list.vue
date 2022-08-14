<template name="catalog-list">
  <div>
    <div class="catalog catalog-des">
      <ul class="catalog__list">
        <barnd-list-item
          v-for="item in brand_data"
          :key="item.id"
          :brand_item_data="item"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import barndListItem from "./barnd-list-item.vue";
export default {
  components: { barndListItem },
  name: "catalog-list",
  props: {
    brand_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    ...mapActions(["GET_BRANDS_FROM_API"]),
  },
  mounted() {
    this.GET_BRANDS_FROM_API().then((response) => {
      if (response.data) {
        // console.log("brands");
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
