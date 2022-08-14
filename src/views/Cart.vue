<template name="cart">
  <div>
    <Header
      @showBrandList="showBrandList"
      @showCategoryList="showCategoryList"
    />
    <section>
      <div class="main">
        <div class="container">
          <div class="main__block">
            <div class="main__block_list">
              <brand-list v-if="listBrands" :brand_data="BRANDS" />
              <category v-if="listCategory" :category_data="CATEGORIES" />
            </div>
            <div class="basket-empty" v-if="!this.CART.length">
              <h1>Корзина пустая</h1>
            </div>
            <div class="main__block_basket" v-else>
              <div class="basket">
                <div class="basket__title" v-if="hideCarTop">
                  <h2 class="basket__title_title">{{ cart_title }}</h2>
                  <div class="basket__title_btns">
                    <a
                      href=""
                      class="basket__title_btns_btn"
                      @click="createOrders"
                      >Создать заказ</a
                    >
                  </div>
                </div>
                <div class="basket__title basket__title-order" v-if="showOrder">
                  <h2 class="basket__title_title">{{ order_title }}</h2>
                  <div class="basket__title_number">
                    № <span>2318567521</span>
                  </div>
                </div>
                <div class="filters__block_second filters__block_second-cart">
                  <div class="filters__block_second_top">
                    <ul class="filters__block_second_top_status">
                      <li class="filters__block_second_top_status_list code">
                        Код
                      </li>
                      <li class="filters__block_second_top_status_list product">
                        <span></span>Продукт
                      </li>
                      <li
                        class="filters__block_second_top_status_list"
                        v-for="item in status_list"
                        :key="item.id"
                      >
                        <span></span>{{ item.title }}
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="basket__list">
                  <cart-item
                    v-for="(item, index) in CART"
                    :key="item.id"
                    :cart_item="item"
                    @deleteFromCart="deleteFromCart(index)"
                    @decrement="decrement(index)"
                    @increment="increment(index)"
                  />
                  <div class="basket__list_all-price">
                    <p>Итого:</p>
                    <p>
                      {{ cartTotalCost | formattedPrice }}
                    </p>
                  </div>
                </div>
                <order-item v-if="showOrder" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/base/Header";
import Footer from "@/components/base/Footer";
import category from "@/components/home/category/category";
import brandList from "@/components/home/brands/brand-list.vue";
import { mapGetters, mapActions } from "vuex";
import CartItem from "@/components/home/cart/cart-item.vue";
import formattedPrice from "@/filters/price-format";
import OrderItem from "../components/home/cart/order-item.vue";
export default {
  name: "cart",
  components: {
    Header,
    Footer,
    category,
    brandList,
    CartItem,
    OrderItem,
  },
  data() {
    return {
      listCategory: false,
      listBrands: true,
      cart_title: "Корзина",
      order_title: "Подтвердить заказ",
      status_list: [
        { id: 1, title: "Гарантия" },
        { id: 2, title: "Наличие" },
        { id: 3, title: "Цена (UAH)" },
        { id: 4, title: "Кол-во" },
        { id: 5, title: "Удалить" },
      ],
      showOrder: false,
      hideCarTop: true,
    };
  },
  filters: {
    formattedPrice,
  },
  created() {},
  computed: {
    ...mapGetters(["BRANDS", "CATEGORIES", "CART"]),
    cartTotalCost() {
      let result = [];

      if (this.CART.length) {
        for (let item of this.CART) {
          result.push(item.get_actual_vendor_price * item.quantity);
        }

        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
      "CLEAR_ALL_IN_CART",
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    //nav list
    showBrandList() {
      this.listBrands = !this.listBrands;
      this.listCategory = false;
    },
    showCategoryList() {
      this.listCategory = !this.listCategory;
      this.listBrands = false;
    },
    createOrders(e) {
      e.preventDefault();
      this.showOrder = true;
      this.hideCarTop = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
