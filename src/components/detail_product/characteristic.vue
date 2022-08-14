<template name="characteristic">
  <div class="characteristic__block">
    <ul
      class="characteristic__block_list"
      v-for="(item, index) in properties_data.properties"
      :key="index"
    >
      <p class="characteristic__block_list_title">Технические характеристики</p>
      <li
        class="characteristic__block_list_item"
        v-for="(item, index) in properties_data.properties"
        :key="index"
      >
        <a href="" class="characteristic__block_list_item_link link-first">{{
          item.property_type[index].name
        }}</a>
        <a href="" class="characteristic__block_list_item_link">{{
          item.value
        }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "characteristic",
  props: {
    properties_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
