<template>
<div class="container">
  <div class="header">
    <div class="content cl">
      <!-- <span class="blur"></span> -->
      <h1 class="small">Your Key to the <span class="gradient-text variant">TON</span>niverse</h1>
      <h1>We are Bringing <span class="gradient-text variant">Innovation</span> to TON</h1>
      <!-- <input type="text" placeholder="AAPL" /> -->
      <a href="#roadmap" class="btn">Learn More</a>
      <!-- <span class="blur"></span> -->
    </div>
    <div class="image">
    </div>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>
.header {
  position: relative;
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-self: center;
  gap: 2rem;
}
.icon {
  position: absolute;
  z-index: -100;
}
.venus {
  width: 200px;
  top: 0px;
  left: 0px;
}
.header .content .small {
  margin-bottom: 0.5rem;
  color: var(--text);
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: 2px;
}
.header .content input {
  padding: 1.1rem 1rem;
  margin-right: 10px;
  border-radius: 15px;
  border: 1px solid var(--text);
}
.header .content h1 {
  color: var(--text);
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 2px;
  line-height: 4rem;
}
.header .content p {
  margin-bottom: 1rem;
  color: var(--text-soft);
}
.header .content a {
  display: inline-block;
  margin-bottom: 1rem;
}
.header .image {
  position: relative;
}
.header .image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 30rem;
  font-weight: 400;
  line-height: 20rem;
  color: rgb(37, 37, 253);
  opacity: 0.2;
  z-index: -100;
}
.header .image img {
  max-width: 600px;
  margin: auto;
}
@media screen and (max-width: 1024px) {
  .header {
    position: relative;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
  }
  .header .image img {
    max-width: 400px;
    margin: auto;
  }
}
</style>