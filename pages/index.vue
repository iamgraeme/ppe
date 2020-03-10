<template>
  <div>
    <div class="mb-24 relative">
      <no-ssr>
        <carousel items="1" :autoplay="true" :dots="false">
          <img src="@/assets/slider/0LDWYkDi0Zzp6aitokK6Hi0OQDFrJ3DcoIFykEnH.jpeg" />
          <img src="@/assets/slider/slide-two.jpg" />
          <img src="@/assets/slider/0LDWYkDi0Zzp6aitokK6Hi0OQDFrJ3DcoIFykEnH.jpeg" />
          <img src="@/assets/slider/slide-two.jpg" />
        </carousel>
      </no-ssr>
      <div
        class="absolute bg-white w-9/12 h-32 bottom-0 left-0 z-50 rounded-tr-full hidden md:flex items-center justify-end"
      >
        <div class="flex">
          <div class="flex items-center mr-16">
            <img src="@/assets/images/free-shipping.svg" class="mr-3" alt="Free Delivery" />
            <div>
              <p class="font-semibold text-lg">Free Delivery</p>
              <p>On purchases over £399</p>
            </div>
          </div>
          <div class="flex items-center mr-16">
            <img src="@/assets/images/free-shipping.svg" class="mr-3" alt="Free Delivery" />
            <div>
              <p class="font-semibold text-lg">Free Delivery</p>
              <p>On purchases over £399</p>
            </div>
          </div>
          <div class="flex items-center mr-16">
            <img src="@/assets/images/free-shipping.svg" class="mr-3" alt="Free Delivery" />
            <div>
              <p class="font-semibold text-lg">Free Delivery</p>
              <p>On purchases over £399</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <div>
        <div class="flex justify-between items-center mb-6 px-4">
          <div>
            <h3 class="text-lg lg:text-2xl text-gray-600">Our Bedstead Range</h3>
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
            <carousel
              items="4"
              :nav="false"
              :dots="false"
              :responsive="{0:{items:1,nav:false}, 375: {items:2, nav:false},640:{items:3,nav:false},767:{items:4,nav:false}}"
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
    <div>
      <Cta class="hidden md:flex" />
    </div>
    <div class="py-10 border-b border-gray-300">
      <div class="container mx-auto px-6 md:px-0">
        <h3 class="text-center text-3xl text-gray-600 font-thin mb-20">Why should you choose us?</h3>
        <div class="flex flex-wrap justify-between">
          <div
            class="w-1/2 md:w-1/4 mb-10 flex items-center md:items-start flex-col text-center md:text-left px-6 md:px-0"
          >
            <img class="mb-10" src="@/assets/images/free-shipping.svg" alt="Free Delivery" />
            <h5 class="font-semibold text-gray-700 mb-3 text-sm lg:text-lg">Free Delivery</h5>
            <p
              class="text-sm text-gray-600 md:mr-10"
            >All purchases over £399 are eligible for free delivery.</p>
          </div>
          <div
            class="w-1/2 md:w-1/4 mb-10 flex items-center md:items-start flex-col text-center md:text-left px-6 md:px-0"
          >
            <img class="mb-10" src="@/assets/images/payments.svg" alt="Free Delivery" />
            <h5 class="font-semibold text-gray-700 mb-3 text-sm lg:text-lg">Hassle Free Payments</h5>
            <p class="text-sm text-gray-600 md:mr-10">
              All payments are processed instantly over a secure payment
              protocol.
            </p>
          </div>
          <div
            class="w-1/2 md:w-1/4 mb-10 flex items-center md:items-start flex-col text-center md:text-left px-6 md:px-0"
          >
            <img class="mb-10" src="@/assets/images/money-back.svg" alt="Free Delivery" />
            <h5 class="font-semibold text-gray-700 mb-3 text-sm lg:text-lg">Money Back Guaruntee</h5>
            <p class="text-sm text-gray-600 md:mr-10">
              If an item arrived damaged, you can send it back for a full
              refund.
            </p>
          </div>
          <div
            class="w-1/2 md:w-1/4 mb-10 flex items-center md:items-start flex-col text-center md:text-left px-6 md:px-0"
          >
            <img class="mb-10" src="@/assets/images/finest-quality.svg" alt="Free Delivery" />
            <h5 class="font-semibold text-gray-700 mb-3 text-sm lg:text-lg">Finest Quality</h5>
            <p class="text-sm text-gray-600 md:mr-10">
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
            <h3 class="text-lg lg:text-2xl text-gray-600">Our Mattress Range</h3>
          </div>
          <div>
            <nuxt-link
              to="/category/19/mattresses"
              class="border border-gray-400 rounded-full text-gray-800 uppercase text-xs font-semibold py-2 px-4 hover:border-purple-400 hover:text-black"
            >Show All</nuxt-link>
          </div>
        </div>
        <div>
          <no-ssr>
            <carousel
              items="4"
              :nav="false"
              :dots="false"
              :responsive="{0:{items:1,nav:false}, 375: {items:2, nav:false},640:{items:3,nav:false},767:{items:4,nav:false}}"
            >
              <ProductCard
                v-for="product in products"
                :key="product.id"
                :productName="product.name"
                :price="product.regular_price"
                :salePrice="product.sale_price"
                :image="product.images[0].src"
              />
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
import axios from "axios";
import OAuth from "oauth-1.0a";
import CryptoJS from "crypto-js";
import jQuery from "jquery";

import Cta from "@/components/Cta";
export default {
  data: () => ({
    products: [
      {
        id: 19,
        name: "Single",
        slug: "single",
        permalink: "http://35.178.124.91/product/single/",
        date_created: "2019-01-16T13:01:54",
        date_created_gmt: "2019-01-16T13:01:54",
        date_modified: "2020-03-08T21:22:52",
        date_modified_gmt: "2020-03-08T21:22:52",
        type: "simple",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut metus leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed luctus, dui eu sagittis sodales, nulla nibh sagittis augue, vel porttitor diam enim non metus. Vestibulum aliquam augue neque. Phasellus tincidunt odio eget ullamcorper efficitur. Cras placerat ut turpis pellentesque vulputate. Nam sed consequat tortor. Curabitur finibus sapien dolor. Ut eleifend tellus nec erat pulvinar dignissim. Nam non arcu purus. Vivamus et massa massa.</p>\n",
        short_description: "<p>This is a simple, virtual product.</p>\n",
        sku: "woo-single",
        price: "2",
        regular_price: "3",
        sale_price: "2",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>3.00</span></del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>2.00</span></ins>',
        on_sale: true,
        purchasable: true,
        total_sales: 0,
        virtual: true,
        downloadable: true,
        downloads: [
          {
            id: "a0fdda89-5f0e-440d-93f5-188e12c910d1",
            name: "Single",
            file:
              "https://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2017/08/single.jpg"
          }
        ],
        download_limit: 1,
        download_expiry: 1,
        external_url: "",
        button_text: "",
        tax_status: "taxable",
        tax_class: "",
        manage_stock: false,
        stock_quantity: null,
        in_stock: true,
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
        related_ids: [96, 93, 95, 12, 11],
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
            id: 48,
            date_created: "2019-01-16T13:02:10",
            date_created_gmt: "2019-01-16T13:02:10",
            date_modified: "2019-01-16T13:02:10",
            date_modified_gmt: "2019-01-16T13:02:10",
            src: "http://35.178.124.91/wp-content/uploads/2019/01/single-1.jpg",
            name: "single-1.jpg",
            alt: "",
            position: 0
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
              href: "http://35.178.124.91/wp-json/wc/v2/products/19"
            }
          ],
          collection: [
            {
              href: "http://35.178.124.91/wp-json/wc/v2/products"
            }
          ]
        }
      },
      {
        id: 12,
        name: "Cap",
        slug: "cap",
        permalink: "http://35.178.124.91/product/cap/",
        date_created: "2019-01-16T13:01:53",
        date_created_gmt: "2019-01-16T13:01:53",
        date_modified: "2020-03-08T21:25:41",
        date_modified_gmt: "2020-03-08T21:25:41",
        type: "simple",
        status: "publish",
        featured: true,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        short_description: "<p>This is a simple product.</p>\n",
        sku: "woo-cap",
        price: "16",
        regular_price: "18",
        sale_price: "16",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>18.00</span></del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>16.00</span></ins>',
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
        in_stock: true,
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
        related_ids: [19, 95, 11, 93, 96],
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
            id: 98,
            date_created: "2019-01-16T13:02:04",
            date_created_gmt: "2019-01-16T13:02:04",
            date_modified: "2019-01-16T13:02:04",
            date_modified_gmt: "2019-01-16T13:02:04",
            src: "http://35.178.124.91/wp-content/uploads/2019/01/cap-2.jpg",
            name: "cap-2.jpg",
            alt: "",
            position: 0
          }
        ],
        attributes: [
          {
            id: 1,
            name: "Color",
            position: 0,
            visible: true,
            variation: false,
            options: ["Yellow"]
          }
        ],
        default_attributes: [],
        variations: [],
        grouped_products: [],
        menu_order: 0,
        meta_data: [],
        _links: {
          self: [
            {
              href: "http://35.178.124.91/wp-json/wc/v2/products/12"
            }
          ],
          collection: [
            {
              href: "http://35.178.124.91/wp-json/wc/v2/products"
            }
          ]
        }
      },
      {
        id: 96,
        name: "Beanie",
        slug: "beanie",
        permalink: "http://35.178.124.91/product/beanie/",
        date_created: "2019-01-16T13:01:52",
        date_created_gmt: "2019-01-16T13:01:52",
        date_modified: "2020-03-08T21:25:19",
        date_modified_gmt: "2020-03-08T21:25:19",
        type: "simple",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        short_description: "<p>This is a simple product.</p>\n",
        sku: "woo-beanie",
        price: "18",
        regular_price: "20",
        sale_price: "18",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>20.00</span></del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>18.00</span></ins>',
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
        in_stock: true,
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
        related_ids: [95, 11, 19, 12, 93],
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
            id: 39,
            date_created: "2019-01-16T13:02:02",
            date_created_gmt: "2019-01-16T13:02:02",
            date_modified: "2019-01-16T13:02:02",
            date_modified_gmt: "2019-01-16T13:02:02",
            src: "http://35.178.124.91/wp-content/uploads/2019/01/beanie-2.jpg",
            name: "beanie-2.jpg",
            alt: "",
            position: 0
          }
        ],
        attributes: [
          {
            id: 1,
            name: "Color",
            position: 0,
            visible: true,
            variation: false,
            options: ["Red"]
          }
        ],
        default_attributes: [],
        variations: [],
        grouped_products: [],
        menu_order: 0,
        meta_data: [],
        _links: {
          self: [
            {
              href: "http://35.178.124.91/wp-json/wc/v2/products/96"
            }
          ],
          collection: [
            {
              href: "http://35.178.124.91/wp-json/wc/v2/products"
            }
          ]
        }
      },
      {
        id: 95,
        name: "T-Shirt",
        slug: "t-shirt",
        permalink: "http://35.178.124.91/product/t-shirt/",
        date_created: "2019-01-16T13:01:52",
        date_created_gmt: "2019-01-16T13:01:52",
        date_modified: "2020-03-08T21:25:00",
        date_modified_gmt: "2020-03-08T21:25:00",
        type: "simple",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        short_description: "<p>This is a simple product.</p>\n",
        sku: "woo-tshirt",
        price: "18",
        regular_price: "18",
        sale_price: "",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>18.00</span>',
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
        in_stock: true,
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
        related_ids: [96, 19, 12, 93, 11],
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
            id: 38,
            date_created: "2019-01-16T13:02:02",
            date_created_gmt: "2019-01-16T13:02:02",
            date_modified: "2019-01-16T13:02:02",
            date_modified_gmt: "2019-01-16T13:02:02",
            src: "http://35.178.124.91/wp-content/uploads/2019/01/tshirt-2.jpg",
            name: "tshirt-2.jpg",
            alt: "",
            position: 0
          }
        ],
        attributes: [
          {
            id: 1,
            name: "Color",
            position: 0,
            visible: true,
            variation: false,
            options: ["Gray"]
          }
        ],
        default_attributes: [],
        variations: [],
        grouped_products: [],
        menu_order: 0,
        meta_data: [],
        _links: {
          self: [
            {
              href: "http://35.178.124.91/wp-json/wc/v2/products/95"
            }
          ],
          collection: [
            {
              href: "http://35.178.124.91/wp-json/wc/v2/products"
            }
          ]
        }
      },
      {
        id: 93,
        name: "Hoodie",
        slug: "hoodie",
        permalink: "http://35.178.124.91/product/hoodie/",
        date_created: "2019-01-16T13:01:52",
        date_created_gmt: "2019-01-16T13:01:52",
        date_modified: "2020-03-08T21:24:47",
        date_modified_gmt: "2020-03-08T21:24:47",
        type: "variable",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        short_description: "<p>This is a variable product.</p>\n",
        sku: "woo-hoodie",
        price: "42",
        regular_price: "",
        sale_price: "",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>42.00</span> &ndash; <span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>45.00</span>',
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
        in_stock: true,
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
        related_ids: [95, 19, 12, 11, 96],
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
            id: 34,
            date_created: "2019-01-16T13:01:58",
            date_created_gmt: "2019-01-16T13:01:58",
            date_modified: "2019-01-16T13:01:58",
            date_modified_gmt: "2019-01-16T13:01:58",
            src: "http://35.178.124.91/wp-content/uploads/2019/01/hoodie-2.jpg",
            name: "hoodie-2.jpg",
            alt: "",
            position: 0
          },
          {
            id: 35,
            date_created: "2019-01-16T13:01:59",
            date_created_gmt: "2019-01-16T13:01:59",
            date_modified: "2019-01-16T13:01:59",
            date_modified_gmt: "2019-01-16T13:01:59",
            src:
              "http://35.178.124.91/wp-content/uploads/2019/01/hoodie-blue-1.jpg",
            name: "hoodie-blue-1.jpg",
            alt: "",
            position: 1
          },
          {
            id: 36,
            date_created: "2019-01-16T13:02:00",
            date_created_gmt: "2019-01-16T13:02:00",
            date_modified: "2019-01-16T13:02:00",
            date_modified_gmt: "2019-01-16T13:02:00",
            src:
              "http://35.178.124.91/wp-content/uploads/2019/01/hoodie-green-1.jpg",
            name: "hoodie-green-1.jpg",
            alt: "",
            position: 2
          },
          {
            id: 37,
            date_created: "2019-01-16T13:02:01",
            date_created_gmt: "2019-01-16T13:02:01",
            date_modified: "2019-01-16T13:02:01",
            date_modified_gmt: "2019-01-16T13:02:01",
            src:
              "http://35.178.124.91/wp-content/uploads/2019/01/hoodie-with-logo-2.jpg",
            name: "hoodie-with-logo-2.jpg",
            alt: "",
            position: 3
          }
        ],
        attributes: [
          {
            id: 1,
            name: "Color",
            position: 0,
            visible: true,
            variation: true,
            options: ["Blue", "Green", "Red"]
          },
          {
            id: 0,
            name: "Logo",
            position: 1,
            visible: true,
            variation: true,
            options: ["Yes", "No"]
          }
        ],
        default_attributes: [],
        variations: [30, 23, 24, 25],
        grouped_products: [],
        menu_order: 0,
        meta_data: [],
        _links: {
          self: [
            {
              href: "http://35.178.124.91/wp-json/wc/v2/products/93"
            }
          ],
          collection: [
            {
              href: "http://35.178.124.91/wp-json/wc/v2/products"
            }
          ]
        }
      },
      {
        id: 11,
        name: "Belt",
        slug: "belt",
        permalink: "http://35.178.124.91/product/belt/",
        date_created: "2019-01-16T13:01:52",
        date_created_gmt: "2019-01-16T13:01:52",
        date_modified: "2020-03-08T21:25:32",
        date_modified_gmt: "2020-03-08T21:25:32",
        type: "simple",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        short_description: "<p>This is a simple product.</p>\n",
        sku: "woo-belt",
        price: "55",
        regular_price: "65",
        sale_price: "55",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>65.00</span></del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>55.00</span></ins>',
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
        in_stock: true,
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
        related_ids: [95, 93, 96, 19, 12],
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
            id: 97,
            date_created: "2019-01-16T13:02:03",
            date_created_gmt: "2019-01-16T13:02:03",
            date_modified: "2019-01-16T13:02:03",
            date_modified_gmt: "2019-01-16T13:02:03",
            src: "http://35.178.124.91/wp-content/uploads/2019/01/belt-2.jpg",
            name: "belt-2.jpg",
            alt: "",
            position: 0
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
              href: "http://35.178.124.91/wp-json/wc/v2/products/11"
            }
          ],
          collection: [
            {
              href: "http://35.178.124.91/wp-json/wc/v2/products"
            }
          ]
        }
      }
    ]
  }),
  components: {
    PageHeading,
    ProductCard,
    Cta
  }
};
</script>
