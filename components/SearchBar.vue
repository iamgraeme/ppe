<template>
  <div class="bg-white w-full z-50 py-8 absolute" style="top:104px">
    <div class="container mx-auto">
      <div class="bg-gray-200 w-full rounded-full flex items-center">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search all products here..."
          class="bg-transparent flex-1 rounded-full text-lg focus:outline-none pl-12 text-gray-600 pt-3 pb-3 pr-3"
        />
        <button
          class="flex w-12 h-12 bg-purple-800 hover:bg-purple-400 rounded-full justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            class="fill-current font-semibold text-white w-5 h-5"
          >
            <path
              d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar"
};
</script>
