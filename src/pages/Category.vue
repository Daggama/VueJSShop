<template>
    <div class="main">
        <div class="page__title">
            <h1>Категории</h1>
        </div>
        <div>
            {{ category.category }}
        </div>
    </div>
</template>

<script>
import axios from "axios"



export default {
    name: 'Category',
    data(){
        return{
            category:{
                product:[]
            }
        }
    },
    mounted(){
        this.getCategory()
    },
    methods:{
        async getCategory(){
            const categorySlug = this.$route.params.category_slug

            this.$stote.commit('SetIsLoading', true)

            axios
                .get(`http://127.0.0.1:8000/item/products/${categorySlug}/`)
                .then(response => {
                this.category = response.data

                document.title = this.category.category + ' | Djackets'
            })
            .catch(error => {
                console.log(error)

                toast({
                    
                })
            })

            this.$stote.commit('SetIsLoading', false)
        }
    }
}
</script>

<style scoped>

</style>