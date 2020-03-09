<template>
  <div>
    <div class="mt-16">
      <div class="container mx-auto flex">
        <div class="w-7/12 flex">
          <div class="w-2/12 flex flex-col">
            <div class="mb-3" v-for="image in product.images" :key="image.id">
              <img class="w-full pr-3 cursor-pointer" :src="image.src" :alt="image.name" />
            </div>
          </div>
          <div class="w-10/12">
            <img class="w-full pr-3" :src="product.images[0].src" :alt="product.name" />
          </div>
        </div>
        <div class="w-5/12 pl-3">
          <h1 class="text-3xl font-light text-gray-600">{{ product.name }}</h1>
          <p class="text-3xl font-normal text-purple-800 mb-2">£{{ product.price }}.00</p>
          <div class="border-t border-b border-gray-300 py-1 mb-2">
            <div class="flex items-center">
              <span class="text-sm mr-2 text-gray-500">4.5</span>
              <span>
                <img src="@/assets/images/starz.svg" alt />
              </span>
            </div>
          </div>
          <div>
            <div v-html="product.description" class="text-sm text-gray-500 leading-loose"></div>
          </div>
          <div class="border-t border-b border-gray-300 py-3 mb-2 mt-10">
            <div class="flex items-center justify-center">
              <SocialIcons />
            </div>
          </div>
          <div class="flex">
            <div class="border border-gray-200 rounded-full py-2 px-4">
              <button class="text-3xl">-</button>
              <input type="text" value="1" />
              <button class="text-lg">+</button>
            </div>
            <div>
              <input
                class="bg-purple-800 mb-10 hover:bg-purple-400 cursor-pointer rounded-full py-3 px-6 text-white focus:outline-none text-sm focus:shadow-outline"
                type="submit"
                value="Add to Cart"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Cta />
    </div>
  </div>
</template>

<script>
import PageHeading from "@/components/PageHeading";
import SocialIcons from "@/components/SocialIcons";
import Cta from "@/components/Cta";
export default {
  components: {
    PageHeading,
    SocialIcons,
    Cta
  },
  data: () => ({
    product: {
      id: 28,
      name: "Logo Collection",
      slug: "logo-collection",
      permalink: "http://35.178.124.91/product/logo-collection/",
      date_created: "2019-01-16T13:01:55",
      date_created_gmt: "2019-01-16T13:01:55",
      date_modified: "2020-03-08T21:22:17",
      date_modified_gmt: "2020-03-08T21:22:17",
      type: "grouped",
      status: "publish",
      featured: false,
      catalog_visibility: "visible",
      description:
        "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
      short_description: "<p>This is a grouped product.</p>\n",
      sku: "logo-collection",
      price: "18",
      regular_price: "",
      sale_price: "",
      date_on_sale_from: null,
      date_on_sale_from_gmt: null,
      date_on_sale_to: null,
      date_on_sale_to_gmt: null,
      price_html: "",
      on_sale: false,
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
      related_ids: [27, 18, 16, 17, 15],
      upsell_ids: [],
      cross_sell_ids: [],
      parent_id: 0,
      purchase_note: "",
      categories: [
        {
          id: 16,
          name: "Bedsteads",
          slug: "bedsteads"
        }
      ],
      tags: [],
      images: [
        {
          id: 51,
          date_created: "2019-01-16T13:02:13",
          date_created_gmt: "2019-01-16T13:02:13",
          date_modified: "2019-01-16T13:02:13",
          date_modified_gmt: "2019-01-16T13:02:13",
          src: "http://35.178.124.91/wp-content/uploads/2019/01/logo-1.jpg",
          name: "logo-1.jpg",
          alt: ""
        },
        {
          id: 50,
          date_created: "2019-01-16T13:02:12",
          date_created_gmt: "2019-01-16T13:02:12",
          date_modified: "2019-01-16T13:02:12",
          date_modified_gmt: "2019-01-16T13:02:12",
          src:
            "http://35.178.124.91/wp-content/uploads/2019/01/beanie-with-logo-1.jpg",
          name: "beanie-with-logo-1.jpg",
          alt: ""
        },
        {
          id: 49,
          date_created: "2019-01-16T13:02:11",
          date_created_gmt: "2019-01-16T13:02:11",
          date_modified: "2019-01-16T13:02:11",
          date_modified_gmt: "2019-01-16T13:02:11",
          src:
            "http://35.178.124.91/wp-content/uploads/2019/01/t-shirt-with-logo-1.jpg",
          name: "t-shirt-with-logo-1.jpg",
          alt: ""
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
          alt: ""
        }
      ],
      attributes: [],
      default_attributes: [],
      variations: [],
      grouped_products: [8, 9, 10],
      menu_order: 0,
      meta_data: [],
      _links: {
        self: [
          {
            href: "http://35.178.124.91/wp-json/wc/v3/products/28"
          }
        ],
        collection: [
          {
            href: "http://35.178.124.91/wp-json/wc/v3/products"
          }
        ]
      }
    }
  })
};
</script>

<style lang="scss" scoped></style>
