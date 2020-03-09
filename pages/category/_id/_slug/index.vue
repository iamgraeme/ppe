<template>
  <div>
    <div class="container mx-auto">
      <PageHeading :title="$route.params.slug" />
      <div>
        <!-- <Breadcrumb /> -->
      </div>
      <div class="flex justify-start flex-wrap">
        <ProductCard
          v-for="product in products"
          :productName="product.name"
          :image="product.images[0].src"
          :price="product.regular_price"
          :id="product.id"
          :salePrice="product.sale_price"
          :slug="product.slug"
          :key="product.id"
          noCarousel
        />
      </div>
    </div>
  </div>
</template>

<script>
import PageHeading from "@/components/PageHeading";
import ProductCard from "@/components/ProductCard";
import Breadcrumb from "@/components/Breadcrumb";
export default {
  components: {
    PageHeading,
    ProductCard,
    Breadcrumb
  },
  data: () => ({
    products: [
      {
        id: 29,
        name: "WordPress Pennant",
        slug: "wordpress-pennant",
        permalink: "http://35.178.124.91/product/wordpress-pennant/",
        date_created: "2019-01-16T13:01:55",
        date_created_gmt: "2019-01-16T13:01:55",
        date_modified: "2020-03-08T21:22:11",
        date_modified_gmt: "2020-03-08T21:22:11",
        type: "external",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        short_description: "<p>This is an external product.</p>\n",
        sku: "wp-pennant",
        price: "11.05",
        regular_price: "11.05",
        sale_price: "",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>11.05</span>',
        on_sale: false,
        purchasable: false,
        total_sales: 0,
        virtual: false,
        downloadable: false,
        downloads: [],
        download_limit: 0,
        download_expiry: 0,
        external_url:
          "https://mercantile.wordpress.org/product/wordpress-pennant/",
        button_text: "Buy on the WordPress swag store!",
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
        related_ids: [94, 92, 13, 26],
        upsell_ids: [],
        cross_sell_ids: [],
        parent_id: 0,
        purchase_note: "",
        categories: [
          {
            id: 19,
            name: "Ottoman",
            slug: "ottoman"
          }
        ],
        tags: [],
        images: [
          {
            id: 52,
            date_created: "2019-01-16T13:02:13",
            date_created_gmt: "2019-01-16T13:02:13",
            date_modified: "2019-01-16T13:02:13",
            date_modified_gmt: "2019-01-16T13:02:13",
            src:
              "http://35.178.124.91/wp-content/uploads/2019/01/pennant-1.jpg",
            name: "pennant-1.jpg",
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
              href: "http://35.178.124.91/wp-json/wc/v3/products/29"
            }
          ],
          collection: [
            {
              href: "http://35.178.124.91/wp-json/wc/v3/products"
            }
          ]
        }
      },
      {
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
      },
      {
        id: 27,
        name: "Beanie with Logo",
        slug: "beanie-with-logo",
        permalink: "http://35.178.124.91/product/beanie-with-logo/",
        date_created: "2019-01-16T13:01:55",
        date_created_gmt: "2019-01-16T13:01:55",
        date_modified: "2020-03-08T21:22:26",
        date_modified_gmt: "2020-03-08T21:22:26",
        type: "simple",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        short_description: "<p>This is a simple product.</p>\n",
        sku: "Woo-beanie-logo",
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
        related_ids: [18, 16, 17, 28, 15],
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
            id: 50,
            date_created: "2019-01-16T13:02:12",
            date_created_gmt: "2019-01-16T13:02:12",
            date_modified: "2019-01-16T13:02:12",
            date_modified_gmt: "2019-01-16T13:02:12",
            src:
              "http://35.178.124.91/wp-content/uploads/2019/01/beanie-with-logo-1.jpg",
            name: "beanie-with-logo-1.jpg",
            alt: ""
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
              href: "http://35.178.124.91/wp-json/wc/v3/products/27"
            }
          ],
          collection: [
            {
              href: "http://35.178.124.91/wp-json/wc/v3/products"
            }
          ]
        }
      },
      {
        id: 26,
        name: "T-Shirt with Logo",
        slug: "t-shirt-with-logo",
        permalink: "http://35.178.124.91/product/t-shirt-with-logo/",
        date_created: "2019-01-16T13:01:55",
        date_created_gmt: "2019-01-16T13:01:55",
        date_modified: "2020-03-08T21:22:38",
        date_modified_gmt: "2020-03-08T21:22:38",
        type: "simple",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        short_description: "<p>This is a simple product.</p>\n",
        sku: "Woo-tshirt-logo",
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
        related_ids: [94, 13, 92, 29],
        upsell_ids: [],
        cross_sell_ids: [],
        parent_id: 0,
        purchase_note: "",
        categories: [
          {
            id: 19,
            name: "Ottoman",
            slug: "ottoman"
          }
        ],
        tags: [],
        images: [
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
              href: "http://35.178.124.91/wp-json/wc/v3/products/26"
            }
          ],
          collection: [
            {
              href: "http://35.178.124.91/wp-json/wc/v3/products"
            }
          ]
        }
      },
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
        related_ids: [95, 12, 93, 96, 11],
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
              href: "http://35.178.124.91/wp-json/wc/v3/products/19"
            }
          ],
          collection: [
            {
              href: "http://35.178.124.91/wp-json/wc/v3/products"
            }
          ]
        }
      },
      {
        id: 18,
        name: "Album",
        slug: "album",
        permalink: "http://35.178.124.91/product/album/",
        date_created: "2019-01-16T13:01:54",
        date_created_gmt: "2019-01-16T13:01:54",
        date_modified: "2020-03-08T21:23:05",
        date_modified_gmt: "2020-03-08T21:23:05",
        type: "simple",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut metus leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed luctus, dui eu sagittis sodales, nulla nibh sagittis augue, vel porttitor diam enim non metus. Vestibulum aliquam augue neque. Phasellus tincidunt odio eget ullamcorper efficitur. Cras placerat ut turpis pellentesque vulputate. Nam sed consequat tortor. Curabitur finibus sapien dolor. Ut eleifend tellus nec erat pulvinar dignissim. Nam non arcu purus. Vivamus et massa massa.</p>\n",
        short_description: "<p>This is a simple, virtual product.</p>\n",
        sku: "woo-album",
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
        virtual: true,
        downloadable: true,
        downloads: [
          {
            id: "356506a5-cc15-41b9-801b-9104dda1702c",
            name: "Single 1",
            file:
              "https://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2017/08/single.jpg"
          },
          {
            id: "18e70c59-59f3-43a3-8525-ce1ea0c12943",
            name: "Single 2",
            file:
              "https://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2017/08/album.jpg"
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
        related_ids: [27, 28, 17, 16, 15],
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
            id: 47,
            date_created: "2019-01-16T13:02:09",
            date_created_gmt: "2019-01-16T13:02:09",
            date_modified: "2019-01-16T13:02:09",
            date_modified_gmt: "2019-01-16T13:02:09",
            src: "http://35.178.124.91/wp-content/uploads/2019/01/album-1.jpg",
            name: "album-1.jpg",
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
              href: "http://35.178.124.91/wp-json/wc/v3/products/18"
            }
          ],
          collection: [
            {
              href: "http://35.178.124.91/wp-json/wc/v3/products"
            }
          ]
        }
      },
      {
        id: 17,
        name: "Polo",
        slug: "polo",
        permalink: "http://35.178.124.91/product/polo/",
        date_created: "2019-01-16T13:01:53",
        date_created_gmt: "2019-01-16T13:01:53",
        date_modified: "2020-03-08T21:23:28",
        date_modified_gmt: "2020-03-08T21:23:28",
        type: "simple",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        short_description: "<p>This is a simple product.</p>\n",
        sku: "woo-polo",
        price: "20",
        regular_price: "20",
        sale_price: "",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>20.00</span>',
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
        related_ids: [27, 28, 15, 16, 18],
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
            id: 46,
            date_created: "2019-01-16T13:02:08",
            date_created_gmt: "2019-01-16T13:02:08",
            date_modified: "2019-01-16T13:02:08",
            date_modified_gmt: "2019-01-16T13:02:08",
            src: "http://35.178.124.91/wp-content/uploads/2019/01/polo-2.jpg",
            name: "polo-2.jpg",
            alt: ""
          }
        ],
        attributes: [
          {
            id: 1,
            name: "Color",
            position: 0,
            visible: true,
            variation: false,
            options: ["Blue"]
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
              href: "http://35.178.124.91/wp-json/wc/v3/products/17"
            }
          ],
          collection: [
            {
              href: "http://35.178.124.91/wp-json/wc/v3/products"
            }
          ]
        }
      },
      {
        id: 16,
        name: "Long Sleeve Tee",
        slug: "long-sleeve-tee",
        permalink: "http://35.178.124.91/product/long-sleeve-tee/",
        date_created: "2019-01-16T13:01:53",
        date_created_gmt: "2019-01-16T13:01:53",
        date_modified: "2020-03-08T21:23:36",
        date_modified_gmt: "2020-03-08T21:23:36",
        type: "simple",
        status: "publish",
        featured: false,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        short_description: "<p>This is a simple product.</p>\n",
        sku: "woo-long-sleeve-tee",
        price: "25",
        regular_price: "25",
        sale_price: "",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>25.00</span>',
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
        related_ids: [15, 27, 18, 28, 17],
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
            id: 45,
            date_created: "2019-01-16T13:02:07",
            date_created_gmt: "2019-01-16T13:02:07",
            date_modified: "2019-01-16T13:02:07",
            date_modified_gmt: "2019-01-16T13:02:07",
            src:
              "http://35.178.124.91/wp-content/uploads/2019/01/long-sleeve-tee-2.jpg",
            name: "long-sleeve-tee-2.jpg",
            alt: ""
          }
        ],
        attributes: [
          {
            id: 1,
            name: "Color",
            position: 0,
            visible: true,
            variation: false,
            options: ["Green"]
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
              href: "http://35.178.124.91/wp-json/wc/v3/products/16"
            }
          ],
          collection: [
            {
              href: "http://35.178.124.91/wp-json/wc/v3/products"
            }
          ]
        }
      },
      {
        id: 15,
        name: "Hoodie with Zipper",
        slug: "hoodie-with-zipper",
        permalink: "http://35.178.124.91/product/hoodie-with-zipper/",
        date_created: "2019-01-16T13:01:53",
        date_created_gmt: "2019-01-16T13:01:53",
        date_modified: "2020-03-08T21:23:17",
        date_modified_gmt: "2020-03-08T21:23:17",
        type: "simple",
        status: "publish",
        featured: true,
        catalog_visibility: "visible",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        short_description: "<p>This is a simple product.</p>\n",
        sku: "woo-hoodie-with-zipper",
        price: "45",
        regular_price: "45",
        sale_price: "",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>45.00</span>',
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
        related_ids: [28, 18, 17, 27, 16],
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
            id: 44,
            date_created: "2019-01-16T13:02:06",
            date_created_gmt: "2019-01-16T13:02:06",
            date_modified: "2019-01-16T13:02:06",
            date_modified_gmt: "2019-01-16T13:02:06",
            src:
              "http://35.178.124.91/wp-content/uploads/2019/01/hoodie-with-zipper-2.jpg",
            name: "hoodie-with-zipper-2.jpg",
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
              href: "http://35.178.124.91/wp-json/wc/v3/products/15"
            }
          ],
          collection: [
            {
              href: "http://35.178.124.91/wp-json/wc/v3/products"
            }
          ]
        }
      },
      {
        id: 14,
        name: "Hoodie with Pocket",
        slug: "hoodie-with-pocket",
        permalink: "http://35.178.124.91/product/hoodie-with-pocket/",
        date_created: "2019-01-16T13:01:53",
        date_created_gmt: "2019-01-16T13:01:53",
        date_modified: "2020-03-08T21:24:14",
        date_modified_gmt: "2020-03-08T21:24:14",
        type: "simple",
        status: "publish",
        featured: true,
        catalog_visibility: "hidden",
        description:
          "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        short_description: "<p>This is a simple product.</p>\n",
        sku: "woo-hoodie-with-pocket",
        price: "35",
        regular_price: "45",
        sale_price: "35",
        date_on_sale_from: null,
        date_on_sale_from_gmt: null,
        date_on_sale_to: null,
        date_on_sale_to_gmt: null,
        price_html:
          '<del><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>45.00</span></del> <ins><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&pound;</span>35.00</span></ins>',
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
        related_ids: [29, 94, 13, 26, 92],
        upsell_ids: [],
        cross_sell_ids: [],
        parent_id: 0,
        purchase_note: "",
        categories: [
          {
            id: 19,
            name: "Ottoman",
            slug: "ottoman"
          }
        ],
        tags: [],
        images: [
          {
            id: 100,
            date_created: "2019-01-16T13:02:06",
            date_created_gmt: "2019-01-16T13:02:06",
            date_modified: "2019-01-16T13:02:06",
            date_modified_gmt: "2019-01-16T13:02:06",
            src:
              "http://35.178.124.91/wp-content/uploads/2019/01/hoodie-with-pocket-2.jpg",
            name: "hoodie-with-pocket-2.jpg",
            alt: ""
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
              href: "http://35.178.124.91/wp-json/wc/v3/products/14"
            }
          ],
          collection: [
            {
              href: "http://35.178.124.91/wp-json/wc/v3/products"
            }
          ]
        }
      }
    ]
  })
};
</script>
