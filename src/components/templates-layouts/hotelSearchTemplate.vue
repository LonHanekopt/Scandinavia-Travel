<template>
    <div class="bg">
        <div class="header">
            <h1>{{ $t('hotel-search-1') }}</h1>
            <p>{{ $t('hotel-search-2') }}</p>
        </div>
    </div>
    <div class="main">
        <div class="wrapper">
            <div class="flex">
                <div class="left">
                    <div class="image">
                        <img src="@/assets/radisonbluCopenhagen.jpg" alt="hotel">
                    </div>
                </div>
                <div class="right">
                    <div class="content">
                        <div class="card">
                            <h1>{{ $t('hotel-search-3') }}</h1>
                            <p>{{ $t('hotel-search-4') }}</p>
                            <p>{{ $t('hotel-search-5') }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex reverse">
                <div class="left">
                    <div class="image">
                        <img src="@/assets/GrandHotelStockholm.jpg" alt="hotel">
                    </div>
                </div>
                <div class="right">
                    <div class="content">
                        <div class="card">
                            <h1>{{ $t('hotel-search-6') }}</h1>
                            <p>{{ $t('hotel-search-7') }}</p>
                            <p>{{ $t('hotel-search-8') }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex">
                <div class="left">
                    <div class="image">
                        <img src="@/assets/CasinoCosmopol.webp" alt="hotel">
                    </div>
                </div>
                <div class="right">
                    <div class="content">
                        <div class="card">
                            <h1>{{ $t('hotel-search-9') }}</h1>
                            <p>{{ $t('hotel-search-10') }}</p>
                            <p>{{ $t('hotel-search-11') }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex reverse">
                <div class="left">
                    <div class="image">
                        <img src="@/assets/RadissonBluPlaza.jpg" alt="hotel">
                    </div>
                </div>
                <div class="right">
                    <div class="content">
                        <div class="card">
                            <h1>{{ $t('hotel-search-12') }}</h1>
                            <p>{{ $t('hotel-search-13') }}</p>
                            <p>{{ $t('hotel-search-14') }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex">
                <div class="left">
                    <div class="image">
                        <img src="@/assets/CasinoHelsinkiHotel.jpg" alt="hotel">
                    </div>
                </div>
                <div class="right">
                    <div class="content">
                        <div class="card">
                            <h1>{{ $t('hotel-search-15') }}</h1>
                            <p>{{ $t('hotel-search-16') }}</p>
                            <p>{{ $t('hotel-search-17') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="search">
        <div class="container">
            <div class="heading withbg">
                <h1>{{ $t('hotel-search-18') }}</h1>
                <p>{{ $t('hotel-search-19') }}</p>
            </div>
            <hotelwidget type="search" />
            <div class="heading">
                <h1>{{ $t('hotel-search-20') }}</h1>
                <p>{{ $t('hotel-search-21') }}</p>
                <div class="form">
                    <select name="city" id="city" v-model="select">
                        <option value="Sweden" selected>{{ $t('hotel-search-22') }}</option>
                        <option value="Finland">{{ $t('hotel-search-23') }}</option>
                        <option value="Norway">{{ $t('hotel-search-24') }}</option>
                        <option value="Denmark">{{ $t('hotel-search-25') }}</option>
                    </select>
                    <button class="btn green" @click="openHotels">{{ $t('hotel-search-26') }} {{ select }}</button>
                </div>
            </div>
            <div class="widget">
                <hotelwidget v-if="open" type="list" :destination="select" />
            </div>
        </div>
    </div>

</template>

<script>
import hotelwidget from '@/components/widgets/hotelLookWidget.vue'

export default {
    data() {
        return {
            open: false,
            select: "Sweden"
        }
    },
    methods: {
        openHotels() {
            this.open = false;
            setTimeout(() => {
                this.open = true
            }, 500);
        }
    },
    components: {
        hotelwidget
    }
}
</script>

<style scoped>
.bg {
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)), url('@/assets/finland.webp');
    background-attachment: scroll;
    background-position: center;
    background-size: cover;
    height: 400px;
    color: var(--white);
    padding: 2rem;
}

.bg .header {
    margin: 4rem 0;
}

.bg .header p {
    font-size: 1.2rem;
    width: 70%;
    margin: 0 auto;
    margin-top: 2rem;
}

.bg .header .image {
    flex: 0 0 50%;
}

.bg .header .image img {
    border-radius: 1rem;
}

.main {
    padding: 2rem;
}

.main .flex {
    margin-top: 2em;
    padding: 2em 0;
    display: flex;
    flex-direction: row;
    width: 100%;
}

.main .flex .left {
    flex: 0 0 50%;
    color: #fff;
}

.main .flex .left .image {
    padding-right: 1.5rem;
    position: sticky;
    top: 10px;
    transition: all 0.1s ease-in-out;
}

.main .flex .left .image:hover {
    transform: scale(1.03);
}

.main .flex .left img {
    border-radius: 2rem;
    aspect-ratio: 10/8;
}

.main .flex .right {
    flex: 0 0 50%;
}

.main .flex .right .content {
    padding: 0 2rem;
}

.main .flex .right .content .card {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
}

.main .flex .right .content .card h1 {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
}

.main .flex .right .content .card p {
    font-weight: 300;
}

.main .flex.reverse {
    flex-direction: row-reverse;
}


.search {
    background-color: var(--black-bg);
    color: var(--white);
}

select {
    font-size: 1rem;
    padding: 1em;
    border-radius: 0.4rem;
    font-weight: 300;
}

.heading {
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 3.5em 0;
}

.widget {
    transform: all 0.5s;
}

.form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3em;
}

.form input {
    height: 1.5rem;
    width: 15rem;
    font-size: 1rem;
}

@media (max-width: 768px) {
    .main .flex {
        padding: 0 0;
        display: flex;
        flex-direction: column;
        gap: 3em;
        margin-top: 2em;
    }

    .main .flex.reverse {
        flex-direction: column;
    }

    .main .flex .left .image {
        max-width: 80vw;
        margin: 0 auto;
        position: static;
        transition: all 0.1s ease-in-out;
    }

    .form {
        flex-direction: column;
        gap: 1em;
    }

    .bg{
        height: auto;
    }
}

@media screen and (max-width: 500px) {
    .bg {
        padding: 1rem 1rem;
        background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.45)), url('@/assets/finland.webp');
    }

    .main .flex .right .content {
        padding: 0;
    }

    .bg .header {
        margin: 2rem 0;
    }

    .bg .header p {
        font-size: 1.1rem;
        width: 90%;
    }
}
</style>