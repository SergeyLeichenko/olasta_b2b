<template name="cart-item">
  <div class="cart-item-list">
    <div class="cart-item-list__prod">{{ cart_item.id }}</div>
    <div class="cart-item-list__prod">
      {{ cart_item.title }}
    </div>
    <div class="cart-item-list__prod">12</div>
    <div class="cart-item-list__prod" v-if="cart_item.status === 'In stock'">
      да
    </div>
    <div
      class="cart-item-list__prod"
      v-if="cart_item.status === 'Not In Stock'"
    >
      нет
    </div>
    <div class="cart-item-list__prod">
      {{ cart_item.get_actual_vendor_price | formattedPrice }}
    </div>
    <div class="cart-item-list__quantity">
      <button class="cart-item-list__quantity minus" @click="decrementItem">
        -
      </button>
      <p class="cart-item-list__quantity_number">{{ cart_item.quantity }}</p>
      <button class="cart-item-list__quantity minus" @click="incrementItem">
        +
      </button>
    </div>
    <div class="cart-item-list__delete" @click="deleteFromCart">
      <i class="fas fa-trash-alt"></i>
    </div>
  </div>
</template>

<script>
import formattedPrice from "@/filters/price-format";
export default {
  name: "cart-item",
  props: {
    cart_item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    formattedPrice,
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    decrementItem() {
      this.$emit("decrement");
    },
    incrementItem() {
      this.$emit("increment");
    },
  },
};
</script>

<style lang="scss" scoped></style>
