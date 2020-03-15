<template>
  <div class="flex">
    <div class="w-1/2 flex flex-col">
      <form action>
        <input
          class="border w-full rounded border-gray-300 focus:outline-none focus:border-purple-800 p-3 mb-3"
          type="text"
          placeholder="Full Name"
        />
        <input
          class="border w-full rounded border-gray-300 focus:outline-none focus:border-purple-800 p-3 mb-3"
          type="text"
          placeholder="Email"
        />
        <input
          class="border w-full rounded border-gray-300 focus:outline-none focus:border-purple-800 p-3 mb-3"
          type="text"
          placeholder="Review Title"
        />
        <textarea
          rows="10"
          placeholder="Write Your Review"
          class="border w-full border-gray-300 resize-none rounded-lg focus:outline-none focus:border-purple-800 p-3 mb-3"
        ></textarea>
        <input
          type="submit"
          value="Add Review"
          class="bg-purple-800 hover:bg-purple-400 text-white py-4 px-10 rounded-full"
        />
      </form>
    </div>
    <div class="w-1/2"></div>
  </div>
</template>

<script>
export default {
  name: "ReviewForm"
};
</script>