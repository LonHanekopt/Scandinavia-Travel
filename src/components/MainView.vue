<template>
   <div class="container">
    <div class="flex">
        <div class="left">
            <div class="image">
                <img src="@/assets/stockholm.jpg" alt="stockholm">
            </div>
        </div>
        <div class="right">
            <div class="content">
                <div class="card">
                    <h1>{{$t('main-view-1')}}</h1>
                    <p>{{$t('main-view-2')}}</p>
                    <p>{{$t('main-view-3')}}</p>
                    <p>{{$t('main-view-4')}}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="flex">
        <div class="left">
            <div class="image">
                <img src="@/assets/Gothenburg.jpg" alt="gothenburg">
            </div>
        </div>
        <div class="right">
            <div class="content">
                <div class="card">
                    <h1>{{$t('main-view-5')}}</h1>
                    <p>{{$t('main-view-6')}}</p>
                    <p>{{$t('main-view-7')}}</p>
                    <p>{{$t('main-view-8')}}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="flex reverse">
        <div class="left">
            <div class="image">
                <img src="@/assets/oslo.jpg" alt="oslo">
            </div>
        </div>
        <div class="right">
            <div class="content">
                <div class="card">
                    <h1>{{$t('main-view-9')}}</h1>
                    <p>{{$t('main-view-10')}}</p>
                    <p>{{$t('main-view-11')}}</p>
                    <p>{{$t('main-view-12')}}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="flex reverse">
        <div class="left">
            <div class="image">
                <img src="@/assets/bergen.jpg" alt="bergen">
            </div>
        </div>
        <div class="right">
            <div class="content">
                <div class="card">
                    <h1>{{$t('main-view-13')}}</h1>
                    <p>{{$t('main-view-14')}}</p>
                    <p>{{$t('main-view-15')}}</p>
                    <p>{{$t('main-view-16')}}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="flex">
        <div class="left">
            <div class="image">
                <img src="@/assets/Helsinki.webp" alt="helsinki">
            </div>
        </div>
        <div class="right">
            <div class="content">
                <div class="card">
                    <h1>{{$t('main-view-17')}}</h1>
                    <p>{{$t('main-view-18')}}</p>
                    <p>{{$t('main-view-19')}}</p>
                    <p>{{$t('main-view-20')}}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="flex">
        <div class="left">
            <div class="image">
                <img src="@/assets/Lapland.jpg" alt="lapland">
            </div>
        </div>
        <div class="right">
            <div class="content">
                <div class="card">
                    <h1>{{$t('main-view-21')}}</h1>
                    <p>{{$t('main-view-22')}}</p>
                    <p>{{$t('main-view-23')}}</p>
                    <p>{{$t('main-view-24')}}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="flex reverse">
        <div class="left">
            <div class="image">
                <img src="@/assets/Copenhagen.jpg" alt="copenhagen">
            </div>
        </div>
        <div class="right">
            <div class="content">
                <div class="card">
                    <h1>{{$t('main-view-25')}}</h1>
                    <p>{{$t('main-view-26')}}</p>
                    <p>{{$t('main-view-27')}}</p>
                    <p>{{$t('main-view-28')}}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="flex reverse">
        <div class="left">
            <div class="image">
                <img src="@/assets/Aarhus.jpg" alt="aarhus">
            </div>
        </div>
        <div class="right">
            <div class="content">
                <div class="card">
                    <h1>{{$t('main-view-29')}}</h1>
                    <p>{{$t('main-view-30')}}</p>
                    <p>{{$t('main-view-31')}}</p>
                </div>
            </div>
        </div>
    </div>
</div>


</template>

<script>
export default {

}
</script>

<style scoped>
.flex {
    margin-top: 2em;
    padding: 2em 0;
    display: flex;
    flex-direction: row;
    width: 100%;
}

.flex .left {
    flex: 0 0 50%;
    color: #fff;
}

.flex .left .image {
    padding-right: 1.5rem;
    position: sticky;
    top: 10px;
    transition: all 0.1s ease-in-out;
}

.flex .left .image:hover {
    transform: scale(1.03);
}

.flex .left img {
    border-radius: 2rem;
    aspect-ratio: 10/8;
}

.flex .right {
    flex: 0 0 50%;
}

.flex .right .content {
    padding: 0 2rem;
}

.flex .right .content .card {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
}

.flex .right .content .card h1 {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
}

.flex .right .content .card p {
    font-weight: 300;
}

.reverse {
    flex-direction: row-reverse;
}


@media (max-width: 1200px) {}

@media (max-width: 768px) {
    .flex {
        padding: 0 0;
        display: flex;
        flex-direction: column;
        gap: 3em;
        margin-top: 2em;
    }

    .reverse {
        flex-direction: column;
    }

    .flex .left .image {
        max-width: 80vw;
        margin: 0 auto;
        position: static;
        transition: all 0.1s ease-in-out;
    }
}

@media (max-width: 500px) {}

@media (max-width: 360px) {}
</style>