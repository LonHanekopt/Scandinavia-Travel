<template>
    <div class="content">
        <div class="bg">
            <div class="container">
                <div class="heading">
                    <h1>Denmark a Land of Natural Beauty and Cultural Riches</h1>
                </div>
                <div class="row">
                    <p>Denmark, a Scandinavian jewel, is renowned for its charming cities, picturesque countryside, and rich cultural heritage. Known as the "Happiest Country in the World," Denmark offers a blend of historical landmarks, modern architecture, and stunning natural beauty. From the vibrant streets of Copenhagen to the serene coastal towns of the Danish Riviera, Denmark’s unique qualities make it a captivating destination for travelers. Whether you’re exploring historic castles, indulging in the country’s culinary delights, or enjoying the famous Danish concept of hygge, Denmark promises an unforgettable journey</p>
                    <p>As a travel destination, Denmark holds great importance due to its commitment to sustainability, high quality of life, and exceptional cultural experiences. The country's well-preserved historical sites, thriving arts scene, and innovative design provide a rich cultural tapestry. Key attractions that will be covered in this post include the iconic Tivoli Gardens in Copenhagen, the historic Kronborg Castle on the Danish Riviera, and the artistic ARoS Aarhus Art Museum. Join us as we explore the natural beauty and cultural riches of Denmark</p>
                </div>
            </div>
        </div>

        <section><denmarkMainView/></section>
    </div>
</template>

<script>
import denmarkMainView from '@/components/country/denmarkMainView.vue'

export default {
    components: {
        denmarkMainView,
    }
}
</script>

<style scoped>
.bg {
    background-image: linear-gradient(rgba(1, 1, 1, 0.6), 
    rgba(1, 1, 1, 0.6)), url('@/assets/TivoliGardens.webp');
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

.bg .row p{
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