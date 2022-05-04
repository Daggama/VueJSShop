<template>
    <div class="main">
        <div>
            <div class="page__title">
                <h1>Личный кабинет</h1>
            </div>

            <div class="user__name">
                <p>M Нариман</p>
            </div>
            <div class="page__title">
                <h1>Мои покупки</h1>
            </div>
            <div class="tovar__pokupka">
                <table>
                    <tr>
                        <th>№</th>
                        <th>Код товара</th>
                        <th>Статус</th>
                        <th>Оплата</th>
                        <th>Цена</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>xxxx</th>
                        <th>xxxx</th>
                        <th>xxxx</th>
                        <th>xxxx</th>
                    </tr>
                    <tr>
                        <th>2</th>
                        <th>xxxx</th>
                        <th>xxxx</th>
                        <th>xxxx</th>
                        <th>xxxx</th>
                    </tr>
                </table>
            </div>
        </div>
        <div style="margin-left:20px">
            <div class="page__title">
                <h1>Мои карты</h1>
            </div>
            <div class="carta">
                <div class="bank__carta">
                    <img src="../img/image38.svg" alt="">
                </div>
                <p>Номер: **** **** **** 0008</p>
                <p>Дата: 00/00</p>
                <p>CVV: ***</p>
                <p>Владелец карты: M НАРИМАН</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main{
    display: flex;
    margin-bottom: 20px;
}
.user__name{
    display: flex;
    justify-content: center;
    align-items: center;

    width: 730px;
    height: 130px;

    margin-top: 25px;
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: #2B2B2B;
}
.user__name p{
    font-weight: 500;
    font-size: 18px;
    line-height: 14px;
    color: #B8B8B8;
}
.tovar__pokupka{
    width: 730px;
    height: 300px;

    margin-top: 25px;
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: #2B2B2B;
}
table{
    
    width: 90%;
    margin: 0 auto;
}
table tr{
    margin-top: 15px;
}

.carta{
    display: flex;
    flex-direction: column;

    width: 388px;
    height: 503px;

    margin-top: 25px;
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: #2B2B2B;
}
.carta .bank__carta{
    margin: 38px auto;
}
.carta p{
    margin: 0 56px auto;
}
</style>