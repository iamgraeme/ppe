<template>
  <img class="logo w-48 lg:w-full" src="@/assets/images/logo.svg" alt="Purple People Eater" />
</template>
<style scoped>
.logo {
  animation: 1s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
