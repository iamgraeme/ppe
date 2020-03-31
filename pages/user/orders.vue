<template>
  <div class="w-full">
    <PageHeading title="Previous Orders" />
    <div v-if="previousOrders.length === 0">
      <p class="text-center mt-32 text-xl text-gray-500 font-light">
        You havent placed any orders yet, please click
        <nuxt-link class="text-purple-800 hover:text-purple-400" to="/">here to start shopping.</nuxt-link>
      </p>
    </div>
    <div class="flex flex-col" v-else>
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 mb-32">
        <div
          class="align-middle inline-block min-w-full overflow-hidden sm:rounded-lg border-b border-gray-200"
        >
          <table class="min-w-full">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >Order Number</th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >Item</th>
                <th
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >Status</th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr v-for="order in previousOrders" :key="order.id">
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                    <div>
                      <div
                        class="text-sm leading-5 font-medium text-gray-900"
                      >Order Number: {{order.number}}</div>
                      <div class="text-sm leading-5 text-gray-500">{{order.billing.email}}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="text-sm leading-5 text-gray-900">
                    <ul>
                      <li v-for="item in order.line_items" :key="item.id">{{item.name}}</li>
                    </ul>
                  </div>
                  <div class="text-sm leading-5 text-gray-500">{{parseInt(order.total) | pound}}</div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <OrderStatus :status="order.status" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PageHeading from "@/components/PageHeading";
import OrderStatus from "@/components/OrderStatus";
export default {
  layout: "user",
  transition: "slide-fade",
  components: {
    PageHeading,
    OrderStatus
  },
  data: () => ({
    isLoading: true
  }),
  computed: {
    ...mapGetters("users", ["loggedInUser"]),
    ...mapGetters("customer", ["previousOrders"])
  },
  async mounted() {
    console.log(this.loggedInUser.id);
    await this.$store
      .dispatch("customer/getCustomerPreviousOrders", this.loggedInUser.id)
      .then((this.isLoading = false))
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
