<template>
  <header>
    <div class="basket">
      <div class="icon">
        <nuxt-icon style="font-size: 32px" name="header/basket" filled/>
      </div>
      <div class="description">
        <p class="title">Ваша корзина</p>
        <p class="count_product">товар</p>
        <p class="total_cost">рублики</p>
      </div>
    </div>
  </header>
</template>

<script setup>

</script>

<style scoped>
.basket{
  display: flex;
}
.count_product{

}

</style>
