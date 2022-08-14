<template name="history-orders">
  <div>
    <Header />
    <section>
      <div class="filters">
        <div class="container">
          <div class="filters__block">
            <filters-orders />
          </div>
          <div class="filters__list">
            <ul
              class="filters__list_items"
              v-for="(item, index) in orders_list"
              :key="index"
            >
              <li class="item item-plus">+</li>
              <li class="item">
                {{ item.id }}
              </li>
              <li class="item" v-if="item.status == 'New order'">
                Новый заказ
              </li>
              <li
                class="item"
                v-if="item.status == 'Manager handling the order'"
              >
                Обрабатывается
              </li>
              <li class="item" v-if="item.status == 'Not paid'">Не оплачено</li>
              <li class="item" v-if="item.status == 'On the Way'">В пути</li>
              <li class="item" v-if="item.status == 'Delivered'">Доставлено</li>
              <li class="item item-data">{{ item.created_at }}</li>
              <li class="item">{{ item.finally_price }} UAH</li>
              <li class="item">
                {{ getUser.username }} {{ getUser.last_name }}
              </li>
            </ul>
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
import filtersOrders from "@/components/orders/order-filters.vue";
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "history-orders",
  components: {
    Header,
    Footer,
    filtersOrders,
  },
  data() {
    return {
      orders_list: [],
    };
  },
  created() {
    this.ordersList();
  },
  computed: {
    ...mapGetters({
      getUser: "user/getUser",
    }),
  },
  methods: {
    ordersList() {
      const access = this.getUser.access;
      axios
        .get(`profile/order/history/`, {
          headers: {
            Authorization: "Bearer " + access,
            Accept: "application/json",
          },
        })
        .then((response) => {
          this.orders_list = response.data.results;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
