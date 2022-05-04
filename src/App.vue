<template>
	<div>
		<navbar></navbar>
		<div class="app left">
			<myheader class="myheader"></myheader>
			<router-view class="router-view"></router-view>
			<!-- <mylogin></mylogin> -->
			<myfooter></myfooter>
			<log-in></log-in>
		</div>
	</div>
</template>

<script>
import navbar from "@/components/Navbar";
import myheader from "@/components/Header";
import myfooter from "@/components/Footer";
import LogIn from "@/components/LogIn"

export default {
  	components: {
		navbar,
		myheader,
		myfooter,
		LogIn,
		MyDialog
  	},
	// data() {
	// 	return {
	// 		dialogVisible: true,
	// 	}
	// }
};
</script>

<style>
* {
  	margin: 0;
  	padding: 0;
  	box-sizing: border-box;
  	font-family: "Ubuntu", sans-serif;
	color: #E7E7E7;
}
body {
  	background-color: #1e1e1e;
}
.app {
	display: inline-block;
}
.left{
    margin-left: 270px;
}
.myheader{
	margin-top: 24px;
}
.router-view{
	margin-top: 32px;
	min-height: 400px;
}
.page__title h1{
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #E7E7E7;
}.tovar{
    margin-top: 30px;
}
.center{
    display: flex;
    flex-wrap: wrap;
}
.tovar__content{
    width: 260px;
    height: 320px;

    overflow: hidden;
    border-radius: 5px;
    background-color: #2B2B2B;
}
.tovar__content .img{
    display:flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 184px;
    background-color: #E8E8E8;
}
.tovar__content .img img{
    width: 100%;
    height: 100%;
}
.tovar__content .text{
    margin: 20px;
}
.tovar__content .text .title{
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
}
.tovar__content .text .price{
    margin: 10px 0 20px 0;

    font-weight: 500;
    font-size: 16px;
    line-height: 14px;
    color: #4CB7E4;
}
.tovar__content .text button{
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    background-color: #2b2b2b;
}
.tovar__content .text button p{
    margin: 0 0 0 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #E7E7E7;
}
.router-view a{
        margin-right: 30px;
    margin-bottom: 50px;
}

@font-face {
  	font-family: "Ubuntu";
  	src: url("./fonts/Ubuntu-Light.eot");
  	src: url("./fonts/Ubuntu-Light.eot?#iefix") format("embedded-opentype"),
		url("./fonts/Ubuntu-Light.woff") format("woff"),
			url("./fonts/Ubuntu-Light.ttf") format("truetype");
  	font-weight: 300;
  	font-style: normal;
}

@font-face {
  	font-family: "Ubuntu";
  	src: url("./fonts/Ubuntu-Regular.eot");
  	src: url("./fonts/Ubuntu-Regular.eot?#iefix") format("embedded-opentype"),
		url("./fonts/Ubuntu-Regular.woff") format("woff"),
		url("./fonts/Ubuntu-Regular.ttf") format("truetype");
  	font-weight: 400;
  	font-style: normal;
}

@font-face {
  	font-family: "Ubuntu";
  	src: url("./fonts/Ubuntu-Medium.eot");
  	src: url("./fonts/Ubuntu-Medium.eot?#iefix") format("embedded-opentype"),
		url("./fonts/Ubuntu-Medium.woff") format("woff"),
		url("./fonts/Ubuntu-Medium.ttf") format("truetype");
  	font-weight: 500;
  	font-style: normal;
}

@font-face {
  	font-family: "Ubuntu";
  	src: url("./fonts/Ubuntu-Bold.eot");
  	src: url("./fonts/Ubuntu-Bold.eot?#iefix") format("embedded-opentype"),
		url("./fonts/Ubuntu-Bold.woff") format("woff"),
		url("./fonts/Ubuntu-Bold.ttf") format("truetype");
  	font-weight: 900;
  	font-style: normal;
}
</style>
