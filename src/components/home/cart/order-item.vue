<template>
  <div>
    <form class="orders__list" @submit.prevent="sendOrder">
      <div class="orders__list_block">
        <div class="orders__list_block_comment">
          <p class="comment-text">Комментарий</p>
          <p>
            <textarea
              rows="5"
              cols="45"
              name="text"
              class="comments-input"
              v-model="form.message"
            ></textarea>
          </p>
        </div>
        <div class="orders__list_block_user">
          <ul class="orders__list_block_user_list">
            <li class="orders__list_block_user_list_item">Покупатель:</li>
            <li class="orders__list_block_user_list_item">Адрес отгузки:</li>
            <li class="orders__list_block_user_list_item">Дата отгрузки:</li>
            <li class="orders__list_block_user_list_item">Условия оплаты:</li>
            <li class="orders__list_block_user_list_item">
              Условия получения:
            </li>
          </ul>
          <ul class="orders__list_block_user_who">
            <li class="orders__list_block_user_who_item">Vist-M</li>
            <li class="orders__list_block_user_who_item">
              г. Киев, ул. Большая Васильковская, 65
            </li>
            <li class="orders__list_block_user_who_item">23.08.2021</li>
            <li class="orders__list_block_user_who_item">14 дней</li>
            <li class="orders__list_block_user_who_item check-block">
              <a href="#" class="orders__list_block_user_list_item_check">
                <input
                  type="radio"
                  name="new"
                  id="warehouse"
                  v-model="form.delivery_type"
                  value="Самовивіз з нашого складу"
                />
                <label for="warehouse">Самовывоз с нашего склада</label>
              </a>
              <a href="#" class="orders__list_block_user_list_item_check">
                <input
                  type="radio"
                  name="new"
                  id="newPost"
                  v-model="form.delivery_type"
                  value="Новою Поштою"
                />
                <label for="newPost">Новой Почтой</label>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="orders__list_block_btn">
        <button type="submit" class="btn-orders">Подтвердить заказ</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      form: {
        delivery_type: "",
        order_items: this.$store.state.cart,
        message: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      getUser: "user/getUser",
    }),
  },
  methods: {
    async sendOrder() {
      const access = this.getUser.access;
      axios.post(
        `https://sellpoint-b2b.herokuapp.com/uk/order/create/`,
        this.form,
        {
          headers: {
            Authorization: "Bearer " + access,
            Accept: "application/json",
          },
        }
      );
      console.log(this.form);
    },
  },
};
</script>

<style lang="scss" scoped></style>
