<template>
  <img class="h-12 md:h-16 logo" src="@/assets/images/logo.svg" alt="Purple People Eater" />
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
