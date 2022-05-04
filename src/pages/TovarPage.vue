<template>
	<div class="main">
		<div class="page__title">
			<h1>Страница товара {{ $route.params.id }}</h1>
		</div>
		<div style="margin:20px 0 25px; display:flex">
			<div class="tovar__info dflex">
				<div class="imt">
					<img src="#" alt="">
				</div>
				<div class="text">
					<div class="title">
						Товар: 
					</div>
					<div class="tovar__cod textsize">
						Код товара:
					</div>
					<div class="creater textsize">
						Производитель:
					</div>
					<div class="price textsize">
						Цена: 
					</div>
				</div>
			</div>
			<div class="dostavka">
				<div class="dostavka__center">
					<h2>Самовывоз</h2>
					<div class="dostavka__text dflex">
						<p>Необходимо дождаться звонка менеджера магазина и согласовать с ним время самовывоза.</p>
						<p>Бесплатно</p>
					</div>
					<div class="dostavka__text dflex">
						<p>Доставка курьерской службой магазина, от 2-х дней с момента заказа, в зависимости от загрузки. Стоимость доставки Вам сообщит менеджер.</p>
						<p>Стоимость зависит от района</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	
}
</script>

<style scoped>

.tovar__info{
	justify-content: space-between;

	width: 730px;
	height: 392px;

	border-radius: 5px;
	background-color: #2B2B2B;
}
.text{
	margin-top: 30px;
	width: 322px;
	color: #E7E7E7;
}
.text .title{
	font-weight: 500;
	font-size: 24px;
	line-height: 28px;
	margin-bottom: 22px;
}
.text .creater{
	margin: 22px 0;

	
}
.text .tovar__cod{

}
.text .price{

}
.dostavka{
	margin-left: 20px;

	width: 382px;
	height: 392px;

	border-radius: 5px;	
	background-color: #2B2B2B;	
}
.dostavka__center{
	width: 80%;
	margin: 38px auto;
}
.dostavka__text{
	align-items: center;
	margin-top: 25px;
}
.dostavka__text p{
	margin-right: 10px;
}
.textsize{
	font-weight: 500;
	font-size: 16px;
	line-height: 18px;
}
.dflex{
	display: flex;
}

</style>