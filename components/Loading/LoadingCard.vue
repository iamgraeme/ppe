<template>
  <div class="card">
    <div class="image loading"></div>
    <div class="bars">
      <div class="bar bar1 loading"></div>
      <div class="bar bar2 loading"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingCard"
};
</script>

<style scoped>
.card {
  width: 302px;
  height: 275px;
}
.card .image {
  background: #e9ebee;
  height: 207px;
}
.card .bars .bar {
  background: #e9ebee;
}
.card .bars .bar1 {
  width: 80%;
  height: 18px;
}
.card .bars .bar2 {
  width: 30%;
  height: 20px;
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
