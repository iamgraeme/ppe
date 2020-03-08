<template>
  <div>
    <div class="mb-24 relative">
      <no-ssr>
        <carousel items="1" :autoplay="true" :dots="false">
          <img
            src="@/assets/slider/0LDWYkDi0Zzp6aitokK6Hi0OQDFrJ3DcoIFykEnH.jpeg"
          />
          <img src="@/assets/slider/slide-two.jpg" />
          <img
            src="@/assets/slider/0LDWYkDi0Zzp6aitokK6Hi0OQDFrJ3DcoIFykEnH.jpeg"
          />
          <img src="@/assets/slider/slide-two.jpg" />
        </carousel>
      </no-ssr>
      <div
        class="absolute bg-white w-9/12 h-32 bottom-0 left-0 z-50 rounded-tr-full flex items-center justify-end"
      >
        <div class="flex">
          <div class="flex items-center mr-16">
            <img
              src="@/assets/images/free-shipping.svg"
              class="mr-3"
              alt="Free Delivery"
            />
            <div>
              <p class="font-semibold text-lg">Free Delivery</p>
              <p>On purchases over £399</p>
            </div>
          </div>
          <div class="flex items-center mr-16">
            <img
              src="@/assets/images/free-shipping.svg"
              class="mr-3"
              alt="Free Delivery"
            />
            <div>
              <p class="font-semibold text-lg">Free Delivery</p>
              <p>On purchases over £399</p>
            </div>
          </div>
          <div class="flex items-center mr-16">
            <img
              src="@/assets/images/free-shipping.svg"
              class="mr-3"
              alt="Free Delivery"
            />
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
            <h3 class="text-2xl text-gray-600">Our Bedstead Range</h3>
          </div>
          <div>
            <nuxt-link
              to="/category/18/bedsteads"
              class="border border-gray-400 rounded-full text-gray-800 uppercase text-xs font-semibold py-2 px-4 hover:border-purple-400 hover:text-black"
              >Show All</nuxt-link
            >
          </div>
        </div>
        <div>
          <no-ssr>
            <carousel items="4" :nav="false" :dots="false">
              <ProductCard
                v-for="product in products"
                :key="product.id"
                :id="product.id"
                :slug="product.slug"
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
    <div>
      <Cta />
    </div>
    <div class="py-10 border-b border-gray-300">
      <div class="container mx-auto">
        <h3 class="text-center text-3xl text-gray-600 font-thin mb-20">
          Why should you choose us?
        </h3>
        <div class="flex justify-between">
          <div class="w-1/4 mb-10">
            <img
              class="mb-10"
              src="@/assets/images/free-shipping.svg"
              alt="Free Delivery"
            />
            <h5 class="font-semibold text-gray-700 mb-3">Free Delivery</h5>
            <p class="text-sm text-gray-600 mr-10">
              All purchases over £399 are eligible for free delivery.
            </p>
          </div>
          <div class="w-1/4 mb-10">
            <img
              class="mb-10"
              src="@/assets/images/payments.svg"
              alt="Free Delivery"
            />
            <h5 class="font-semibold text-gray-700 mb-3">
              Hassle Free Payments
            </h5>
            <p class="text-sm text-gray-600 mr-10">
              All payments are processed instantly over a secure payment
              protocol.
            </p>
          </div>
          <div class="w-1/4 mb-10">
            <img
              class="mb-10"
              src="@/assets/images/money-back.svg"
              alt="Free Delivery"
            />
            <h5 class="font-semibold text-gray-700 mb-3">
              Money Back Guaruntee
            </h5>
            <p class="text-sm text-gray-600 mr-10">
              If an item arrived damaged, you can send it back for a full
              refund.
            </p>
          </div>
          <div class="w-1/4 mb-10">
            <img
              class="mb-10"
              src="@/assets/images/finest-quality.svg"
              alt="Free Delivery"
            />
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
            <h3 class="text-2xl text-gray-600">Our Mattress Range</h3>
          </div>
          <div>
            <nuxt-link
              to="/category/19/mattresses"
              class="border border-gray-400 rounded-full text-gray-800 uppercase text-xs font-semibold py-2 px-4 hover:border-purple-400 hover:text-black"
              >Show All</nuxt-link
            >
          </div>
        </div>
        <div>
          <no-ssr>
            <carousel items="4" :nav="false" :dots="false">
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

import Cta from "@/components/Cta";
export default {
  data: () => ({
    products: [
      {
        id: 103,
        name: "Patient Ninja",
        slug: "patient-ninja",
        permalink: "http:\/\/purple:8888\/product\/patient-ninja\/",
        date_created: "2020-01-19T23:26:41",
        date_created_gmt: "2020-01-19T23:26:41",
        date_modified: "2020-01-19T23:28:42",
        date_modified_gmt: "2020-01-19T23:28:42",
        type: "simple",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<\/p>\n",
        short_description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<\/p>\n",
        sku: "HOODIE-PATIENT-NINJA",
        price: "35",
        regular_price: "35",
        sale_price: "",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;<\/span>35.00<\/span>',
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
        related_ids: [51, 65, 94, 53, 61],
        upsell_ids: [],
        cross_sell_ids: [64],
        parent_id: 0,
        purchase_note: "",
        categories: [
          {
            id: 19,
            name: "Mattresses",
            slug: "mattresses"
          }
        ],
        tags: [],
        images: [
          {
            id: 101,
            date_created: "2020-01-19T23:26:39",
            date_created_gmt: "2020-01-19T23:26:39",
            date_modified: "2020-01-19T23:26:39",
            date_modified_gmt: "2020-01-19T23:26:39",
            src:
              "http:\/\/purple:8888\/wp-content\/uploads\/2020\/01\/hoodie_3_front.jpg",
            name: "hoodie_3_front.jpg",
            alt: ""
          },
          {
            id: 102,
            date_created: "2020-01-19T23:26:40",
            date_created_gmt: "2020-01-19T23:26:40",
            date_modified: "2020-01-19T23:26:40",
            date_modified_gmt: "2020-01-19T23:26:40",
            src:
              "http:\/\/purple:8888\/wp-content\/uploads\/2020\/01\/hoodie_3_back.jpg",
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
              href: "http:\/\/purple:8888\/wp-json\/wc\/v3\/products\/103"
            }
          ],
          collection: [
            {
              href: "http:\/\/purple:8888\/wp-json\/wc\/v3\/products"
            }
          ]
        }
      },
      {
        id: 94,
        name: "Ship Your Idea",
        slug: "ship-your-idea",
        permalink: "http:\/\/purple:8888\/product\/ship-your-idea\/",
        date_created: "2020-01-19T23:26:24",
        date_created_gmt: "2020-01-19T23:26:24",
        date_modified: "2020-01-19T23:28:56",
        date_modified_gmt: "2020-01-19T23:28:56",
        type: "simple",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<\/p>\n",
        short_description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<\/p>\n",
        sku: "POSTER-SHIP-YOUR-IDEA",
        price: "15",
        regular_price: "15",
        sale_price: "",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;<\/span>15.00<\/span>',
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
        related_ids: [51, 58, 61, 53, 65],
        upsell_ids: [60, 61],
        cross_sell_ids: [60, 61],
        parent_id: 0,
        purchase_note: "",
        categories: [
          {
            id: 19,
            name: "Mattresses",
            slug: "mattresses"
          }
        ],
        tags: [],
        images: [
          {
            id: 92,
            date_created: "2020-01-19T23:26:21",
            date_created_gmt: "2020-01-19T23:26:21",
            date_modified: "2020-01-19T23:26:21",
            date_modified_gmt: "2020-01-19T23:26:21",
            src:
              "http:\/\/purple:8888\/wp-content\/uploads\/2020\/01\/poster_1_up.jpg",
            name: "poster_1_up.jpg",
            alt: ""
          },
          {
            id: 93,
            date_created: "2020-01-19T23:26:23",
            date_created_gmt: "2020-01-19T23:26:23",
            date_modified: "2020-01-19T23:26:23",
            date_modified_gmt: "2020-01-19T23:26:23",
            src:
              "http:\/\/purple:8888\/wp-content\/uploads\/2020\/01\/Poster_1_flat.jpg",
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
              href: "http:\/\/purple:8888\/wp-json\/wc\/v3\/products\/94"
            }
          ],
          collection: [
            {
              href: "http:\/\/purple:8888\/wp-json\/wc\/v3\/products"
            }
          ]
        }
      },
      {
        id: 91,
        name: "Flying Ninja",
        slug: "flying-ninja",
        permalink: "http:\/\/purple:8888\/product\/flying-ninja\/",
        date_created: "2020-01-19T23:26:20",
        date_created_gmt: "2020-01-19T23:26:20",
        date_modified: "2020-01-19T23:29:07",
        date_modified_gmt: "2020-01-19T23:29:07",
        type: "simple",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<\/p>\n",
        short_description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<\/p>\n",
        sku: "POSTER-FLYING-NINJA",
        price: "12",
        regular_price: "15",
        sale_price: "12",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;<\/span>15.00<\/span><\/del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;<\/span>12.00<\/span><\/ins>',
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
        related_ids: [54, 60, 70, 82, 63],
        upsell_ids: [],
        cross_sell_ids: [],
        parent_id: 0,
        purchase_note: "",
        categories: [
          {
            id: 17,
            name: "Ottoman",
            slug: "ottoman"
          }
        ],
        tags: [],
        images: [
          {
            id: 89,
            date_created: "2020-01-19T23:26:15",
            date_created_gmt: "2020-01-19T23:26:15",
            date_modified: "2020-01-19T23:26:15",
            date_modified_gmt: "2020-01-19T23:26:15",
            src:
              "http:\/\/purple:8888\/wp-content\/uploads\/2020\/01\/poster_2_up.jpg",
            name: "poster_2_up.jpg",
            alt: ""
          },
          {
            id: 90,
            date_created: "2020-01-19T23:26:17",
            date_created_gmt: "2020-01-19T23:26:17",
            date_modified: "2020-01-19T23:26:17",
            date_modified_gmt: "2020-01-19T23:26:17",
            src:
              "http:\/\/purple:8888\/wp-content\/uploads\/2020\/01\/Poster_2_flat.jpg",
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
              href: "http:\/\/purple:8888\/wp-json\/wc\/v3\/products\/91"
            }
          ],
          collection: [
            {
              href: "http:\/\/purple:8888\/wp-json\/wc\/v3\/products"
            }
          ]
        }
      },
      {
        id: 88,
        name: "Premium Quality",
        slug: "premium-quality",
        permalink: "http:\/\/purple:8888\/product\/premium-quality\/",
        date_created: "2020-01-19T23:26:14",
        date_created_gmt: "2020-01-19T23:26:14",
        date_modified: "2020-01-19T23:29:24",
        date_modified_gmt: "2020-01-19T23:29:24",
        type: "simple",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<\/p>\n",
        short_description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<\/p>\n",
        sku: "POSTER-PREMIUM-QUALITY",
        price: "12",
        regular_price: "15",
        sale_price: "12",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;<\/span>15.00<\/span><\/del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;<\/span>12.00<\/span><\/ins>',
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
        related_ids: [59, 44, 62, 50, 64],
        upsell_ids: [59],
        cross_sell_ids: [],
        parent_id: 0,
        purchase_note: "",
        categories: [
          {
            id: 18,
            name: "Bedsteads",
            slug: "bedsteads"
          }
        ],
        tags: [],
        images: [
          {
            id: 86,
            date_created: "2020-01-19T23:26:11",
            date_created_gmt: "2020-01-19T23:26:11",
            date_modified: "2020-01-19T23:26:11",
            date_modified_gmt: "2020-01-19T23:26:11",
            src:
              "http:\/\/purple:8888\/wp-content\/uploads\/2020\/01\/poster_3_up.jpg",
            name: "poster_3_up.jpg",
            alt: ""
          },
          {
            id: 87,
            date_created: "2020-01-19T23:26:12",
            date_created_gmt: "2020-01-19T23:26:12",
            date_modified: "2020-01-19T23:26:12",
            date_modified_gmt: "2020-01-19T23:26:12",
            src:
              "http:\/\/purple:8888\/wp-content\/uploads\/2020\/01\/Poster_3_flat.jpg",
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
              href: "http:\/\/purple:8888\/wp-json\/wc\/v3\/products\/88"
            }
          ],
          collection: [
            {
              href: "http:\/\/purple:8888\/wp-json\/wc\/v3\/products"
            }
          ]
        }
      },
      {
        id: 85,
        name: "Woo Ninja",
        slug: "woo-ninja",
        permalink: "http:\/\/purple:8888\/product\/woo-ninja\/",
        date_created: "2020-01-19T23:26:09",
        date_created_gmt: "2020-01-19T23:26:09",
        date_modified: "2020-01-19T23:29:32",
        date_modified_gmt: "2020-01-19T23:29:32",
        type: "simple",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<\/p>\n",
        short_description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<\/p>\n",
        sku: "POSTER-WOO-NINJA",
        price: "15",
        regular_price: "15",
        sale_price: "",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;<\/span>15.00<\/span>',
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
        related_ids: [63, 56, 60, 70, 54],
        upsell_ids: [],
        cross_sell_ids: [57, 58],
        parent_id: 0,
        purchase_note: "",
        categories: [
          {
            id: 17,
            name: "Ottoman",
            slug: "ottoman"
          }
        ],
        tags: [],
        images: [
          {
            id: 83,
            date_created: "2020-01-19T23:26:07",
            date_created_gmt: "2020-01-19T23:26:07",
            date_modified: "2020-01-19T23:26:07",
            date_modified_gmt: "2020-01-19T23:26:07",
            src:
              "http:\/\/purple:8888\/wp-content\/uploads\/2020\/01\/poster_4_up.jpg",
            name: "poster_4_up.jpg",
            alt: ""
          },
          {
            id: 84,
            date_created: "2020-01-19T23:26:08",
            date_created_gmt: "2020-01-19T23:26:08",
            date_modified: "2020-01-19T23:26:08",
            date_modified_gmt: "2020-01-19T23:26:08",
            src:
              "http:\/\/purple:8888\/wp-content\/uploads\/2020\/01\/Poster_4_flat.jpg",
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
              href: "http:\/\/purple:8888\/wp-json\/wc\/v3\/products\/85"
            }
          ],
          collection: [
            {
              href: "http:\/\/purple:8888\/wp-json\/wc\/v3\/products"
            }
          ]
        }
      },
      {
        id: 82,
        name: "Woo Logo",
        slug: "woo-logo",
        permalink: "http:\/\/purple:8888\/product\/woo-logo\/",
        date_created: "2020-01-19T23:26:06",
        date_created_gmt: "2020-01-19T23:26:06",
        date_modified: "2020-01-19T23:29:43",
        date_modified_gmt: "2020-01-19T23:29:43",
        type: "simple",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<\/p>\n",
        short_description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.<\/p>\n",
        sku: "POSTER-WOO-LOGO",
        price: "15",
        regular_price: "15",
        sale_price: "",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;<\/span>15.00<\/span>',
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
        related_ids: [56, 91, 54, 63, 70],
        upsell_ids: [],
        cross_sell_ids: [55, 56],
        parent_id: 0,
        purchase_note: "",
        categories: [
          {
            id: 17,
            name: "Ottoman",
            slug: "ottoman"
          }
        ],
        tags: [],
        images: [
          {
            id: 80,
            date_created: "2020-01-19T23:26:04",
            date_created_gmt: "2020-01-19T23:26:04",
            date_modified: "2020-01-19T23:26:04",
            date_modified_gmt: "2020-01-19T23:26:04",
            src:
              "http:\/\/purple:8888\/wp-content\/uploads\/2020\/01\/poster_5_up.jpg",
            name: "poster_5_up.jpg",
            alt: ""
          },
          {
            id: 81,
            date_created: "2020-01-19T23:26:05",
            date_created_gmt: "2020-01-19T23:26:05",
            date_modified: "2020-01-19T23:26:05",
            date_modified_gmt: "2020-01-19T23:26:05",
            src:
              "http:\/\/purple:8888\/wp-content\/uploads\/2020\/01\/Poster_5_flat.jpg",
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
              href: "http:\/\/purple:8888\/wp-json\/wc\/v3\/products\/82"
            }
          ],
          collection: [
            {
              href: "http:\/\/purple:8888\/wp-json\/wc\/v3\/products"
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
