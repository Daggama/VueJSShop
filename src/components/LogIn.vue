<template>
    <!-- <div class="login"> -->
        
        <div class="login__header">
            <div class="login__btn" @click="hideDialog">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 20.6667L20.6667 2M2 2L20.6667 20.6667L2 2Z" stroke="#4CB7E4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="login__title">BuildPoint</div>
            <div class="login__text">building materials store</div>
        </div>
        <form class="login__form">
            <div class="login__tabs">
                <div class="login__tab">Регистрация</div>
                <div class="login__tab login__tab-active">Вход</div>
            </div>
            <div class="login__body">
                <input type="email" class="login__input" id="email" placeholder="Электронная почта">
                <input type="password" class="login__input" id="pass" placeholder="Пароль">
                <button @click="logIn" class="btn" type="submit">
                    Войти
                </button>
                <a href="#" class="login__link">Забыли пароль?</a>
            </div>
        </form>
    <!-- </div> -->
</template>

<script>
import MyDialog from "@/components/UI/MyDialog.vue";

export default {
    components: {
        MyDialog,
    },
    data() {
        return {
            dialogVisible: false,
        }
    },
    methods: {
        showDialog() {
            this.dialogVisible = true
        },
        hideDialog() {
            this.dialogVisible = false
        },
        logIn() {
            this.dialogVisible = false
        }
    }
}
</script>

<style scoped>
.login__btn {
    position: absolute;
    top: 28px;
    right: 28px;
    background-color: inherit;
    outline: none;
    border: none;
    cursor: pointer;
    z-index: 5;
}
.login__header {
    padding: 74px 0 30px;
    margin: 0 auto;
    width: 129px;
    height: 39px;
    text-align: left;
}
.login__title {
    font-weight: 700;
    font-size: 22px;
    line-height: 25px;
    color: #E7E7E7;
}
.login__text {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #E7E7E7;
}
.login__tabs {
    margin: 30px auto 0;
    width: 270px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #E7E7E7;
}
.login__tab {
    padding: 14px;
    cursor: pointer;
}
.login__tab-active {
    border-bottom: 3px solid #4CB7E4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
}
.login__form {
    padding: 0 85px;
}
.login__body {
    margin-top: 44px;
}

.login__input {
    width: 330px;
    padding: 15px 16px;
    border: none;
    outline: none;
    border-radius: 8px;
    background-color: inherit;
    border: 1px solid #7D7E7F;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 8px;
}
.login__input:active, .login__input:focus {
    border: 1px solid #E7E7E7;
    color: #F8F8FB;
}
.btn {
    width: 330px;
    height: 50px;
    margin-top: 23px;
    background: #4CB7E4;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    outline: none;
    cursor: pointer;
}
.login__link {
    display: block;
    margin-top: 32px;
    font-weight: 300;
    font-size: 16px;
    line-height: 18px;
    color: #C4C4C4;
    text-decoration: none;
    text-align: center;
}

</style>
