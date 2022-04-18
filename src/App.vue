<template>
	<mynavbar></mynavbar>
	<div class="app left">
	
		<myheader></myheader>
		<router-view></router-view>
		<myfooter></myfooter>
	</div>
</template>

<script>
import mynavbar from "@/components/Navbar";
import myheader from "@/components/Header";
import myfooter from "@/components/Footer"
export default {
  	components: {
		mynavbar,
		myheader,
		myfooter,
  	},
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
