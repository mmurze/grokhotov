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

<style lang="scss" scoped>
.basket{
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
  margin-right: 30px;
}

.icon{
  display: flex;
  justify-content: center;
  align-items: center;
  .nuxt-icon{
    height: fit-content;
  }
}

.title{
  font-size: 14px;
}

.count_product{
  font-size: 12px;
  color: #797B86;
}

.total_cost{
  font-size: 12px;
}

</style>
