<template>
    <div class="header">
        <div class="header-container">
            <div class="haeder-left">
                <input type="text" placeholder="Поиск по магазину">
            </div>
            <div class="haeder-right">
                <a @click="$router.push('/cart')">
                    <div class="cart">
                        <img src="../icons/cart.svg" alt="">
                    </div>
                </a>
                <a @click="$router.push('/user')">
                    <div class="login">
                        <div class="img">

                        </div>
                        <div class="name">
                            <p>Нариман</p>
                        </div>
                    </div>    
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.header{
    margin-top: 32px;
    width: 1170px;
}
.header-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.haeder-right{
    display: flex;
}
.cart{
    padding: 8px 14px;
    border-radius: 8px;
    background-color: #2B2B2B;
    transition: 0.1s;
}
.login{
    display: flex;
    align-items: center;
    width: 160px;
    margin: 0 20px;
    padding: 8px 14px;
    border-radius: 8px;
    background-color: #2B2B2B;
    transition: 0.1s;
}
.login .img{
    width: 28px;
    height: 28px;
    border-radius: 100%;
    background-color: #a5a5a5;
}
.login .name{
    margin-left: 10px;
}
.login p{
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #a5a5a5;
}
.login:hover, .cart:hover{
    background-color: #242424;
}

input{
    background: url(http://localhost:8080/img/search.b9629c35.svg);
    background-repeat: no-repeat;
    background-position: 10px 9px !important;
    width: 742px;
    padding: 14px 40px;
    border: none;
    border-radius: 8px;
    background-color: #2B2B2B;
    color: #a5a5a5;
}
input::placeholder{
    color: #a5a5a5;
}
a{
    cursor: pointer;
}
</style>