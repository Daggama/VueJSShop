<template>
    <select v-model="model_value">
        <option value=""></option>
    </select>
</template>

<script>
export default {
    name:"my-select",
    props:{
        model_value:{
            type: String,
        },
        options:{
            type:Array,
            default: () => []
        }
    }
}
</script>

<style scoped>

</style>