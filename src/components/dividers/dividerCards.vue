<template>
    <div class="bg">
        <div class="container bg-wrapper">
            <div class="heading">
                <h1>{{ $t('divider-cards-1') }}</h1>
                <p>{{ $t('divider-cards-2') }}</p>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    // Component options
}
</script>

<style scoped>
.bg {
    background-image: linear-gradient(rgba(1, 1, 1, 0.6), rgba(1, 1, 1, 0.6)), url('@/assets/countryside.jpg');
    background-attachment: scroll;
    color: #fff;
}

.bg .bg-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: top;
    padding-top: 3em;
    padding-bottom: 3em;
    justify-content: center;
    align-self: center;
    gap: 2em;
}

.bg .bg-wrapper .heading {
    flex: 0 0 40%;
    padding: 2em 0.4em;
    transition: all 0.2s;
    user-select: none;
}

.bg .bg-wrapper .heading:hover {
    transform: scale(1.03);
}

.bg .bg-wrapper .heading h1 {
    letter-spacing: 3px;
    font-size: 1.7rem;
}

.bg .bg-wrapper .heading p {
    margin-top: 1rem;
    letter-spacing: 1px;
    font-size: 1rem;
}

@media (max-width: 1200px) {
    .bg {
        height: auto;
        padding: 3em 0;
    }
}

@media (max-width: 800px) {
    .bg .bg-wrapper {
        flex-wrap: wrap;
        gap: 1rem;
    }
}

@media (max-width: 500px) {
    .bg .bg-wrapper {
        display: block;
        flex-wrap: wrap;
        gap: 1rem;
    }
}

@media (max-width: 400px) {}
</style>