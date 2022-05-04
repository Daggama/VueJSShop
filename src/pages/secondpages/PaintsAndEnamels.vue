<template>
    <div class="main">
        <div class="page__title">
            <h1>Краски и эмали</h1>
        </div>  
        <div class="tovar">
            <div class="center">
                <a 
                    v-for="post in posts" 
                    :key="post.id" 
                    @click="$router.push(`/catalog/${post.id}`)"
                    >
                    <!-- @click="$router.push(`/catalog/${catalog.id}`) -->
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
                </a>
            </div>
        </div>        
    </div>
</template>

<script>
import axios from "axios";
    export default {
        props: {
            selected:{
                type: String,
                default: ''
            }
        },
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
                    const response = await axios.get('http://127.0.0.1:8000/item/paint/');
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

</style>