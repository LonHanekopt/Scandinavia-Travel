<template>
    <div class="content">
        <div class="bg">
            <div class="container">
                <div class="heading">
                    <h1> A Land of Natural Beauty and Cultural Riches</h1>
                </div>
                <div class="row">
                    <p>Finland, a Nordic wonderland, is renowned for its stunning natural landscapes, vibrant cities, and rich cultural heritage. Known as the "Land of a Thousand Lakes," Finland offers an abundance of outdoor adventures, from exploring pristine forests and lakes to witnessing the mesmerizing Northern Lights. The country's unique blend of traditional Finnish culture and modern innovation provides a diverse and enriching travel experience. Whether you're seeking tranquility in nature, historical exploration, or contemporary urban life, Finland has something to offer every traveler</p>
                    <p>Finland holds great significance due to its commitment to sustainability, its high quality of life, and its welcoming atmosphere. The country's well-preserved historical sites, such as the medieval Turku Castle and the ancient rock paintings of Astuvansalmi, offer a glimpse into its storied past. The capital, Helsinki, is a dynamic city known for its design and architecture, while Finnish Lapland offers unparalleled opportunities for winter sports and cultural immersion. Key attractions that will be covered in this post include the Sea Fortress, the Santa Claus Village, and the Åland Islands</p>
                </div>
            </div>
        </div>

        <section><finlandMainView/></section>
    </div>
</template>

<script>
import finlandMainView from '@/components/country/finlandMainView.vue'

export default {
    components: {
        finlandMainView,
    }
}
</script>

<style scoped>
.bg {
    background-image: linear-gradient(rgba(1, 1, 1, 0.6), 
    rgba(1, 1, 1, 0.6)), url('@/assets/SantaClaus.jpg');
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