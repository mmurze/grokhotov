<template>
  <section>
    <div class="wrapper">
      <Header/>
      <slot/>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto ;
  padding: 0 15px;
  font-size: 18px;
  font-family: Lato;
}

@media (max-width: 600px) {
  .wrapper{
    font-size: 15px;
  }
}
</style>
