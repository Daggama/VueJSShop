<template>
  <div class="navbar">
    <div @click="$router.push('/')">Shop</div>
    <div class="navbar__btns">
        <button @click="$router.push('/')">Главная страница</button>
        <button @click="$router.push('/about')">О нас</button>
        <button @click="$router.push('/contact')">Номер</button>
        <div>
            <button @click="$router.push('/user')">Профиль</button>
            <button @click="$router.push('/cart')">Корзина</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
</style>