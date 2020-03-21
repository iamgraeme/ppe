<template>
  <div class="container mx-auto">
    <div class="flex justify-between px-6 sm:px-0 mt-6 md:hidden">
      <button
        @click="isOpen = !isOpen"
        class="bg-purple-800 hover:bg-purple-400 rounded-full text-white px-3 md:hidden text-sm py-1 focus:outline-none"
      >
        Show Cart
      </button>
    </div>

    <div class="flex flex-col md:flex-row-reverse px-6 sm:px-0">
      <div
        :class="{ 'hidden ': !isOpen }"
        class="md:block mt-6 md:mt-0 w-12/12 md:w-6/12 lg:w-5/12 h-full bg-gray-200 md:sticky md:top-0"
      >
        <div>
          <div class="md:px-10 pt-6 md:pt-10">
            <h3
              class="text-center sm:text-left text-lg lg:text-3xl font-thin text-gray-600"
            >
              Order Summary
            </h3>
          </div>
          <div>
            <div v-for="item in cart" :key="item.id">
              <CartItem :item="item" />
            </div>
          </div>
          <div class="px-10 md:px-10 md:py-10 pb-6">
            <div class="flex justify-between">
              <h6 class="text-gray-500 text-sm lg:text-lg">Subtotal</h6>
              <p class="text-gray-500 text-sm lg:text-lg">
                {{ cartTotal | VatAmountFromNet }}
              </p>
            </div>
            <div class="flex justify-between">
              <h6 class="text-gray-500 text-sm lg:text-lg">Shipping</h6>
              <p class="text-gray-500 text-sm lg:text-lg">Free</p>
            </div>
            <div class="flex justify-between">
              <h6 class="text-gray-500 text-sm lg:text-lg">Tax</h6>
              <p class="text-gray-500 text-sm lg:text-lg">
                {{ cartTotal | VatAmountFromGross }}
              </p>
            </div>
            <div class="flex justify-between my-6">
              <h6 class="text-gray-700 text-2xl font-semibold">Total</h6>
              <p class="text-gray-700 text-2xl font-semibold">
                {{ cartTotal | pound }}
              </p>
            </div>
            <button
              @click="clearCart"
              class="bg-purple-800 text-white w-full hover:bg-purple-400 py-3 rounded-full"
            >
              Clear Cart
            </button>
          </div>
        </div>
        <div class="border-t border-gray-400">
          <div class="p-10">
            <p class="mb-6 font-thin text-gray-600 text-lg">Discount Code</p>
            <div class="flex-flex-col">
              <div class="flex">
                <input
                  type="text"
                  id="payment"
                  class="w-4/6 flex-1 text-xs lg:text-sm bg-white text-purple-800 rounded-l border border-grey-400 py-3 pl-3 focus:outline-none"
                  placeholder="Enter your Discount Code"
                />
                <input
                  type="submit"
                  id="coupon-submit"
                  class="w-2/6 inline-block text-xs lg:text-sm bg-purple-800 text-white hover:bg-purple-400 cursor-pointer rounded-r text-center py-3 focus:outline-none"
                  value="Add Discount"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-12/12 md:w-6/12 lg:w-7/12 md:pr-10">
        <h1 class="text-lg lg:text-3xl font-thin text-gray-600 mt-6 mb-6">
          Checkout
        </h1>
        <div class="md:mb-6">
          <SectionHeading number="1" title="Personal Details" />
          <div class="flex-flex-col">
            <div class="flex">
              <input
                type="text"
                class="mr-2 mb-3 border-gray-400 w-full py-3 focus:outline-none text-purple-800 text-sm focus:border-purple-400 border-b"
                placeholder="First Name"
              />
              <input
                type="text"
                class="ml-2 mb-3 border-b border-gray-400 w-full py-3 focus:outline-none text-purple-800 text-sm focus:border-purple-400"
                placeholder="Last Name"
              />
            </div>
            <input
              type="email"
              class="mb-3 border-b border-gray-400 w-full py-3 focus:outline-none text-purple-800 text-sm focus:border-purple-400"
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
                class="mr-2 mb-3 border-b border-gray-400 w-full py-3 focus:outline-none text-purple-800 text-sm focus:border-purple-400"
                placeholder="First Name"
              />
              <input
                type="text"
                class="ml-2 mb-3 border-b border-gray-400 w-full py-3 focus:outline-none text-purple-800 text-sm focus:border-purple-400"
                placeholder="Last Name"
              />
            </div>
            <input
              type="text"
              class="mb-3 border-b border-gray-400 w-full py-3 focus:outline-none text-purple-800 text-sm focus:border-purple-400"
              placeholder="Address Line 1"
            />
            <input
              type="text"
              class="mb-3 border-b border-gray-400 w-full py-3 focus:outline-none text-purple-800 text-sm focus:border-purple-400"
              placeholder="Address Line 2"
            />
            <div class="flex">
              <input
                type="text"
                class="mr-2 mb-3 border-b border-gray-400 w-full py-3 focus:outline-none text-purple-800 text-sm focus:border-purple-400"
                placeholder="City"
              />
              <input
                type="text"
                class="ml-2 mb-3 border-b border-gray-400 w-full py-3 focus:outline-none text-purple-800 text-sm focus:border-purple-400"
                placeholder="State"
              />
            </div>
            <input
              type="text"
              class="mb-3 border-b border-gray-400 w-full py-3 focus:outline-none text-purple-800 text-sm focus:border-purple-400"
              placeholder="Post Code"
            />
            <CountrySelect />
            <input
              type="text"
              class="mb-3 border-b border-gray-400 w-full py-3 focus:outline-none text-purple-800 text-sm focus:border-purple-400"
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
                class="w-5/6 flex-1 text-sm bg-white text-purple-800 rounded-l border-b border-grey-400 py-3 focus:outline-none text-sm"
                placeholder="Card Number"
              />
              <input
                type="text"
                id="payment"
                class="w-1/6 inline-block text-sm bg-white text-purple-800 border-b border-grey-400 py-3 focus:outline-none text-sm"
                placeholder="MM / YY"
              />
              <input
                type="text"
                id="payment"
                class="w-1/6 inline-block text-sm bg-white text-purple-800 rounded-r border-b border-grey-400 py-3 focus:outline-none text-sm"
                placeholder="CVC"
              />
            </div>
          </div>
        </div>

        <div class="md:mb-6 md:border-b md:border-gray-400">
          <div>
            <button
              class="bg-purple-800 mb-10 flex justify-center hover:bg-purple-400 rounded-full w-full py-3 px-6 text-white focus:outline-none text-sm focus:shadow-outline"
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
          <h1 class="text-xl lg:text-3xl font-thin text-gray-600 my-8">
            What Our Customers Say...
          </h1>

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
    clearCart() {}
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["cartTotal"])
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
