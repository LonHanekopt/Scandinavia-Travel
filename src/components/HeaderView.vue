<template>
<div class="bg">
    <div class="wrapper container">
        <h1>{{$t('header-view-1')}}</h1>
        <p>{{$t('header-view-2')}}</p>
        <div class="button">
            <a class="btn yellow" href="#learn-more">
                {{$t('header-view-3')}}
            </a>
        </div>
    </div>
</div>

</template>
<script>
export default {
  // Component data and methods
}
</script>
<style scoped>
.bg {
  background-image: linear-gradient(rgba(1, 1, 1, 0.5), rgba(1, 1, 1, 0.5)), url('@/assets/alberta.jpg');
  color: #fff;
  background-position: center;
  height: 80vh;
  padding: 3em 0;
  background-attachment: scroll;
}
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
.wrapper h1 {
  width: 100%;
  letter-spacing: 2px;
}
.wrapper p {
  letter-spacing: 1px;
  font-size: 1.1rem;
  font-weight: 300;
  width: 65%;
}
@media (max-width: 1200px) {
}
@media (max-width: 800px) {
  .bg {
    height: auto;
    padding: 3rem 0;
  }
}
@media (max-width: 500px) {
}
</style>