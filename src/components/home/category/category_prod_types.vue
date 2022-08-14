<template name="category-prod-types">
  <div>
    <div class="product-types">
      <a
        :href="$router.resolve(`/products/${category_types_data.slug}`).href"
        >{{ category_types_data.name }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "category-prod-types",
  props: {
    category_types_data: {
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
  methods: {},
};
</script>

<style lang="scss" scoped></style>
