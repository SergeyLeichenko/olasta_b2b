<template name="footer-b2b">
  <footer class="footer-b2b">
    <div class="container">
      <div class="footer-b2b__block">
        <div class="footer-b2b__block_logo">
          <router-link :to="{ name: 'index' }">
            <img src="@/assets/images/logo.svg" alt="olasta"
          /></router-link>
        </div>
        <div class="footer-b2b__block_text">
          <p>&#169; Дистриб’ютор OLASTA – 2021</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-b2b",
};
</script>

<style lang="scss" scoped></style>
