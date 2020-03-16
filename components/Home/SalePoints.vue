<template>
  <div class="py-10 border-b border-gray-300">
    <div class="container mx-auto px-6 md:px-0">
      <h3 class="text-center text-3xl text-gray-600 font-thin mb-20">
        Why should you choose us?
      </h3>
      <div class="flex flex-wrap justify-between">
        <div
          class="w-1/2 md:w-1/4 mb-10 flex items-center md:items-start flex-col text-center md:text-left px-6 md:px-0"
        >
          <img
            class="mb-10"
            src="@/assets/images/free-shipping.svg"
            alt="Free Delivery"
          />
          <h5 class="font-semibold text-gray-700 mb-3 text-sm lg:text-lg">
            Free Delivery
          </h5>
          <p class="text-sm text-gray-600 md:mr-10">
            All purchases over £399 are eligible for free delivery.
          </p>
        </div>
        <div
          class="w-1/2 md:w-1/4 mb-10 flex items-center md:items-start flex-col text-center md:text-left px-6 md:px-0"
        >
          <img
            class="mb-10"
            src="@/assets/images/payments.svg"
            alt="Free Delivery"
          />
          <h5 class="font-semibold text-gray-700 mb-3 text-sm lg:text-lg">
            Hassle Free Payments
          </h5>
          <p class="text-sm text-gray-600 md:mr-10">
            All payments are processed instantly over a secure payment protocol.
          </p>
        </div>
        <div
          class="w-1/2 md:w-1/4 mb-10 flex items-center md:items-start flex-col text-center md:text-left px-6 md:px-0"
        >
          <img
            class="mb-10"
            src="@/assets/images/money-back.svg"
            alt="Free Delivery"
          />
          <h5 class="font-semibold text-gray-700 mb-3 text-sm lg:text-lg">
            Money Back Guaruntee
          </h5>
          <p class="text-sm text-gray-600 md:mr-10">
            If an item arrived damaged, you can send it back for a full refund.
          </p>
        </div>
        <div
          class="w-1/2 md:w-1/4 mb-10 flex items-center md:items-start flex-col text-center md:text-left px-6 md:px-0"
        >
          <img
            class="mb-10"
            src="@/assets/images/finest-quality.svg"
            alt="Free Delivery"
          />
          <h5 class="font-semibold text-gray-700 mb-3 text-sm lg:text-lg">
            Finest Quality
          </h5>
          <p class="text-sm text-gray-600 md:mr-10">
            Designed to last, each of our products has been crafted with the
            finest materials.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SalePoints"
};
</script>
