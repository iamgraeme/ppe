<template>
  <div class="container mx-auto">
    <div class="flex justify-between px-6 mt-6 sm:px-0 md:hidden">
      <button
        @click="isOpen = !isOpen"
        class="px-3 py-1 text-sm text-white bg-purple-800 rounded-full hover:bg-purple-400 md:hidden focus:outline-none"
      >Show Cart</button>
    </div>

    <div class="flex flex-col px-6 md:flex-row-reverse sm:px-0">
      <div
        :class="{ 'hidden ': !isOpen }"
        class="h-full mt-6 bg-gray-200 md:block md:mt-0 w-12/12 md:w-6/12 lg:w-5/12 md:sticky md:top-0"
      >
        <div v-if="cart.length > 0">
          <div class="pt-6 md:px-10 md:pt-10">
            <h3
              class="mb-6 text-lg font-thin text-center text-gray-600 sm:text-left lg:text-3xl"
            >Order Summary</h3>
            <p class="text-gray-600">{{cartCount | pluralizeCart }}</p>
          </div>
          <div>
            <div v-for="item in cart" :key="item.id">
              <CartItem :item="item" />
            </div>
          </div>
          <div class="px-10 pb-6 md:px-10 md:py-10">
            <div class="flex justify-between">
              <h6 class="text-sm text-gray-500 lg:text-lg">Subtotal</h6>
              <p class="text-sm text-gray-500 lg:text-lg">{{ cartTotal | VatAmountFromNet }}</p>
            </div>
            <div class="flex justify-between">
              <h6 class="text-sm text-gray-500 lg:text-lg">Shipping</h6>
              <p class="text-sm text-gray-500 lg:text-lg">Free</p>
            </div>
            <div class="flex justify-between">
              <h6 class="text-sm text-gray-500 lg:text-lg">Tax</h6>
              <p class="text-sm text-gray-500 lg:text-lg">{{ cartTotal | VatAmountFromGross }}</p>
            </div>
            <div class="flex justify-between my-6">
              <h6 class="text-2xl font-semibold text-gray-700">Total</h6>
              <p class="text-2xl font-semibold text-gray-700">{{ cartTotal | pound }}</p>
            </div>
            <button
              @click="clearCart"
              class="w-full py-3 text-white bg-purple-800 rounded-full hover:bg-purple-400 focus:outline-none"
            >Clear Cart</button>
          </div>
        </div>
        <div v-else>
          <div class="pt-6 md:px-10 md:pt-10">
            <h3
              class="text-lg font-thin text-center text-gray-600 sm:text-left lg:text-3xl"
            >Cart is Empty</h3>
            <p class="my-10 text-gray-600">
              Please contine shopping by clicking
              <nuxt-link class="text-purple-800 hover:text-purple-400" to="/">here.</nuxt-link>
            </p>
          </div>
        </div>
        <div class="border-t border-gray-400">
          <div class="p-10">
            <p class="mb-6 text-lg font-thin text-gray-600">Discount Code</p>
            <div class="flex-flex-col">
              <div class="flex">
                <input
                  type="text"
                  id="payment"
                  class="flex-1 w-4/6 py-3 pl-3 text-xs text-purple-800 bg-white border rounded-l lg:text-sm border-grey-400 focus:outline-none"
                  placeholder="Enter your Discount Code"
                />
                <input
                  type="submit"
                  id="coupon-submit"
                  class="inline-block w-2/6 py-3 text-xs text-center text-white bg-purple-800 rounded-r cursor-pointer lg:text-sm hover:bg-purple-400 focus:outline-none"
                  value="Add Discount"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-12/12 md:w-6/12 lg:w-7/12 md:pr-10">
        <h1 class="mt-6 mb-6 text-lg font-thin text-gray-600 lg:text-3xl">Checkout</h1>
        <div class="md:mb-6">
          <SectionHeading number="1" title="Personal Details" />
          <div class="flex-flex-col">
            <div class="flex">
              <input
                type="text"
                class="w-full py-3 mb-3 mr-2 text-sm text-purple-800 border-b border-gray-400 focus:outline-none focus:border-purple-400"
                placeholder="First Name"
              />
              <input
                type="text"
                class="w-full py-3 mb-3 ml-2 text-sm text-purple-800 border-b border-gray-400 focus:outline-none focus:border-purple-400"
                placeholder="Last Name"
              />
            </div>
            <input
              type="email"
              class="w-full py-3 mb-3 text-sm text-purple-800 border-b border-gray-400 focus:outline-none focus:border-purple-400"
              placeholder="Email Address"
            />
          </div>
        </div>
        <div class="mb-6">
          <SectionHeading number="2" title="Delivery Details" />
          <div class="flex-flex-col">
            <div class="flex">
              <input
                type="text"
                class="w-full py-3 mb-3 mr-2 text-sm text-purple-800 border-b border-gray-400 focus:outline-none focus:border-purple-400"
                placeholder="First Name"
              />
              <input
                type="text"
                class="w-full py-3 mb-3 ml-2 text-sm text-purple-800 border-b border-gray-400 focus:outline-none focus:border-purple-400"
                placeholder="Last Name"
              />
            </div>
            <input
              type="text"
              class="w-full py-3 mb-3 text-sm text-purple-800 border-b border-gray-400 focus:outline-none focus:border-purple-400"
              placeholder="Address Line 1"
            />
            <input
              type="text"
              class="w-full py-3 mb-3 text-sm text-purple-800 border-b border-gray-400 focus:outline-none focus:border-purple-400"
              placeholder="Address Line 2"
            />
            <div class="flex">
              <input
                type="text"
                class="w-full py-3 mb-3 mr-2 text-sm text-purple-800 border-b border-gray-400 focus:outline-none focus:border-purple-400"
                placeholder="City"
              />
              <input
                type="text"
                class="w-full py-3 mb-3 ml-2 text-sm text-purple-800 border-b border-gray-400 focus:outline-none focus:border-purple-400"
                placeholder="State"
              />
            </div>
            <input
              type="text"
              class="w-full py-3 mb-3 text-sm text-purple-800 border-b border-gray-400 focus:outline-none focus:border-purple-400"
              placeholder="Post Code"
            />
            <CountrySelect />
            <input
              type="text"
              class="w-full py-3 mb-3 text-sm text-purple-800 border-b border-gray-400 focus:outline-none focus:border-purple-400"
              placeholder="Phone"
            />
          </div>
        </div>
        <div class="mb-6">
          <SectionHeading number="3" title="Payment Details" />
          <div class="flex-flex-col">
            <div class="flex">
              <input
                type="text"
                id="payment"
                class="flex-1 w-5/6 py-3 text-sm text-purple-800 bg-white border-b rounded-l border-grey-400 focus:outline-none"
                placeholder="Card Number"
              />
              <input
                type="text"
                id="payment"
                class="inline-block w-1/6 py-3 text-sm text-purple-800 bg-white border-b border-grey-400 focus:outline-none"
                placeholder="MM / YY"
              />
              <input
                type="text"
                id="payment"
                class="inline-block w-1/6 py-3 text-sm text-purple-800 bg-white border-b rounded-r border-grey-400 focus:outline-none"
                placeholder="CVC"
              />
            </div>
          </div>
        </div>

        <div class="md:mb-6 md:border-b md:border-gray-400">
          <div>
            <button
              class="flex justify-center w-full px-6 py-3 mb-10 text-sm text-white bg-purple-800 rounded-full hover:bg-purple-400 focus:outline-none focus:shadow-outline"
              type="submit"
              @click="addingToCart = !addingToCart"
            >
              <div v-if="addingToCart">
                <Loader class="w-10 h-10" />
              </div>
              <div v-else>Place Order</div>
            </button>
          </div>
        </div>
        <div class="hidden md:block">
          <h1 class="my-8 text-xl font-thin text-gray-600 lg:text-3xl">What Our Customers Say...</h1>

          <no-ssr>
            <carousel items="1" autoplay="true" :dots="true" :nav="false">
              <Quote
                name="Brandon Walker"
                body="Purple People Eater have a great selection of beds and matresses. Delivery was quick. Customer service second to none. Definetly recommending these guys to friends and family."
                location="Manchester, UK"
                image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
              />
              <Quote
                name="Lizzy Smith"
                body="Purple People Eater have a great selection of beds and matresses. Delivery was quick. Customer service second to none. Definetly recommending these guys to friends and family."
                location="Glasgow, UK"
                image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              />
              <Quote
                name="Franc Guillemot"
                body="Purple People Eater have a great selection of beds and matresses. Delivery was quick. Customer service second to none. Definetly recommending these guys to friends and family."
                location="London, UK"
                image="https://images.unsplash.com/photo-1544098485-2a2ed6da40ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              />
            </carousel>
          </no-ssr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
import PageHeading from "@/components/PageHeading";
import InfoItem from "@/components/Checkout/InfoItem";
import SectionHeading from "@/components/Checkout/SectionHeading";
import CountrySelect from "@/components/Checkout/CountrySelect";
import CartItem from "@/components/Checkout/CartItem";
import Quote from "@/components/Checkout/Quote";
import Loader from "@/components/Loader";
export default {
  transition: "slide-fade",
  layout: "checkout",
  data: () => ({
    isOpen: false,
    addingToCart: false
  }),
  methods: {
    clearCart() {
      this.$store.dispatch("clearTheCart").catch(err => {
        console.log(err);
      });
    }
  },
  filters: {
    pluralizeCart(count) {
      return count > 1
        ? `There is ${count} items in your basket.`
        : `There is ${count} item in your basket.`;
    }
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["cartTotal", "cartCount"])
  },
  components: {
    PageHeading,
    InfoItem,
    SectionHeading,
    CartItem,
    CountrySelect,
    Quote,
    Loader
  }
};
</script>
