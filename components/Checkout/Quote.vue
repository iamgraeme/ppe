<template>
  <div class="bg-white rounded p-6 border border-gray-200 mb-6 relative">
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        class="fill-current text-gray-300 absolute right-5 top-5 w-12 h-12"
      >
        <path d="M12 34h6l4-8V14H10v12h6zm16 0h6l4-8V14H26v12h6z" />
        <path fill="none" d="M0 0h48v48H0z" />
      </svg>
    </span>
    <div class="flex flex-col lg:flex-row text-center lg:text-left items-center">
      <div class="rounded-full w-32 h-32 overflow-hidden mr-6 mb-6 lg:mb-0">
        <img class="object-cover h-32 w-auto" :src="image" />
      </div>
      <div class="flex flex-col flex-1 mb-3">
        <h5 class="text-lg font-semibold mb-3 text-gray-600">{{name}}</h5>
        <p class="text-sm text-gray-600">{{body}}</p>
        <div class="flex items-center mt-3 mx-auto lg:mx-0">
          <span class="mr-1">
            <svg
              class="fill-current text-purple-800 w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 20S3 10.87 3 7v.00000106c-5.8e-7-3.86599 3.13401-7 7-7 3.86599-5.9e-7 7 3.13401 7 7 0 3.87-7 13-7 13zm0-11h-9e-8c1.10457 5e-8 2-.89543 2-2 5e-8-1.10457-.89543-2-2-2h-8e-8c-1.10457 5e-8-2 .895431-2 2 4e-8 1.10457.895431 2 2 2z"
              />
            </svg>
          </span>
          <p class="text-sm text-purple-800">{{location}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quote",
  props: {
    name: String,
    body: String,
    location: String,
    image: String
  }
};
</script>

<style scoped>
</style>