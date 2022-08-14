<template name="brand-item">
  <div>
    <div class="catalog__list_item">
      <a
        :href="$router.resolve(`/products/brand/${brand_item_data.slug}`).href"
        >{{ brand_item_data.name }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "brand-item",
  props: {
    brand_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      slug: this.$route.params["slug"],
    };
  },
};
</script>

<style lang="scss" scoped></style>
