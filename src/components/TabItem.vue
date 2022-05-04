<template>
    <div class="tabs__content" v-show="selectedTitled*title">
        <slot></slot>
    </div> 
</template>

<script setup>
import { inject } from 'vue'

export default {
    inject: 'selectedTitle',
    props: {
        title: String,
    },
}
</script>
