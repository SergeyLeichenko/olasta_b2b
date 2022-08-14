<template>
  <div class="container_widg">
    <div class="widg-prod">
      <div class="widg-prod__in-stock">
        <p
          class="widg-prod__in-stock_in grey"
          v-if="product_data.status === 'Ready to ship'"
        >
          готов к отправке
        </p>
        <p
          class="widg-prod__in-stock_in blue"
          v-if="product_data.status === 'In stock'"
        >
          в наличии
        </p>
        <p
          class="widg-prod__in-stock_in pink"
          v-if="product_data.status === 'Ends'"
        >
          заканчивается
        </p>
        <p
          class="widg-prod__in-stock_in green"
          v-if="product_data.status === 'Under the order'"
        >
          под заказ
        </p>
        <p
          class="widg-prod__in-stock_in red"
          v-if="product_data.status === 'Not In Stock'"
        >
          нет в наличии
        </p>
      </div>
      <div class="widg-prod__img">
        <router-link
          :to="{ name: 'product', params: { slug: product_data.slug } }"
        >
          <img :src="product_data.image" alt="images" />
        </router-link>
      </div>
      <div class="widg-prod__title">
        <router-link
          :to="{ name: 'product', params: { slug: product_data.slug } }"
        >
          <p>{{ product_data.title }}</p>
        </router-link>
      </div>
      <div class="widg-prod__new-price">
        <p class="new-price">
          <span
            >{{
              product_data.get_actual_vendor_price | formattedPrice
            }}
            UAH</span
          >
          <span class="retail-price"
            >розн.{{ product_data.retail_price | formattedPrice }} UAH</span
          >
        </p>
        <div class="cart" @click="addToCart()">
          <button class="cart-icon">
            <i class="fas fa-shopping-bag"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formattedPrice from "@/filters/price-format";
export default {
  name: "catalog-item",
  components: {},
  props: {
    product_data: {
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
  filters: {
    formattedPrice,
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
  mounted() {
    this.$set(this.product_data, "quantity", 1);
    this.$set(this.product_data, "product", this.product_data.id);
  },
};
</script>

<style lang="scss" scoped></style>
