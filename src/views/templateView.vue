<template>
    <section><HeaderTemplate/></section>
    <section v-if="false"><HeaderWithIcon2x1Template/></section>

    <main><mainTemplate/></main>
    
    <section class="divider"><dividerIcon/></section>
    
    <section><baseVerticalLayout/></section>
    
    <section class="divider"><dividerCards/></section>

    <section><KiwiTaxiTemplate/></section>
    
    <section class="divider"><dividerText/></section>

    <section><hotelSearchTemplate/></section>

</template>

<script>
import mainTemplate from '../components/templates-layouts/mainTemplate.vue'
import baseVerticalLayout from '../components/templates-layouts/baseVerticalLayout.vue'
import KiwiTaxiTemplate from '../components/templates-layouts/KiwiTaxiTemplate.vue'
import hotelSearchTemplate from '../components/templates-layouts/hotelSearchTemplate.vue'
import HeaderTemplate from '@/components/templates-layouts/HeaderTemplate.vue'
import HeaderWithIcon2x1Template from '@/components/templates-layouts/HeaderWithIcon2x1Template.vue'

//dividers
import dividerCards from '../components/dividers/dividerCards.vue'
import dividerText from '../components/dividers/dividerText.vue'
import dividerIcon from '../components/dividers/dividerIcon.vue'


export default {
    components: {
        HeaderWithIcon2x1Template,
        HeaderTemplate,
        mainTemplate,
        baseVerticalLayout,
        dividerCards,
        dividerText,
        dividerIcon,
        KiwiTaxiTemplate,
        hotelSearchTemplate
    }
}
</script>

<style scoped></style>