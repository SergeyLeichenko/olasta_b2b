<template name="login">
  <div>
    <header class="block-header">
      <div class="container">
        <div class="top-nav">
          <div class="top-nav__logo">
            <router-link to="/">
              <img src="@/assets/images/logo.svg" alt="OLASTA" />
            </router-link>
          </div>
        </div>
      </div>
    </header>
    <section>
      <div class="login">
        <h1 class="login__title">Вход в систему B2B Olasta</h1>
        <form class="login__form" @submit.prevent="signIn" novalidate>
          <p class="login__form_fild">
            <input
              type="text"
              placeholder="Логин"
              v-model.trim="phone"
              @blur="$v.email.$touch()"
              :class="{ invalid: $v.email.$error }"
            />
            <small class="invalid" v-if="!$v.email.email">
              введено некоректну адресу електронної пошти або номер
              телефону</small
            >
          </p>
          <p class="login__form_fild">
            <input
              :type="[showPassword ? 'text' : 'password']"
              placeholder="Пароль"
              v-model.trim="password"
              @blur="$v.password.$touch()"
              :class="{ invalid: $v.password.$error }"
            />
            <span @click="showPassword = !showPassword">
              <i
                class="fa"
                :class="[
                  showPassword ? 'fa-eye eye-login' : 'fa-eye-slash eye-login',
                ]"
                aria-hidden="true"
              ></i>
            </span>
            <small class="invalid" v-if="!$v.password.minLength">
              пароль повинен бути не менше
              {{ $v.password.$params.minLength.min }} символів. Зараз він
              {{ password.length }}</small
            >
          </p>
          <div class="login__form_remember">
            <input type="checkbox" id="check-remember" />
            <label class="login__form_remember_check" for="check-remember"
              >запомнить пароль
            </label>
            <p class="login__form_remember_pass">Забыли пароль?</p>
          </div>
          <div class="login__form_btn">
            <button type="submit">Войти</button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { email, minLength } from "vuelidate/lib/validators";
export default {
  name: "login",
  components: {},
  data() {
    return {
      phone: "",
      password: "",
      showPassword: false,
    };
  },
  validations: {
    email: { email },
    password: { minLength: minLength(3) },
  },
  computed: {},
  methods: {
    signIn() {
      if (this.phone == "" || this.password == "") {
        alert("заполните все поля!");
      } else {
        this.$load(async () => {
          const data = (
            await this.$api.auth.signIn({
              phone: this.phone,
              password: this.password,
            })
          ).data;
          localStorage.setItem("user", JSON.stringify(data));
          this.$store.dispatch("user/setUser", data);
        });
        this.$router.push("/home");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  position: absolute;
  top: 30%;
  left: 35%;
  &__title {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 50px;
  }
  &__form {
    &_fild {
      position: relative;
      text-align: center;
      margin-bottom: 25px;
      input {
        border: 0;
        border-bottom: 1px solid $dark-grey;
        width: 375px;
        outline: none;
        &::placeholder {
          color: $dark-grey;
        }
      }
      .invalid {
        color: $red;
        position: absolute;
        top: 24px;
        left: 50px;
        font-size: 10px;
      }
      span {
        .eye-login {
          position: absolute;
          top: 5px;
          right: 50px;
          color: $dark-grey;
          cursor: pointer;
        }
      }
    }
    &_remember {
      width: 375px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      font-size: 14px;
      position: relative;
      input {
        display: none;
      }
      input[type="checkbox"]:checked + label:after {
        display: block;
        content: "\1F5F8";
        position: absolute;
        left: 0;
        top: 1px;
        color: $blue-hed;
        font-size: 14px;
        font-weight: 700;
      }
      &_check {
        color: $dark-grey;
        margin-left: 20px;
        &:before {
          display: block;
          content: "";
          width: 15px;
          height: 15px;
          border: 1px solid $dark-grey;
          border-radius: 50%;
          position: absolute;
          left: -2px;
          top: 3px;
        }
      }
      &_pass {
        color: $blue-hed;
        cursor: pointer;
      }
    }
    &_btn {
      margin-top: 35px;
      button {
        width: 375px;
        border: 0;
        outline: none;
        color: $white;
        font-size: 20px;
        font-weight: bold;
        background-color: $bg-btn-order;
        padding: 12px 0px;
        display: flex;
        justify-content: center;
        border-radius: 30px;
        margin: auto;
      }
    }
  }
}
</style>
