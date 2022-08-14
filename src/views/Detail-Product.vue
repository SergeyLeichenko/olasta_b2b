<template name="datail-product">
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
            <!-- block detail product -->
            <div class="main__block_datail">
              <detail :detail_data="product.data" />
            </div>
          </div>
          <!-- block detail characteristic -->
          <div class="characteristic">
            <characteristic :properties_data="product.data" />
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
import brandList from "../components/home/brands/brand-list.vue";
import category from "@/components/home/category/category";
import detail from "@/components/detail_product/detail";
import characteristic from "@/components/detail_product/characteristic";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "datail-product",
  components: {
    Header,
    Footer,
    category,
    brandList,
    detail,
    characteristic,
  },
  data() {
    return {
      listCategory: false,
      listBrands: true,
      product: [],
    };
  },
  created() {
    this.$load(async () => {
      this.product = await this.$api.detail.get(this.$route.params.slug);
      // console.log(this.product.data);
    });
  },
  computed: {
    ...mapGetters(["BRANDS", "CATEGORIES"]),
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
  },
};
</script>

<style lang="scss" scoped></style>
