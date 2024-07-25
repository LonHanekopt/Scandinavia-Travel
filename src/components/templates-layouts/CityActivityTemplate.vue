<template>
    <div class="container">
        <div class="heading">
            <h1>Header</h1>
        </div>
        <div class="image">
            <img src="@/assets/city.jpg" alt="city">
        </div>

        <div class="flex">
           <div class="card">
            <h1>Heading</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam dolores sapiente tenetur odit inventore ratione repellendus saepe labore aliquam! Inventore eum ullam, nisi autem veritatis recusandae magni est ut!</p>
           </div>

           <div class="card">
            <h1>Heading</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam dolores sapiente tenetur odit inventore ratione repellendus saepe labore aliquam! Inventore eum ullam, nisi autem veritatis recusandae magni est ut!</p>
           </div>

           <div class="card">
            <h1>Heading</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam dolores sapiente tenetur odit inventore ratione repellendus saepe labore aliquam! Inventore eum ullam, nisi autem veritatis recusandae magni est ut!</p>
           </div>
           <div class="card">
            <h1>Heading</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam dolores sapiente tenetur odit inventore ratione repellendus saepe labore aliquam! Inventore eum ullam, nisi autem veritatis recusandae magni est ut!</p>
           </div>
           <div class="card">
            <h1>Heading</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam dolores sapiente tenetur odit inventore ratione repellendus saepe labore aliquam! Inventore eum ullam, nisi autem veritatis recusandae magni est ut!</p>
           </div>
           <div class="card">
            <h1>Heading</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam dolores sapiente tenetur odit inventore ratione repellendus saepe labore aliquam! Inventore eum ullam, nisi autem veritatis recusandae magni est ut!</p>
           </div>
           <div class="card">
            <h1>Heading</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam dolores sapiente tenetur odit inventore ratione repellendus saepe labore aliquam! Inventore eum ullam, nisi autem veritatis recusandae magni est ut!</p>
           </div>
           <div class="card">
            <h1>Heading</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam dolores sapiente tenetur odit inventore ratione repellendus saepe labore aliquam! Inventore eum ullam, nisi autem veritatis recusandae magni est ut!</p>
           </div>

           <div class="card">
            <h1>Heading</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam dolores sapiente tenetur odit inventore ratione repellendus saepe labore aliquam! Inventore eum ullam, nisi autem veritatis recusandae magni est ut!</p>
           </div>


        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h1 {
    font-size: 2rem;
    letter-spacing: 2px;
    font-weight: 300;
}

p {
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 1px;
    margin-top: 1em;
}

.image {
    width: 65%;
    margin: 0 auto;
}

.image img {
    border-radius: 2rem;
}

.heading {
    /* border: 1px solid black; */
    padding: 3em;
}

.heading h1 {
    font-size: 2.5rem;
    font-weight: 400;
}

.flex {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: left;
    padding: 2rem 2rem;
}

@media screen and (max-width: 500px) {
    h1 {
        font-size: 1.8rem;
    }

    p {
        font-size: 1rem;
    }

    .heading h1 {
        font-size: 2rem;
    }
}
</style>