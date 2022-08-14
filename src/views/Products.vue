<template name="b2b">
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
            <div class="main__block_card">
              <div class="new">
                <card-item
                  v-for="(item, i) in products"
                  :key="i"
                  :product_data="item"
                  @addToCart="addToCart"
                />
              </div>
            </div>
          </div>
          <div class="card_btn">
            <div class="card_btn_number">
              <pagination
                :total="total"
                :item="products.length"
                @page-changed="loadListProduct"
              />
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
import cardItem from "@/components/home/card/card-item";
import { mapActions, mapGetters } from "vuex";
import brandList from "../components/home/brands/brand-list.vue";
import pagination from "@/components/home/card/pagination.vue";
export default {
  name: "b2b",
  components: {
    Header,
    Footer,
    cardItem,
    category,
    brandList,
    pagination,
  },
  data() {
    return {
      news_title: "Новинки",
      leaders_title: "Популярные",
      action_title: "Акции",
      listCategory: false,
      listBrands: true,
      pages: 1,
      total: 0,
      products: [],
    };
  },
  computed: {
    ...mapGetters(["BRANDS", "CATEGORIES"]),
  },
  created() {
    this.loadListProduct(this.pages);
    this.loadListProductCategory(this.pages);
  },
  methods: {
    ...mapActions(["ADD_TO_CART"]),
    //nav list
    showBrandList() {
      this.listBrands = !this.listBrands;
      this.listCategory = false;
    },
    showCategoryList() {
      this.listCategory = !this.listCategory;
      this.listBrands = false;
    },
    //add to cart
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    //paginations and products list
    async loadListProduct(pageNumber) {
      this.$router
        .push({
          query: { pages: pageNumber },
        })
        .catch((err) => {
          if (
            err.name !== "NavigationDuplicated" &&
            !err.message.includes(
              "Avoided redundant navigation to current location"
            )
          );
        });
      this.products = await fetch(
        `https://sellpoint-b2b.herokuapp.com/products/brand/${this.$route.params.slug}?page=${pageNumber}`
      )
        .then((response) => response.json())
        .then((response) => {
          this.total = response.count;
          return response.results;
        });
    },
    //pagination and product category
    async loadListProductCategory(pageNumber) {
      this.$router
        .push({
          query: { pages: pageNumber },
        })
        .catch((err) => {
          if (
            err.name !== "NavigationDuplicated" &&
            !err.message.includes(
              "Avoided redundant navigation to current location"
            )
          );
        });
      this.products = await fetch(
        `https://sellpoint-b2b.herokuapp.com/products/${this.$route.params.slug}?page=${pageNumber}`
      )
        .then((response) => response.json())
        .then((response) => {
          this.total = response.count;
          return response.results;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
