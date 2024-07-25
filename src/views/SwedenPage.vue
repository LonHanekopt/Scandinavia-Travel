<template>
    <div class="content">
        <div class="bg">
            <div class="container">
                <div class="heading">
                    <h1>Discovering Sweden: A Land of Natural Beauty and Cultural Riches</h1>
                </div>
                <div class="row">
                    <p>Sweden, a Scandinavian gem, is a land where natural beauty and cultural riches seamlessly
                        intertwine. Known for its stunning landscapes, from vast forests and crystal-clear lakes to
                        picturesque archipelagos, Sweden offers a serene escape for nature enthusiasts. The country is
                        equally renowned for its vibrant cities, which blend historical charm with modern
                        sophistication, providing a dynamic backdrop for cultural exploration. Sweden’s commitment to
                        sustainability and innovation further enhances its appeal, making it a progressive and
                        forward-thinking travel destination.</p>
                    <p>Sweden holds immense significance due to its rich cultural heritage,
                        diverse natural wonders, and welcoming atmosphere. The country's well-preserved historical
                        sites, such as the medieval town of Visby and the royal palaces, offer a glimpse into its
                        storied past. At the same time, its thriving arts and design scene, epitomized by Stockholm’s
                        numerous museums and galleries, showcases Sweden's contemporary creativity. Key attractions that
                        will be covered in this post include the enchanting Stockholm archipelago, the medieval allure
                        of Gamla Stan, the innovative Icehotel in Jukkasjärvi, and the exhilarating Liseberg amusement
                        park in Gothenburg</p>
                </div>
            </div>
        </div>

        <section>
            <swedenMainView />
        </section>
    </div>
</template>

<script>
import swedenMainView from '@/components/country/swedenMainView.vue'

export default {
    components: {
        swedenMainView,
    }
}
</script>

<style scoped>
.bg {
    background-image: linear-gradient(rgba(1, 1, 1, 0.6),
            rgba(1, 1, 1, 0.6)), url('@/assets/Lapland.jpg');
    background-attachment: scroll;
    background-position: center;
    background-size: cover;
    background-color: var(--white);
    color: var(--white);
}

.bg .heading {
    padding: 3rem;
    margin: auto;
    width: 50vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    justify-content: center;
}

.bg .heading h1 {
    letter-spacing: 3px;
    font-size: 1.7rem;
}

.bg .heading p {
    margin-top: 1rem;
    letter-spacing: 1px;
    font-size: 1rem;
}

.bg .row {
    display: flex;
    flex-direction: row;
    gap: 2em;
    padding-bottom: 3rem;
}

.bg .row p {
    flex: 0 0 50%;
}

@media (max-width: 768px) {
    .bg .heading {
        padding: 2rem;
        width: 70vw;
    }

    .bg .row {
        flex-direction: column;
    }

    .bg .heading h1 {
        font-size: 1.3rem;
    }

    .bg .row p {
        font-size: 0.8rem;
    }
}
</style>