<template>
  <div>
    <span
      v-if="status === 'completed'"
      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800"
    >Completed</span>
    <span
      v-if="status === 'failed'"
      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"
    >Failed</span>
    <span
      v-if="status === 'processing'"
      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
    >Processing</span>
    <span
      v-if="status === 'cancelled'"
      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800"
    >Cancelled</span>
    <span
      v-if="status === 'on-hold'"
      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800"
    >On Hold</span>
    <span
      v-if="status === 'pending'"
      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800"
    >Pending Payment</span>
  </div>
</template>

<script>
export default {
  name: "OrderStatus",
  props: {
    status: String
  }
};
</script>