<template>
  <ul class="number-items">
    <li v-if="currentPage > 1">
      <a href="#"><i class="fas fa-chevron-left"></i></a>
    </li>
    <li v-for="p in totalPages" :key="p" class="item">
      <button
        class="pagination-button"
        :class="{ active: currentPage === p }"
        @click="changePage(p)"
      >
        {{ p }}
      </button>
    </li>
    <li v-if="currentPage < totalPages">
      <a href="#"><i class="fas fa-chevron-right"></i></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Pagination",
  props: ["total", "item"],
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    totalPages() {
      if (
        // Number.isNaN(parseInt(this.total)) ||
        Number.isNaN(parseInt(this.item)) ||
        this.item <= 0
      ) {
        return 0;
      }
      return Math.ceil(this.total / 24);
    },
  },
  methods: {
    changePage(pageNumber) {
      this.currentPage = pageNumber;
      this.$emit("page-changed", pageNumber);
    },
  },
};
</script>

<style lang="scss" scoped>
.active {
  font-weight: 900;
  color: $white;
  background-color: $blue-hed;
}
</style>
