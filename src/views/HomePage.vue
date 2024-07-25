<template>
    <section><HeaderView/></section>
    <section><MainView/></section>
    <section id="divider"><dividerText/></section>
    <section><FactsView/></section>
    <section id="divider"><dividerCards/></section>
    <section><ActivitiesAttractions/></section>
</template>

<script>
import HeaderView from '@/components/HeaderView.vue'
import MainView from '@/components/MainView.vue'
import dividerText from '@/components/dividers/dividerText.vue'
import FactsView from '@/components/FactsView.vue'
import dividerCards from '@/components/dividers/dividerCards.vue'
import ActivitiesAttractions from '@/components/ActivitiesAttractions.vue'

    export default {
        components:{
            HeaderView,
            MainView,
            dividerText,
            FactsView,
            dividerCards,
            ActivitiesAttractions
        }
    }
</script>

<style scoped>

</style>