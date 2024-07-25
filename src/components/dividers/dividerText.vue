<template>
  <div class="bg">
    <div class="heading">
        <h1>{{$t('divider-text-1')}}</h1>
        <p>{{$t('divider-text-2')}}</p>
    </div>
</div>

</template>
<script>
export default {
  data() {
    return {
      title: 'Airport Transportation',
    };
  }
}
</script>
<style scoped>
.bg {
  background-image: linear-gradient(rgba(1, 1, 1, 0.3), rgba(1, 1, 1, 0.3)), url('@/assets/cliffs.jpg');
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
  color: var(--white);
  height: 68vh;
}

.bg .heading {
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

@media screen and (max-width: 800px) {
  .bg .heading {
    width: 75vw;
  }
}
</style>