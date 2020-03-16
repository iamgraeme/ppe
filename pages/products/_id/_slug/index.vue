<template>
  <div>
    <div>
      <div v-if="isLoading" class="h-64 flex justify-center items-center">
        <Loader />
      </div>
      <div v-else>
        <div class="lg:mt-16">
          <div class="bg-white md:hidden sticky top-0 relative z-20">
            <div
              class="container mx-auto flex justify-between items-center px-6 sm:px-0"
            >
              <h1 class="text-3xl font-light text-gray-600 py-3 md:py-0">
                {{ product.name }}
              </h1>
              <div>
                <div v-if="product.sale_price" class="flex">
                  <p class="text-3xl font-normal text-purple-800 mb-2 mr-3">
                    £{{ product.regular_price }}.00
                  </p>
                  <p
                    class="text-3xl font-normal text-gray-500 mb-2 line-through"
                  >
                    £{{ product.sale_price }}.00
                  </p>
                </div>
                <div v-else>
                  <p class="text-3xl font-normal text-purple-800 mb-2">
                    £{{ product.price }}.00
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="container mx-auto flex pb-16 flex-col items-center md:items-start md:flex-row px-6 sm:px-0"
          >
            <div
              class="w-12/12 md:w-7/12 flex"
              v-if="product.images.length > 0"
            >
              <div class="w-3/12 md:w-2/12 flex flex-col">
                <div
                  class="mb-3"
                  v-for="image in product.images"
                  :key="image.id"
                >
                  <img
                    class="w-full pr-3 cursor-pointer"
                    :src="image.src"
                    :alt="image.name"
                  />
                </div>
              </div>
              <div class="w-9/12 md:w-10/12 relative">
                <StockStatus
                  class="md:hidden absolute right-20 top-20"
                  :stockStatus="product.stock_status"
                />
                <img
                  class="w-full md:pr-3"
                  :src="product.images[0].src"
                  :alt="product.name"
                />
              </div>
            </div>
            <div class="w-12/12 md:w-5/12 pl-3">
              <div class="hidden md:block">
                <div class="flex justify-between items-center">
                  <h1 class="text-3xl font-light text-gray-600 hidden md:block">
                    {{ product.name }}
                  </h1>
                  <StockStatus :stockStatus="product.stock_status" />
                </div>

                <div v-if="product.sale_price" class="flex">
                  <p class="text-3xl font-normal text-purple-800 mb-2 mr-3">
                    £{{ product.regular_price }}.00
                  </p>
                  <p
                    class="text-3xl font-normal text-gray-500 mb-2 line-through"
                  >
                    £{{ product.sale_price }}.00
                  </p>
                </div>
                <div v-else>
                  <p class="text-3xl font-normal text-purple-800 mb-2">
                    £{{ product.price }}.00
                  </p>
                </div>
              </div>
              <div class="border-t border-b border-gray-300 py-1 mb-2">
                <div class="flex items-center">
                  <div
                    v-if="product.rating_count === 0 && product.reviews_allowed"
                  >
                    <a
                      href="#"
                      class="text-sm text-gray-500"
                      v-scroll-to="{
                        el: '#addReview',
                        duration: 300,
                        easing: 'linear',
                        force: true,
                        cancelable: true,
                        onStart: onStart,
                        onDone: onDone,
                        onCancel: onCancel,
                        x: false,
                        y: true
                      }"
                      >Write a Review?</a
                    >
                  </div>
                  <div v-else class="flex items-center">
                    <a
                      href="#"
                      v-scroll-to="{
                        el: '#addReview',
                        duration: 300,
                        easing: 'linear',
                        force: true,
                        cancelable: true,
                        onStart: onStart,
                        onDone: onDone,
                        onCancel: onCancel,
                        x: false,
                        y: true
                      }"
                      class="text-sm mr-2 text-gray-500 mr-4"
                      >{{ product.rating_count | pluralize }}</a
                    >
                    <span class="text-sm mr-2 text-gray-500">|</span>
                    <div class="flex items-center ml-4">
                      <p class="text-sm mr-2 text-gray-500 font-semibold">
                        {{ Math.round(product.average_rating * 100) / 100 }}/5
                      </p>

                      <star-rating
                        :rating="product.average_rating"
                        active-color="#FFAE00"
                        :star-size="17"
                        :show-rating="false"
                        :padding="2"
                        increment="0.5"
                      ></star-rating>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  v-html="product.description"
                  class="text-sm text-gray-500 leading-loose"
                ></div>
              </div>
              <div class="border-t border-b border-gray-300 py-3 mb-2 mt-10">
                <div class="flex items-center justify-center">
                  <SocialIcons />
                </div>
              </div>
              <div>
                <fieldset id="bed-size" class="mb-6">
                  <div class="flex justify-between mb-6">
                    <h4 class="mb-6">
                      Choose a size:
                      <span class="text-gray-600">
                        {{ item.bedsize | prettify }}
                      </span>
                    </h4>
                    <button
                      @click="showModal"
                      class="text-white bg-gray-600 cursor-pointer hover:bg-purple-400 rounded-full focus:outline-none px-4 h-6 "
                    >
                      Size Guide
                    </button>
                  </div>
                  <div class="flex items-center">
                    <label class="mr-3">
                      <input
                        type="radio"
                        value="single"
                        name="bed-size"
                        checked="checked"
                        v-model="item.bedsize"
                      />
                      <img src="@/assets/images/system/single.svg" />
                    </label>
                    <label class="mr-3">
                      <input
                        type="radio"
                        v-model="item.bedsize"
                        value="small-double"
                        name="bed-size"
                      />
                      <img src="@/assets/images/system/double.svg" />
                    </label>
                    <label class="mr-3">
                      <input
                        type="radio"
                        v-model="item.bedsize"
                        value="double"
                        name="bed-size"
                      />
                      <img src="@/assets/images/system/46Double.svg" />
                    </label>
                    <label class="mr-3">
                      <input
                        type="radio"
                        v-model="item.bedsize"
                        value="king"
                        name="bed-size"
                      />
                      <img src="@/assets/images/system/king.svg" />
                    </label>
                    <label class="mr-3">
                      <input
                        type="radio"
                        v-model="item.bedsize"
                        value="super-king"
                        name="bed-size"
                      />
                      <img src="@/assets/images/system/superking.svg" />
                    </label>
                  </div>
                </fieldset>

                <fieldset id="group2">
                  Choose fabric colour
                  <input type="radio" value="value1" name="group2" />
                  <input type="radio" value="value2" name="group2" />
                  <input type="radio" value="value3" name="group2" />
                </fieldset>
              </div>

              <div class="flex mt-6">
                <div
                  class="border border-gray-200 flex justify-center items-center rounded-full py-3 overflow-hidden mr-6"
                >
                  <button
                    class="text-gray-500 px-4 focus:outline-none hover:text-gray-700"
                    @click="item.qty > 1 ? item.qty-- : (item.qty = 1)"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    v-model="item.qty"
                    class="text-center w-16 text-gray-500 focus:outline-none"
                  />
                  <button
                    class="text-gray-500 px-4 focus:outline-none hover:text-gray-700"
                    @click="item.qty++"
                  >
                    +
                  </button>
                </div>
                <div>
                  <input
                    class="bg-purple-800 hover:bg-purple-400 cursor-pointer rounded-full py-3 px-6 text-white focus:outline-none text-sm focus:shadow-outline"
                    type="submit"
                    @click="cartAdd"
                    value="Add to Cart"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <Cta :title="product.name" :body="product.description" />
        </div>
        <div
          id="addReview"
          class="w-1/2 mx-auto pb-20 items-center flex flex-col"
        >
          <PageHeading title="Write a Review?" />
          <ReviewForm />
        </div>
      </div>
      <div class="py-24 border-t border-gray-300">
        <div class="mx-auto container">
          <no-ssr>
            <carousel
              items="4"
              :nav="false"
              :dots="false"
              :responsive="{
                0: { items: 1, nav: false },
                375: { items: 2, nav: false },
                640: { items: 3, nav: false },
                767: { items: 4, nav: false }
              }"
            >
              <ProductCard
                v-for="product in products"
                :key="product.id"
                :id="product.id"
                :slug="product.slug"
                :productName="product.name"
                :price="product.price"
                :regularPrice="product.regular_price"
                :salePrice="product.sale_price"
                :image="product.images[0].src"
              />
            </carousel>
          </no-ssr>
        </div>
      </div>
    </div>
    <Modal productType="ottoman" v-show="isModalVisible" @close="closeModal" />
  </div>
</template>

<script>
import PageHeading from "@/components/PageHeading";
import SocialIcons from "@/components/SocialIcons";
import Loader from "@/components/Loader";
import ReviewForm from "@/components/ReviewForm";
import Modal from "@/components/Modal";
import StockStatus from "@/components/StockStatus";
import ProductCard from "@/components/ProductCard";
import StarRating from "vue-star-rating/src/star-rating.vue";
import axios from "axios";
import OAuth from "oauth-1.0a";
import CryptoJS from "crypto-js";
import jQuery from "jquery";
import Cta from "@/components/Cta";
export default {
  transition: "slide-fade",
  head: () => ({
    title: "Purple People Eater"
  }),
  components: {
    PageHeading,
    Modal,
    ProductCard,
    SocialIcons,
    StarRating,
    Cta,
    Loader,
    ReviewForm,
    StockStatus
  },
  data: () => ({
    product: {},
    isLoading: true,
    isModalVisible: false,
    tempcart: [],
    item: {
      qty: 1,
      bedsize: "single"
    },
    products: [
      {
        id: 64,
        name: "Patient Ninja",
        slug: "patient-ninja",
        permalink: "https://api.purplepeopleeater.co.uk/product/patient-ninja/",
        date_created: "2020-03-10T18:57:15",
        date_created_gmt: "2020-03-10T18:57:15",
        date_modified: "2020-03-10T18:57:15",
        date_modified_gmt: "2020-03-10T18:57:15",
        type: "simple",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        short_description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        sku: "HOODIE-PATIENT-NINJA",
        price: "35",
        regular_price: "35",
        sale_price: "",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>35.00</span>',
        on_sale: false,
        purchasable: true,
        total_sales: 0,
        virtual: false,
        downloadable: false,
        downloads: [],
        download_limit: 0,
        download_expiry: 0,
        external_url: "",
        button_text: "",
        tax_status: "taxable",
        tax_class: "",
        manage_stock: false,
        stock_quantity: null,
        stock_status: "instock",
        backorders: "no",
        backorders_allowed: false,
        backordered: false,
        sold_individually: false,
        weight: "",
        dimensions: {
          length: "",
          width: "",
          height: ""
        },
        shipping_required: true,
        shipping_taxable: true,
        shipping_class: "",
        shipping_class_id: 0,
        reviews_allowed: true,
        average_rating: "0.00",
        rating_count: 0,
        related_ids: [13, 17, 52, 43, 55],
        upsell_ids: [],
        cross_sell_ids: [25],
        parent_id: 0,
        purchase_note: "",
        categories: [
          {
            id: 17,
            name: "Mattresses",
            slug: "mattresses"
          }
        ],
        tags: [],
        images: [
          {
            id: 62,
            date_created: "2020-03-10T18:57:14",
            date_created_gmt: "2020-03-10T18:57:14",
            date_modified: "2020-03-10T18:57:14",
            date_modified_gmt: "2020-03-10T18:57:14",
            src:
              "https://api.purplepeopleeater.co.uk/wp-content/uploads/2020/03/hoodie_3_front.jpg",
            name: "hoodie_3_front.jpg",
            alt: ""
          },
          {
            id: 63,
            date_created: "2020-03-10T18:57:15",
            date_created_gmt: "2020-03-10T18:57:15",
            date_modified: "2020-03-10T18:57:15",
            date_modified_gmt: "2020-03-10T18:57:15",
            src:
              "https://api.purplepeopleeater.co.uk/wp-content/uploads/2020/03/hoodie_3_back.jpg",
            name: "hoodie_3_back.jpg",
            alt: ""
          }
        ],
        attributes: [],
        default_attributes: [],
        variations: [],
        grouped_products: [],
        menu_order: 0,
        meta_data: [],
        _links: {
          self: [
            {
              href:
                "https://api.purplepeopleeater.co.uk/wp-json/wc/v3/products/64"
            }
          ],
          collection: [
            {
              href: "https://api.purplepeopleeater.co.uk/wp-json/wc/v3/products"
            }
          ]
        }
      },
      {
        id: 55,
        name: "Ship Your Idea",
        slug: "ship-your-idea",
        permalink:
          "https://api.purplepeopleeater.co.uk/product/ship-your-idea/",
        date_created: "2020-03-10T18:57:11",
        date_created_gmt: "2020-03-10T18:57:11",
        date_modified: "2020-03-10T18:57:11",
        date_modified_gmt: "2020-03-10T18:57:11",
        type: "simple",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        short_description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        sku: "POSTER-SHIP-YOUR-IDEA",
        price: "15",
        regular_price: "15",
        sale_price: "",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>15.00</span>',
        on_sale: false,
        purchasable: true,
        total_sales: 0,
        virtual: false,
        downloadable: false,
        downloads: [],
        download_limit: 0,
        download_expiry: 0,
        external_url: "",
        button_text: "",
        tax_status: "taxable",
        tax_class: "",
        manage_stock: false,
        stock_quantity: null,
        stock_status: "instock",
        backorders: "no",
        backorders_allowed: false,
        backordered: false,
        sold_individually: false,
        weight: "",
        dimensions: {
          length: "",
          width: "",
          height: ""
        },
        shipping_required: true,
        shipping_taxable: true,
        shipping_class: "",
        shipping_class_id: 0,
        reviews_allowed: true,
        average_rating: "0.00",
        rating_count: 0,
        related_ids: [17, 46, 25, 43, 26],
        upsell_ids: [21, 22],
        cross_sell_ids: [21, 22],
        parent_id: 0,
        purchase_note: "",
        categories: [
          {
            id: 17,
            name: "Mattresses",
            slug: "mattresses"
          }
        ],
        tags: [],
        images: [
          {
            id: 53,
            date_created: "2020-03-10T18:57:11",
            date_created_gmt: "2020-03-10T18:57:11",
            date_modified: "2020-03-10T18:57:11",
            date_modified_gmt: "2020-03-10T18:57:11",
            src:
              "https://api.purplepeopleeater.co.uk/wp-content/uploads/2020/03/poster_1_up.jpg",
            name: "poster_1_up.jpg",
            alt: ""
          },
          {
            id: 54,
            date_created: "2020-03-10T18:57:11",
            date_created_gmt: "2020-03-10T18:57:11",
            date_modified: "2020-03-10T18:57:11",
            date_modified_gmt: "2020-03-10T18:57:11",
            src:
              "https://api.purplepeopleeater.co.uk/wp-content/uploads/2020/03/Poster_1_flat.jpg",
            name: "Poster_1_flat.jpg",
            alt: ""
          }
        ],
        attributes: [],
        default_attributes: [],
        variations: [],
        grouped_products: [],
        menu_order: 0,
        meta_data: [],
        _links: {
          self: [
            {
              href:
                "https://api.purplepeopleeater.co.uk/wp-json/wc/v3/products/55"
            }
          ],
          collection: [
            {
              href: "https://api.purplepeopleeater.co.uk/wp-json/wc/v3/products"
            }
          ]
        }
      },
      {
        id: 52,
        name: "Flying Ninja",
        slug: "flying-ninja",
        permalink: "https://api.purplepeopleeater.co.uk/product/flying-ninja/",
        date_created: "2020-03-10T18:57:10",
        date_created_gmt: "2020-03-10T18:57:10",
        date_modified: "2020-03-10T18:57:10",
        date_modified_gmt: "2020-03-10T18:57:10",
        type: "simple",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        short_description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        sku: "POSTER-FLYING-NINJA",
        price: "12",
        regular_price: "15",
        sale_price: "12",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>15.00</span></del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>12.00</span></ins>',
        on_sale: true,
        purchasable: true,
        total_sales: 0,
        virtual: false,
        downloadable: false,
        downloads: [],
        download_limit: 0,
        download_expiry: 0,
        external_url: "",
        button_text: "",
        tax_status: "taxable",
        tax_class: "",
        manage_stock: false,
        stock_quantity: null,
        stock_status: "instock",
        backorders: "no",
        backorders_allowed: false,
        backordered: false,
        sold_individually: false,
        weight: "",
        dimensions: {
          length: "",
          width: "",
          height: ""
        },
        shipping_required: true,
        shipping_taxable: true,
        shipping_class: "",
        shipping_class_id: 0,
        reviews_allowed: true,
        average_rating: "0.00",
        rating_count: 0,
        related_ids: [55, 17, 13, 46, 25],
        upsell_ids: [],
        cross_sell_ids: [],
        parent_id: 0,
        purchase_note: "",
        categories: [
          {
            id: 17,
            name: "Mattresses",
            slug: "mattresses"
          }
        ],
        tags: [],
        images: [
          {
            id: 50,
            date_created: "2020-03-10T18:57:10",
            date_created_gmt: "2020-03-10T18:57:10",
            date_modified: "2020-03-10T18:57:10",
            date_modified_gmt: "2020-03-10T18:57:10",
            src:
              "https://api.purplepeopleeater.co.uk/wp-content/uploads/2020/03/poster_2_up.jpg",
            name: "poster_2_up.jpg",
            alt: ""
          },
          {
            id: 51,
            date_created: "2020-03-10T18:57:10",
            date_created_gmt: "2020-03-10T18:57:10",
            date_modified: "2020-03-10T18:57:10",
            date_modified_gmt: "2020-03-10T18:57:10",
            src:
              "https://api.purplepeopleeater.co.uk/wp-content/uploads/2020/03/Poster_2_flat.jpg",
            name: "Poster_2_flat.jpg",
            alt: ""
          }
        ],
        attributes: [],
        default_attributes: [],
        variations: [],
        grouped_products: [],
        menu_order: 0,
        meta_data: [],
        _links: {
          self: [
            {
              href:
                "https://api.purplepeopleeater.co.uk/wp-json/wc/v3/products/52"
            }
          ],
          collection: [
            {
              href: "https://api.purplepeopleeater.co.uk/wp-json/wc/v3/products"
            }
          ]
        }
      },
      {
        id: 49,
        name: "Premium Quality",
        slug: "premium-quality",
        permalink:
          "https://api.purplepeopleeater.co.uk/product/premium-quality/",
        date_created: "2020-03-10T18:57:09",
        date_created_gmt: "2020-03-10T18:57:09",
        date_modified: "2020-03-10T18:57:09",
        date_modified_gmt: "2020-03-10T18:57:09",
        type: "simple",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        short_description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        sku: "POSTER-PREMIUM-QUALITY",
        price: "12",
        regular_price: "15",
        sale_price: "12",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>15.00</span></del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>12.00</span></ins>',
        on_sale: true,
        purchasable: true,
        total_sales: 0,
        virtual: false,
        downloadable: false,
        downloads: [],
        download_limit: 0,
        download_expiry: 0,
        external_url: "",
        button_text: "",
        tax_status: "taxable",
        tax_class: "",
        manage_stock: false,
        stock_quantity: null,
        stock_status: "instock",
        backorders: "no",
        backorders_allowed: false,
        backordered: false,
        sold_individually: false,
        weight: "",
        dimensions: {
          length: "",
          width: "",
          height: ""
        },
        shipping_required: true,
        shipping_taxable: true,
        shipping_class: "",
        shipping_class_id: 0,
        reviews_allowed: true,
        average_rating: "0.00",
        rating_count: 0,
        related_ids: [13, 64, 43, 55, 52],
        upsell_ids: [20],
        cross_sell_ids: [],
        parent_id: 0,
        purchase_note: "",
        categories: [
          {
            id: 17,
            name: "Mattresses",
            slug: "mattresses"
          }
        ],
        tags: [],
        images: [
          {
            id: 47,
            date_created: "2020-03-10T18:57:09",
            date_created_gmt: "2020-03-10T18:57:09",
            date_modified: "2020-03-10T18:57:09",
            date_modified_gmt: "2020-03-10T18:57:09",
            src:
              "https://api.purplepeopleeater.co.uk/wp-content/uploads/2020/03/poster_3_up.jpg",
            name: "poster_3_up.jpg",
            alt: ""
          },
          {
            id: 48,
            date_created: "2020-03-10T18:57:09",
            date_created_gmt: "2020-03-10T18:57:09",
            date_modified: "2020-03-10T18:57:09",
            date_modified_gmt: "2020-03-10T18:57:09",
            src:
              "https://api.purplepeopleeater.co.uk/wp-content/uploads/2020/03/Poster_3_flat.jpg",
            name: "Poster_3_flat.jpg",
            alt: ""
          }
        ],
        attributes: [],
        default_attributes: [],
        variations: [],
        grouped_products: [],
        menu_order: 0,
        meta_data: [],
        _links: {
          self: [
            {
              href:
                "https://api.purplepeopleeater.co.uk/wp-json/wc/v3/products/49"
            }
          ],
          collection: [
            {
              href: "https://api.purplepeopleeater.co.uk/wp-json/wc/v3/products"
            }
          ]
        }
      },
      {
        id: 46,
        name: "Woo Ninja",
        slug: "woo-ninja",
        permalink: "https://api.purplepeopleeater.co.uk/product/woo-ninja/",
        date_created: "2020-03-10T18:57:09",
        date_created_gmt: "2020-03-10T18:57:09",
        date_modified: "2020-03-10T18:57:09",
        date_modified_gmt: "2020-03-10T18:57:09",
        type: "simple",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        short_description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        sku: "POSTER-WOO-NINJA",
        price: "15",
        regular_price: "15",
        sale_price: "",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>15.00</span>',
        on_sale: false,
        purchasable: true,
        total_sales: 0,
        virtual: false,
        downloadable: false,
        downloads: [],
        download_limit: 0,
        download_expiry: 0,
        external_url: "",
        button_text: "",
        tax_status: "taxable",
        tax_class: "",
        manage_stock: false,
        stock_quantity: null,
        stock_status: "instock",
        backorders: "no",
        backorders_allowed: false,
        backordered: false,
        sold_individually: false,
        weight: "",
        dimensions: {
          length: "",
          width: "",
          height: ""
        },
        shipping_required: true,
        shipping_taxable: true,
        shipping_class: "",
        shipping_class_id: 0,
        reviews_allowed: true,
        average_rating: "0.00",
        rating_count: 0,
        related_ids: [43, 55, 26, 13, 52],
        upsell_ids: [],
        cross_sell_ids: [18, 19],
        parent_id: 0,
        purchase_note: "",
        categories: [
          {
            id: 17,
            name: "Mattresses",
            slug: "mattresses"
          }
        ],
        tags: [],
        images: [
          {
            id: 44,
            date_created: "2020-03-10T18:57:08",
            date_created_gmt: "2020-03-10T18:57:08",
            date_modified: "2020-03-10T18:57:08",
            date_modified_gmt: "2020-03-10T18:57:08",
            src:
              "https://api.purplepeopleeater.co.uk/wp-content/uploads/2020/03/poster_4_up.jpg",
            name: "poster_4_up.jpg",
            alt: ""
          },
          {
            id: 45,
            date_created: "2020-03-10T18:57:08",
            date_created_gmt: "2020-03-10T18:57:08",
            date_modified: "2020-03-10T18:57:08",
            date_modified_gmt: "2020-03-10T18:57:08",
            src:
              "https://api.purplepeopleeater.co.uk/wp-content/uploads/2020/03/Poster_4_flat.jpg",
            name: "Poster_4_flat.jpg",
            alt: ""
          }
        ],
        attributes: [],
        default_attributes: [],
        variations: [],
        grouped_products: [],
        menu_order: 0,
        meta_data: [],
        _links: {
          self: [
            {
              href:
                "https://api.purplepeopleeater.co.uk/wp-json/wc/v3/products/46"
            }
          ],
          collection: [
            {
              href: "https://api.purplepeopleeater.co.uk/wp-json/wc/v3/products"
            }
          ]
        }
      },
      {
        id: 43,
        name: "Woo Logo",
        slug: "woo-logo",
        permalink: "https://api.purplepeopleeater.co.uk/product/woo-logo/",
        date_created: "2020-03-10T18:57:08",
        date_created_gmt: "2020-03-10T18:57:08",
        date_modified: "2020-03-10T18:57:08",
        date_modified_gmt: "2020-03-10T18:57:08",
        type: "simple",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        short_description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        sku: "POSTER-WOO-LOGO",
        price: "15",
        regular_price: "15",
        sale_price: "",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>15.00</span>',
        on_sale: false,
        purchasable: true,
        total_sales: 0,
        virtual: false,
        downloadable: false,
        downloads: [],
        download_limit: 0,
        download_expiry: 0,
        external_url: "",
        button_text: "",
        tax_status: "taxable",
        tax_class: "",
        manage_stock: false,
        stock_quantity: null,
        stock_status: "instock",
        backorders: "no",
        backorders_allowed: false,
        backordered: false,
        sold_individually: false,
        weight: "",
        dimensions: {
          length: "",
          width: "",
          height: ""
        },
        shipping_required: true,
        shipping_taxable: true,
        shipping_class: "",
        shipping_class_id: 0,
        reviews_allowed: true,
        average_rating: "0.00",
        rating_count: 0,
        related_ids: [64, 49, 13, 55, 52],
        upsell_ids: [],
        cross_sell_ids: [16, 17],
        parent_id: 0,
        purchase_note: "",
        categories: [
          {
            id: 17,
            name: "Mattresses",
            slug: "mattresses"
          }
        ],
        tags: [],
        images: [
          {
            id: 41,
            date_created: "2020-03-10T18:57:07",
            date_created_gmt: "2020-03-10T18:57:07",
            date_modified: "2020-03-10T18:57:07",
            date_modified_gmt: "2020-03-10T18:57:07",
            src:
              "https://api.purplepeopleeater.co.uk/wp-content/uploads/2020/03/poster_5_up.jpg",
            name: "poster_5_up.jpg",
            alt: ""
          },
          {
            id: 42,
            date_created: "2020-03-10T18:57:07",
            date_created_gmt: "2020-03-10T18:57:07",
            date_modified: "2020-03-10T18:57:07",
            date_modified_gmt: "2020-03-10T18:57:07",
            src:
              "https://api.purplepeopleeater.co.uk/wp-content/uploads/2020/03/Poster_5_flat.jpg",
            name: "Poster_5_flat.jpg",
            alt: ""
          }
        ],
        attributes: [],
        default_attributes: [],
        variations: [],
        grouped_products: [],
        menu_order: 0,
        meta_data: [],
        _links: {
          self: [
            {
              href:
                "https://api.purplepeopleeater.co.uk/wp-json/wc/v3/products/43"
            }
          ],
          collection: [
            {
              href: "https://api.purplepeopleeater.co.uk/wp-json/wc/v3/products"
            }
          ]
        }
      },
      {
        id: 34,
        name: "Woo Album #4",
        slug: "woo-album-4",
        permalink: "https://api.purplepeopleeater.co.uk/product/woo-album-4/",
        date_created: "2020-03-10T18:57:03",
        date_created_gmt: "2020-03-10T18:57:03",
        date_modified: "2020-03-10T18:57:03",
        date_modified_gmt: "2020-03-10T18:57:03",
        type: "simple",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        short_description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        sku: "WOO-ALBUM-4",
        price: "9",
        regular_price: "9",
        sale_price: "",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>9.00</span>',
        on_sale: false,
        purchasable: true,
        total_sales: 0,
        virtual: true,
        downloadable: false,
        downloads: [],
        download_limit: 0,
        download_expiry: 0,
        external_url: "",
        button_text: "",
        tax_status: "taxable",
        tax_class: "",
        manage_stock: false,
        stock_quantity: null,
        stock_status: "instock",
        backorders: "no",
        backorders_allowed: false,
        backordered: false,
        sold_individually: false,
        weight: "",
        dimensions: {
          length: "",
          width: "",
          height: ""
        },
        shipping_required: false,
        shipping_taxable: false,
        shipping_class: "",
        shipping_class_id: 0,
        reviews_allowed: true,
        average_rating: "0.00",
        rating_count: 0,
        related_ids: [31, 16, 14, 15, 20],
        upsell_ids: [],
        cross_sell_ids: [],
        parent_id: 0,
        purchase_note: "",
        categories: [
          {
            id: 16,
            name: "Ottoman",
            slug: "ottoman"
          }
        ],
        tags: [],
        images: [
          {
            id: 32,
            date_created: "2020-03-10T18:57:02",
            date_created_gmt: "2020-03-10T18:57:02",
            date_modified: "2020-03-10T18:57:02",
            date_modified_gmt: "2020-03-10T18:57:02",
            src:
              "https://api.purplepeopleeater.co.uk/wp-content/uploads/2020/03/cd_5_angle.jpg",
            name: "cd_5_angle.jpg",
            alt: ""
          },
          {
            id: 33,
            date_created: "2020-03-10T18:57:03",
            date_created_gmt: "2020-03-10T18:57:03",
            date_modified: "2020-03-10T18:57:03",
            date_modified_gmt: "2020-03-10T18:57:03",
            src:
              "https://api.purplepeopleeater.co.uk/wp-content/uploads/2020/03/cd_5_flat.jpg",
            name: "cd_5_flat.jpg",
            alt: ""
          }
        ],
        attributes: [],
        default_attributes: [],
        variations: [],
        grouped_products: [],
        menu_order: 0,
        meta_data: [],
        _links: {
          self: [
            {
              href:
                "https://api.purplepeopleeater.co.uk/wp-json/wc/v3/products/34"
            }
          ],
          collection: [
            {
              href: "https://api.purplepeopleeater.co.uk/wp-json/wc/v3/products"
            }
          ]
        }
      },
      {
        id: 31,
        name: "Woo Singles",
        slug: "woo-singles",
        permalink: "https://api.purplepeopleeater.co.uk/product/woo-singles/",
        date_created: "2020-03-10T18:57:02",
        date_created_gmt: "2020-03-10T18:57:02",
        date_modified: "2020-03-10T18:57:02",
        date_modified_gmt: "2020-03-10T18:57:02",
        type: "grouped",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        short_description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        sku: "WOO-SINGLES",
        price: "2",
        regular_price: "",
        sale_price: "",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>2.00</span> &ndash; <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>3.00</span>',
        on_sale: true,
        purchasable: false,
        total_sales: 0,
        virtual: false,
        downloadable: false,
        downloads: [],
        download_limit: 0,
        download_expiry: 0,
        external_url: "",
        button_text: "",
        tax_status: "taxable",
        tax_class: "",
        manage_stock: false,
        stock_quantity: null,
        stock_status: "instock",
        backorders: "no",
        backorders_allowed: false,
        backordered: false,
        sold_individually: false,
        weight: "",
        dimensions: {
          length: "",
          width: "",
          height: ""
        },
        shipping_required: true,
        shipping_taxable: true,
        shipping_class: "",
        shipping_class_id: 0,
        reviews_allowed: true,
        average_rating: "0.00",
        rating_count: 0,
        related_ids: [11, 12, 14, 34, 16],
        upsell_ids: [13, 14],
        cross_sell_ids: [15],
        parent_id: 0,
        purchase_note: "",
        categories: [
          {
            id: 16,
            name: "Ottoman",
            slug: "ottoman"
          }
        ],
        tags: [],
        images: [
          {
            id: 28,
            date_created: "2020-03-10T18:57:01",
            date_created_gmt: "2020-03-10T18:57:01",
            date_modified: "2020-03-10T18:57:01",
            date_modified_gmt: "2020-03-10T18:57:01",
            src:
              "https://api.purplepeopleeater.co.uk/wp-content/uploads/2020/03/cd_6_flat.jpg",
            name: "cd_6_flat.jpg",
            alt: ""
          }
        ],
        attributes: [],
        default_attributes: [],
        variations: [],
        grouped_products: [11, 12],
        menu_order: 0,
        meta_data: [],
        _links: {
          self: [
            {
              href:
                "https://api.purplepeopleeater.co.uk/wp-json/wc/v3/products/31"
            }
          ],
          collection: [
            {
              href: "https://api.purplepeopleeater.co.uk/wp-json/wc/v3/products"
            }
          ]
        }
      },
      {
        id: 26,
        name: "Ninja Silhouette",
        slug: "ninja-silhouette",
        permalink:
          "https://api.purplepeopleeater.co.uk/product/ninja-silhouette/",
        date_created: "2020-03-10T18:57:00",
        date_created_gmt: "2020-03-10T18:57:00",
        date_modified: "2020-03-10T18:57:13",
        date_modified_gmt: "2020-03-10T18:57:13",
        type: "external",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        short_description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        sku: "HOODIE-NINJA-SILHOUETTE",
        price: "30",
        regular_price: "30",
        sale_price: "",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>30.00</span>',
        on_sale: false,
        purchasable: false,
        total_sales: 0,
        virtual: false,
        downloadable: false,
        downloads: [],
        download_limit: 0,
        download_expiry: 0,
        external_url:
          "https://mercantile.wordpress.org/product/wordpress-logo-black-zip-hoodie/",
        button_text: "Buy on WordPress Swag Store",
        tax_status: "taxable",
        tax_class: "",
        manage_stock: false,
        stock_quantity: null,
        stock_status: "instock",
        backorders: "no",
        backorders_allowed: false,
        backordered: false,
        sold_individually: false,
        weight: "",
        dimensions: {
          length: "",
          width: "",
          height: ""
        },
        shipping_required: true,
        shipping_taxable: true,
        shipping_class: "",
        shipping_class_id: 0,
        reviews_allowed: false,
        average_rating: "0.00",
        rating_count: 0,
        related_ids: [64, 17, 46, 49, 55],
        upsell_ids: [],
        cross_sell_ids: [23],
        parent_id: 0,
        purchase_note: "",
        categories: [
          {
            id: 17,
            name: "Mattresses",
            slug: "mattresses"
          }
        ],
        tags: [],
        images: [
          {
            id: 58,
            date_created: "2020-03-10T18:57:13",
            date_created_gmt: "2020-03-10T18:57:13",
            date_modified: "2020-03-10T18:57:13",
            date_modified_gmt: "2020-03-10T18:57:13",
            src:
              "https://api.purplepeopleeater.co.uk/wp-content/uploads/2020/03/hoodie_5_front.jpg",
            name: "hoodie_5_front.jpg",
            alt: ""
          },
          {
            id: 59,
            date_created: "2020-03-10T18:57:13",
            date_created_gmt: "2020-03-10T18:57:13",
            date_modified: "2020-03-10T18:57:13",
            date_modified_gmt: "2020-03-10T18:57:13",
            src:
              "https://api.purplepeopleeater.co.uk/wp-content/uploads/2020/03/hoodie_5_back.jpg",
            name: "hoodie_5_back.jpg",
            alt: ""
          }
        ],
        attributes: [],
        default_attributes: [],
        variations: [],
        grouped_products: [],
        menu_order: 0,
        meta_data: [],
        _links: {
          self: [
            {
              href:
                "https://api.purplepeopleeater.co.uk/wp-json/wc/v3/products/26"
            }
          ],
          collection: [
            {
              href: "https://api.purplepeopleeater.co.uk/wp-json/wc/v3/products"
            }
          ]
        }
      },
      {
        id: 25,
        name: "Happy Ninja",
        slug: "happy-ninja",
        permalink: "https://api.purplepeopleeater.co.uk/product/happy-ninja/",
        date_created: "2020-03-10T18:57:00",
        date_created_gmt: "2020-03-10T18:57:00",
        date_modified: "2020-03-10T18:57:14",
        date_modified_gmt: "2020-03-10T18:57:14",
        type: "simple",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        short_description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        sku: "HOODIE-HAPPY-NINJA",
        price: "35",
        regular_price: "35",
        sale_price: "",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>35.00</span>',
        on_sale: false,
        purchasable: true,
        total_sales: 0,
        virtual: false,
        downloadable: false,
        downloads: [],
        download_limit: 0,
        download_expiry: 0,
        external_url: "",
        button_text: "",
        tax_status: "taxable",
        tax_class: "",
        manage_stock: false,
        stock_quantity: null,
        stock_status: "instock",
        backorders: "no",
        backorders_allowed: false,
        backordered: false,
        sold_individually: false,
        weight: "",
        dimensions: {
          length: "",
          width: "",
          height: ""
        },
        shipping_required: true,
        shipping_taxable: true,
        shipping_class: "",
        shipping_class_id: 0,
        reviews_allowed: true,
        average_rating: "0.00",
        rating_count: 0,
        related_ids: [26, 52, 49, 13, 64],
        upsell_ids: [],
        cross_sell_ids: [24],
        parent_id: 0,
        purchase_note: "",
        categories: [
          {
            id: 17,
            name: "Mattresses",
            slug: "mattresses"
          }
        ],
        tags: [],
        images: [
          {
            id: 60,
            date_created: "2020-03-10T18:57:13",
            date_created_gmt: "2020-03-10T18:57:13",
            date_modified: "2020-03-10T18:57:13",
            date_modified_gmt: "2020-03-10T18:57:13",
            src:
              "https://api.purplepeopleeater.co.uk/wp-content/uploads/2020/03/hoodie_4_front.jpg",
            name: "hoodie_4_front.jpg",
            alt: ""
          },
          {
            id: 61,
            date_created: "2020-03-10T18:57:14",
            date_created_gmt: "2020-03-10T18:57:14",
            date_modified: "2020-03-10T18:57:14",
            date_modified_gmt: "2020-03-10T18:57:14",
            src:
              "https://api.purplepeopleeater.co.uk/wp-content/uploads/2020/03/hoodie_4_back.jpg",
            name: "hoodie_4_back.jpg",
            alt: ""
          }
        ],
        attributes: [],
        default_attributes: [],
        variations: [],
        grouped_products: [],
        menu_order: 0,
        meta_data: [],
        _links: {
          self: [
            {
              href:
                "https://api.purplepeopleeater.co.uk/wp-json/wc/v3/products/25"
            }
          ],
          collection: [
            {
              href: "https://api.purplepeopleeater.co.uk/wp-json/wc/v3/products"
            }
          ]
        }
      }
    ]
  }),
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    scrollTo(element) {
      window.scroll({
        behavior: "smooth",
        left: 0,
        top: element.offsetTop
      });
    },
    cartAdd() {
      let cartItem = this.product;
      cartItem.quantity = this.item.qty;
      cartItem.bedsize = this.item.bedsize;
      this.tempcart.push(cartItem);
      this.$store.commit("addToCart", { ...cartItem });
      // this.$router.push("/checkout");
    }
  },
  filters: {
    prettify(str) {
      return str.replace(/(-|^)([^-]?)/g, function(_, prep, letter) {
        return (prep && " ") + letter.toUpperCase();
      });
    },
    pluralize(number) {
      let word = "Customer Reviews";

      const rating = parseInt(number);

      if (parseInt(number) === 1) {
        word = "Customer Review";
      }

      return rating + " " + word;
    }
  },
  async created() {
    const ck = "ck_8d450139382c5dc8293107cd7e3710c80ef962c1";
    const cs = "cs_40ab04189e95016e6b646d5ee5aae0a0801959e5";
    const url = `https://api.purplepeopleeater.co.uk/wp-json/wc/v3/products/${this.$route.params.id}`;

    const oauth = OAuth({
      consumer: {
        key: ck,
        secret: cs
      },
      signature_method: "HMAC-SHA1",
      hash_function: function(base_string, key) {
        return CryptoJS.enc.Base64.stringify(
          CryptoJS.HmacSHA1(base_string, key)
        );
      }
    });
    const requestData = {
      url,
      method: "GET",
      qs: {
        x_auth_access_type: "read_write"
      }
    };
    const config = {
      headers: {
        Accept: "application/json"
      }
    };

    try {
      const response = await axios.get(
        requestData.url +
          "?" +
          jQuery.param(oauth.authorize(requestData), config)
      );

      const { data } = response;

      this.product = data;

      this.isLoading = false;

      console.log(response.data);
    } catch (error) {
      throw error;
    }
  }
};
</script>

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

[type="radio"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* IMAGE STYLES */
[type="radio"] + img {
  height: 60px;
  padding: 10px;
  cursor: pointer;
  outline: 2px solid #999;
}

/* CHECKED STYLES */
[type="radio"]:checked + img {
  outline: 2px solid #9f7aea;
}
</style>
