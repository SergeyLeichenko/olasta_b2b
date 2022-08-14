<template>
  <div class="nav-desctop nav-desctop-b2b">
    <ul class="top-nav__menu">
      <div class="top-nav__menu_list">
        <router-link tag="li" to="" class="top-nav__menu_list_link">
          <a href=""><span>|</span>Специальная цена</a>
        </router-link>
        <router-link
          tag="li"
          :to="{ name: 'orders' }"
          class="top-nav__menu_list_link"
        >
          <a href=""><span>|</span>История заказов</a>
        </router-link>
      </div>

      <div class="top-nav__menu_user-cart">
        <div class="user">
          <div class="user__block">
            <div class="user__block_icon">
              <img
                class="user__block_icon_img"
                src="@/assets/images/user-icon.svg"
                alt="user-icon"
              />
              <p class="user__block_icon_text">Пользователь</p>
            </div>
            <div class="user__block_name" v-if="getUser">
              <p class="user__block_name_first-name first">
                {{ getUser.username }}
              </p>
              <p class="user__block_name_last-name first">
                {{ getUser.last_name }}
              </p>
            </div>
            <div class="user__block_enter" @click="onAuthBtnClick">
              <img
                class="user__block_icon_img"
                src="@/assets/images/enter-icon.svg"
                alt="enter-icon"
              />
              <p class="user__block_icon_text">Выход</p>
            </div>
          </div>
        </div>
        <div class="user">
          <div class="user__block">
            <router-link
              tag="a"
              :to="{ name: 'cart' }"
              class="user__block_icon cart-block"
            >
              <img
                class="user__block_icon_img"
                src="@/assets/images/cart-icon.svg"
                alt="cart-icon"
              />
              <p class="user__block_icon_text">Корзина</p>
            </router-link>
            <div class="user__block_name">
              <p class="user__block_name_first-name first first-cart">
                {{ CART.length }} товаров на сумму
                {{ cartTotalCost | formattedPrice }} грн
              </p>
            </div>
            <div class="user__block_enter user__block_money">
              <img
                class="user__block_icon_img"
                src="@/assets/images/money-icon.svg"
                alt="money-icon"
              />
              <p class="user__block_icon_text">UAH</p>
            </div>
          </div>
        </div>
      </div>
      <div class="top-nav__menu_lang" v-bind:class="active" v-on:click.prevent>
        <a class="ua" href="#" @click="makeActive('ua')">UA</a>
        <a class="ru" href="#" @click="makeActive('ru')">RU</a>
      </div>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import formattedPrice from "@/filters/price-format";
export default {
  name: "nav-desctop",
  data() {
    return {
      active: "ru",
    };
  },
  filters: {
    formattedPrice,
  },
  computed: {
    ...mapGetters(["CART"]),
    ...mapGetters({
      getUser: "user/getUser",
    }),
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
    ...mapActions({
      deleteUser: "user/deleteUser",
    }),
    makeActive: function (item) {
      this.active = item;
    },
    onAuthBtnClick() {
      if (this.getUser) {
        this.$api.auth.logout();
        localStorage.removeItem("user");
        this.deleteUser();
        this.$router.push({ name: "login" });
      } else {
        // this.isAuthModalOpen = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.top-nav__menu_list {
  display: flex;
  span {
    margin: 0 40px;
    color: $white;
  }
  a {
    color: $white;
  }
  &_link {
    a {
      font-size: 18px;
      font-weight: 600;
      text-decoration: none;
    }
  }
  &_lang {
    a {
      font-size: 14px;
      text-decoration: none;
      font-weight: 500;
      margin-left: 15px;
    }
    .ua {
      margin-left: 0;
    }
    span {
      font-size: 18px;
      font-weight: 600;
    }
    .lang-border {
      margin-right: 0;
    }
  }
}
</style>
