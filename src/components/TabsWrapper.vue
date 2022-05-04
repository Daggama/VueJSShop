<template>
    <div class="tabs">
        <ul class="tabs__header">
            <li
                v-for="title in tabTitles"
                :key="title"
                class="tab__item"
                :class="{ selected: selectedTitle === title}"
                @click="selectedTitle = title"
            >
                {{ title }}
            </li>
        </ul>
        <slot></slot>
    </div>
</template>

<script>
import { useSlots, ref, provide } from 'vue'

const slots = useSlots()
const tabTitles = ref(slots.default().map(tab => tab.props.title))
const selectedTitle = ref(tabTitles.value[0])

provide('selectedTitle', selectedTitle)
</script>

<style scoped>

</style>
