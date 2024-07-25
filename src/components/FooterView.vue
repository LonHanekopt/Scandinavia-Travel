<template>
    <div class="gray">
        <h1>{{$t('footer-h1')}}</h1>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.gray{
    background-color: var(--black-bg);
    color: var(--white);
    border-top: 1px solid var(--white-soft);
    padding: 2em;
}
h1{
    font-size: 1rem;
    letter-spacing: 2px;
}
</style>