<template>
  <div>
    <div class="mb-24">
      <no-ssr>
        <carousel items="1" :autoplay="true" :dots="false" :nav="false">
          <img src="https://placeimg.com/1000/300/arch?1" />
          <img src="https://placeimg.com/1000/300/arch?2" />
          <img src="https://placeimg.com/1000/300/arch?3" />
          <img src="https://placeimg.com/1000/300/arch?4" />
        </carousel>
      </no-ssr>
    </div>
    <div class="container mx-auto">
      <div>
        <div class="flex justify-between items-center mb-6 px-4">
          <div>
            <h3 class="text-2xl text-gray-600">Our Bedstead Range</h3>
          </div>
          <div>
            <nuxt-link
              to="/category/18/bedsteads"
              class="border border-gray-400 rounded-full text-gray-800 uppercase text-xs font-semibold py-2 px-4 hover:border-purple-400 hover:text-black"
            >Show All</nuxt-link>
          </div>
        </div>
        <div>
          <no-ssr>
            <carousel items="4" :nav="false" :dots="false">
              <ProductCard productName="Brooklyn" price="1999.99" />
              <ProductCard productName="Brooklyn" price="1999.99" salePrice="699.99" />
              <ProductCard productName="Brooklyn" price="1999.99" />
              <ProductCard productName="Brooklyn" price="1999.99" />
              <ProductCard productName="Brooklyn" price="1999.99" />
              <ProductCard productName="Brooklyn" price="1999.99" :onSale="1" salePrice="699.99" />
            </carousel>
          </no-ssr>
        </div>
      </div>
    </div>
    <div>
      <Cta />
    </div>
    <div class="py-10 border-b border-gray-300">
      <div class="container mx-auto">
        <h3 class="text-center text-3xl text-gray-600 font-thin mb-20">Why should you choose us?</h3>
        <div class="flex justify-between">
          <div class="w-1/4 mb-10">
            <img class="mb-10" src="@/assets/images/free-shipping.svg" alt="Free Delivery" />
            <h5 class="font-semibold text-gray-700 mb-3">Free Delivery</h5>
            <p
              class="text-sm text-gray-600 mr-10"
            >All purchases over £399 are eligible for free delivery.</p>
          </div>
          <div class="w-1/4 mb-10">
            <img class="mb-10" src="@/assets/images/payments.svg" alt="Free Delivery" />
            <h5 class="font-semibold text-gray-700 mb-3">Hassle Free Payments</h5>
            <p class="text-sm text-gray-600 mr-10">
              All payments are processed instantly over a secure payment
              protocol.
            </p>
          </div>
          <div class="w-1/4 mb-10">
            <img class="mb-10" src="@/assets/images/money-back.svg" alt="Free Delivery" />
            <h5 class="font-semibold text-gray-700 mb-3">Money Back Guaruntee</h5>
            <p class="text-sm text-gray-600 mr-10">
              If an item arrived damaged, you can send it back for a full
              refund.
            </p>
          </div>
          <div class="w-1/4 mb-10">
            <img class="mb-10" src="@/assets/images/finest-quality.svg" alt="Free Delivery" />
            <h5 class="font-semibold text-gray-700 mb-3">Finest Quality</h5>
            <p class="text-sm text-gray-600 mr-10">
              Designed to last, each of our products has been crafted with the
              finest materials.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto py-10">
      <div>
        <div class="flex justify-between items-center mb-6 px-4">
          <div>
            <h3 class="text-2xl text-gray-600">Our Bedstead Range</h3>
          </div>
          <div>
            <nuxt-link
              to="/category/18/bedsteads"
              class="border border-gray-400 rounded-full text-gray-800 uppercase text-xs font-semibold py-2 px-4 hover:border-purple-400 hover:text-black"
            >Show All</nuxt-link>
          </div>
        </div>
        <div>
          <no-ssr>
            <carousel items="4" :nav="false" :dots="false">
              <ProductCard productName="Brooklyn" price="1999.99" />
              <ProductCard productName="Brooklyn" price="1999.99" salePrice="699.99" />
              <ProductCard productName="Brooklyn" price="1999.99" />
              <ProductCard productName="Brooklyn" price="1999.99" />
              <ProductCard productName="Brooklyn" price="1999.99" />
              <ProductCard productName="Brooklyn" price="1999.99" :onSale="1" salePrice="699.99" />
            </carousel>
          </no-ssr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeading from "@/components/PageHeading";
import ProductCard from "@/components/ProductCard";
import Cta from "@/components/Cta";
export default {
  components: {
    PageHeading,
    ProductCard,
    Cta
  }
};
</script>
