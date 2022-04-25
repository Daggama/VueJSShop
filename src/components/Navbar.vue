<template>
	<div class="navbar">
		<div class="navbar__container">
			<a @click="$router.push('/')">
				<div class="navbar__title">
					<h1>BuildPoint</h1>
					<p>building materials store</p>
				</div>
			</a>

			<div class="navbar__links">
				<a @click="$router.push('')">
					<div class="navbar__link">
						<img src="../icons/Name19.svg" alt="">
						<div class="navbar__text">
							<p>Гипсокартон</p>
						</div>
					</div>
				</a>
				<a @click="$router.push('')">
					<div class="navbar__link">
						<img src="../icons/Name19.svg" alt="">
						<div class="navbar__text">
							<p>Цемент</p>
						</div>
					</div>
				</a>
				<a @click="$router.push('')">
					<div class="navbar__link">
						<img src="../icons/Name19.svg" alt="">
						<div class="navbar__text">
							<p>Сухие смеси</p>
						</div>
					</div>
				</a>
				<a @click="$router.push('')">
					<div class="navbar__link">
						<img src="../icons/Name19.svg" alt="">
						<div class="navbar__text">
							<p>Газоблоки</p>
						</div>
					</div>
				</a>
				<a @click="$router.push('')">
					<div class="navbar__link">
						<img src="../icons/Name19.svg" alt="">
						<div class="navbar__text">
							<p>Краски и эмали</p>
						</div>
					</div>
				</a>
				<a @click="$router.push('')">
					<div class="navbar__link">
						<img src="../icons/Name19.svg" alt="">
						<div class="navbar__text">
							<p>Пена, клей, герметики</p>
						</div>
					</div>
				</a>
				<a @click="$router.push('')">
					<div class="navbar__link">
						<img src="../icons/Name19.svg" alt="">
						<div class="navbar__text">
							<p>
								Профиль для гипсокартона
							</p>
						</div>
					</div>
				</a>
				<a @click="$router.push('')">
					<div class="navbar__link">
						<img src="../icons/Name19.svg" alt="">
						<div class="navbar__text">
							<p>Строительные инструпенты</p>
						</div>
					</div>
				</a>
				<div class="navbar__link__text  mt60">
					<div class="navbar__text">
						<p>МАТЕРИАЛЫ</p>
					</div>
				</div>
				<a @click="$router.push('')">
					<div class="navbar__link">
						<img src="../icons/Name19.svg" alt="">
						<div class="navbar-text">
							<p>Теплоизоляционные</p>
						</div>
					</div>
				</a>
				<a @click="$router.push('')">
					<div class="navbar__link">
						<img src="../icons/Name19.svg" alt="">
						<div class="navbar-text">
							<p>Гидроизоляционные</p>
						</div>
					</div>
				</a>
				<a @click="$router.push('')">
					<div class="navbar__link">
						<img src="../icons/Name19.svg" alt="">
						<div class="navbar-text">
							<p>Древесно-плитные</p>
						</div>
					</div>
				</a>
				<a @click="$router.push('')">
					<div class="navbar__link">
						<img src="../icons/Name19.svg" alt="">
						<div class="navbar-text">
							<p>Расходные</p>
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import LogIn from "@/components/LogIn.vue";
import MyDialog from "@/components/UI/MyDialog.vue";

export default {	

};

</script>

<style scoped>
.navbar {
  height: 931px;
  width: 230px;
  background-color: #1e1e1e;
  position: fixed;
}
.navbar__container {
  margin: 35px 0 0 30px;
}
.navbar__title {
  margin-left: 15px;
}
.navbar__title h1 {
  font-weight: 700;
  font-size: 22px;
  color: #e7e7e7;
}
.navbar__title p {
  font-weight: 400;
  font-size: 12px;
  color: #a5a5a5;
}

.navbar__links {
  margin-top: 30px;
}
.navbar__link {
  display: flex;
  align-items: center;
  width: 200px;
  height: 44px;
  margin-top: 2px;
  border-radius: 8px;
}
.navbar__link img {
  margin-left: 12px;
}
.navbar__text {
  margin-left: 12px;
  max-width: 110px;
}
.navbar__link .navbar__text p {
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #a5a5a5;
}
.navbar__link:hover {
  background-color: #242424;
}
.navbar__link__text {
  display: flex;
  align-items: center;
  width: 200px;
  height: 44px;
  margin-top: 10px;
  border-radius: 8px;
    color: #a5a5a5;
}

.mt60{
	margin-top: 40px;
}
a {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  text-decoration: none;
}
.navbar__btn {
  width: 93px;
  height: 44px;
  background: #2B2B2B;
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #A5A5A5;
  border: none;
  cursor: pointer;
}
</style>
