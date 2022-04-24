<template>
    <my-dialog :show="true">
        <div class="login">
            <button class="login__btn">
                <img src="../icons/close.svg" alt="close-btn">
            </button>
            <div class="login__header">
                    <div class="login__title">BuildPoint</div>
                    <div class="login__text">building materials store</div>
            </div>
            <form class="login__form">
                <div class="login__modal">
                    <div class="login__modal-btn">Регистрация</div>
                    <div class="login__modal-btn active">Вход</div>
                </div>
                <div class="login__body">
                    <input type="email" class="login__input" id="email" placeholder="Электронная почта">
                    <input type="password" class="login__input" id="pass" placeholder="Пароль">
                    <button class="btn" type="submit">
                        Войти
                    </button>
                    <a href="#" class="login__link">Забыли пароль?</a>
                </div>
            </form>
        </div>
    </my-dialog>
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
        }
    }
}
</script>

<style scoped>
.login {
    position: relative;
    padding: 74px 85px 29px;
}

.login__btn {
    position: absolute;
    top: 28px;
    right: 28px;
    background-color: inherit;
    outline: none;
    border: none;
}
.login__header {
    margin: auto;
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
.login__modal {
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
.login__modal-btn {
    padding: 14px;
    cursor: pointer;
}
.active {
    border-bottom: 3px solid #4CB7E4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
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
