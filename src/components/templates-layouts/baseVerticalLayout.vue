<template>
    <div class="container">
        <div class="heading box">
            <h1>heading-h1</h1>
            <p>heading-p</p>
        </div>
        <div class="flex">



            <div class="card">
                <h1>Global Coverage</h1>
                <p>Airalo offers eSIMs for more than 200 countries and regions, ensuring you stay connected regardless
                    of your travel destination.</p>
            </div>
            <div class="card">
                <h1>Affordable Data Plans</h1>
                <p>Airalo provides budget-friendly data plans that are often much cheaper than international roaming
                    fees. They offer a variety of packages, including local, regional, and global plans. For instance,
                    global packages begin at for 1GB of data.</p>
            </div>
            <div class="card">
                <h1></h1>
                <p></p>
            </div>
        </div>
        <h1 class="how-to-text">Guide for Instructions</h1>
        <div class="flex instructions">
            <div class="card">
                <h1>Step 1: Verify Compatibility</h1>
                <p>Ensure your phone supports eSIM technology by checking its specifications or visiting the
                    manufacturer's website. Make sure your phone's operating system is updated to the latest version.
                </p>
            </div>
            <div class="card">
                <h1>Step 2: Purchase and Activate the eSIM Card</h1>
                <p>Buy an eSIM card from a reputable provider, such as a mobile carrier or an online retailer. Follow
                    the activation instructions, which may include setting up an account, providing identification, and
                    verifying payment details.</p>
            </div>
            <div class="card">
                <h1></h1>
                <p></p>
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
    font-size: 1.3rem;
    font-weight: 400;
    letter-spacing: 3px;
    margin: 2rem auto;
}

.flex {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    text-align: left;
}

.flex .card {}

.flex .card p {
    margin: 1em 0;
    font-size: 1rem;
}

.how-to-text {
    font-size: 2.3rem;
    letter-spacing: 3px;
    margin: 2rem auto;
}

.instructions {
    width: 80%;
    margin-bottom: 2rem;
}

.instructions h1 {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 3px;
    margin: 2rem auto;
}
</style>