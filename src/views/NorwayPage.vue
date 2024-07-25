<template>
    <div class="content">
        <div class="bg">
            <div class="container">
                <div class="heading">
                    <h1>Discovering Norway A Land of Natural Beauty and Cultural Riches</h1>
                </div>
                <div class="row">
                    <p>Norway, a Scandinavian treasure, is renowned for its dramatic landscapes, vibrant cities, and rich cultural heritage. Known as the "Land of the Midnight Sun" and the "Land of the Northern Lights," Norway offers a diverse array of natural wonders and outdoor adventures. From the stunning fjords and majestic mountains to the vibrant urban centers, Norway's unique qualities make it a captivating destination for travelers. Whether you’re exploring the bustling streets of Oslo, marveling at the beauty of the fjords, or experiencing the Arctic charm of Tromsø, Norway promises an unforgettable journey</p>
                    <p>As a travel destination, Norway holds great importance due to its commitment to sustainability, high quality of life, and exceptional natural beauty. The country's well-preserved historical sites, thriving arts scene, and innovative architecture provide a rich cultural experience. Key attractions that will be covered in this post include the iconic Vigeland Sculpture Park in Oslo, the historic Bryggen Wharf in Bergen, and the breathtaking Geirangerfjord. Join us as we explore the natural beauty and cultural riches of Norway</p>
                </div>
            </div>
        </div>

        <section><norwayMainView/></section>
    </div>
</template>

<script>
import norwayMainView from '@/components/country/norwayMainView.vue'

export default {
    components: {
        norwayMainView,
    }
}
</script>

<style scoped>
.bg {
    background-image: linear-gradient(rgba(1, 1, 1, 0.6), 
    rgba(1, 1, 1, 0.6)), url('@/assets/cliffs.jpg');
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