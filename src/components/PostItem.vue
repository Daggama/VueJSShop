<template>
    <div class="main">
        <div class="tovar">
            <div                     
                v-for="post in posts" 
                :key="post.id"
                class="center">
                <div class="tovar__content">
                    <div class="img">
                        <img :src="post.image" alt="">
                    </div>
                    <div class="text">
                        <div class="title">
                            {{ post.title }} 
                        </div>
                        <div class="price">
                            {{ post.price }}
                        </div>
                        <button>
                            <img src="@/icons/cart.svg" alt="">
                            <p>В корзину</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>   
    </div>
</template>

<script>
    export default {
        name: 'postitem',
        data() {
            return {
                // tasks
                posts: ['']
            }
        },
        methods: {
            async getData() {
                try {
                    // fetch tasks
                    const response = await axios.get('http://127.0.0.1:8000/item/PItemView/');
                    // set the data returned as tasks
                    this.posts = response.data;
                } catch (error) {
                    // log the error
                    console.log(error);
                }
            },
        },
        created() {
            // Fetch tasks on page load
            this.getData();
        }
    }
</script>


<style scoped>
.tovar{
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
a{
        margin-right: 30px;
    margin-bottom: 50px;
}
</style>