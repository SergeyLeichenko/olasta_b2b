<template name="order-filter">
  <div>
    <div class="filters__block_first">
      <div class="filters__block_first_title">
        <img src="@/assets/images/filters-icon.svg" alt="icon" />
        <p>Фильтр</p>
      </div>
      <div class="filters__block_first_input">
        <p class="text">№ заказа</p>
        <input type="text" placeholder="Введите номер" class="i-text" />
      </div>
      <div class="filters__block_first_input">
        <p class="text">Дата от</p>
        <input type="date" placeholder="Укажите дату" class="i-text" />
      </div>
      <div class="filters__block_first_input">
        <p class="text">Дата по</p>
        <input type="date" placeholder="16.08.2021" class="i-text" />
      </div>
      <div class="filters__block_first_input">
        <p class="text">Продукт</p>
        <input type="text" placeholder="Введите название" class="i-text" />
      </div>
      <div class="filters__block_first_input">
        <p class="text text-chevron">
          Бренд<i class="fas fa-chevron-down"></i>
        </p>
        <input type="text" placeholder="Любой" class="i-text" />
      </div>
      <div class="filters__block_first_input">
        <p class="text text-chevron">Тип<i class="fas fa-chevron-down"></i></p>
        <input type="text" placeholder="Любой" class="i-text" />
      </div>
      <div class="filters__block_first_input">
        <p class="text text-chevron">
          Статус<i class="fas fa-chevron-down"></i>
        </p>
        <input type="text" placeholder="Любой" class="i-text" />
      </div>
      <div class="filters__block_first_input search-btn">
        <input type="submit" value="Найти" class="i-text search" />
      </div>
    </div>
    <div class="filters__block_second">
      <div class="filters__block_second_top">
        <ul class="filters__block_second_top_status">
          <li
            class="filters__block_second_top_status_list"
            v-for="item in status_list"
            :key="item.id"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "order-filter",
  data() {
    return {
      status_list: [
        { id: 1, title: "№ заказа" },
        { id: 2, title: "Статус" },
        { id: 3, title: "Дата заказа" },
        { id: 4, title: "Стоимость" },
        { id: 5, title: "Заказ создал" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
