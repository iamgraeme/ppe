<template>
  <div class="container mx-auto">
    <div class="flex mt-16">
      <div class="w-7/12 flex">
        <div class="w-2/12 flex flex-col">
          <div class="mb-3" v-for="image in product.images" :key="image.id">
            <img
              class="w-full pr-3 cursor-pointer"
              :src="image.src"
              :alt="image.name"
            />
          </div>
        </div>
        <div class="w-10/12">
          <img
            class="w-full pr-3"
            :src="product.images[0].src"
            :alt="product.name"
          />
        </div>
      </div>
      <div class="h-64 w-5/12">
        <h1 class="text-3xl font-light text-gray-600">{{ product.name }}</h1>
        <p class="text-3xl font-normal text-purple-800 mb-2">
          £{{ product.price }}.00
        </p>
        <div class="border-t border-b border-gray-300 py-1 mb-2">
          <div class="flex items-center">
            <span class="text-sm mr-2 text-gray-500">4.5</span>
            <span>
              <img src="@/assets/images/starz.svg" alt="" />
            </span>
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
      </div>
    </div>
  </div>
</template>

<script>
import PageHeading from "@/components/PageHeading";
import SocialIcons from "@/components/SocialIcons";
export default {
  components: {
    PageHeading,
    SocialIcons
  },
  data: () => ({
    product: {
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
    }
  })
};
</script>

<style lang="scss" scoped></style>
