<template name="detail-top">
  <div class="main__block_datail_top">
    <div class="main__block_datail_top_left">
      <div class="main__block_datail_top_left_img">
        <img :src="detail_data.image" class="img" alt="" />
      </div>
      <div class="main__block_datail_top_left_text">
        <h2 class="title">
          {{ detail_data.title }}
        </h2>
        <p class="sub-text">Артикул: {{ detail_data.product_code }}</p>
        <p class="sub-text">Гарантия: {{ detail_data.warranty }} мес.</p>
      </div>
    </div>
    <div class="main__block_datail_top_right">
      <div class="main__block_datail_top_right_all-price">
        <div class="price-text">
          <p class="text">Клиентская цена:</p>
          <p class="text">Розничная цена:</p>
        </div>
        <div class="price">
          <p class="sum">{{ detail_data.get_actual_vendor_price }}</p>
          <p class="sum">{{ detail_data.retail_price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail-top",
  props: {
    detail_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
