<template>
  <div class="page">
    <div class="title loading"></div>
    <hr class="my-10" />
    <div class="bars">
      <div class="bar bar-purple loading"></div>
      <div class="bar loading"></div>
      <div class="bar loading"></div>
      <div class="bar loading"></div>
      <div class="bar loading"></div>
      <div class="bar loading"></div>
      <div class="bar loading"></div>
      <div class="bar loading"></div>
      <div class="bar loading"></div>
      <div class="bar loading"></div>
      <div class="bar loading"></div>
      <div class="bar loading"></div>
      <div class="bar loading"></div>
      <div class="bar loading"></div>
      <div class="bar loading"></div>
      <div class="bar loading"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingPage"
};
</script>

<style scoped>
.page {
  width: 100%;
}
.page .title {
  height: 45px;
  width: 40%;
  margin: 40px 0 40px 0;
}
.page .bars .bar {
  background: #e9ebee;
  width: 100%;
  height: 21px;
  margin-bottom: 21px;
}

.loading {
  position: relative;
  overflow: hidden;
}
.loading::after {
  content: "";
  display: block;
  background-color: #dddfe2;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  transform: translateX(0);
  animation: 1.5s loading-placeholder ease-in-out infinite;
}
@keyframes loading-placeholder {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
