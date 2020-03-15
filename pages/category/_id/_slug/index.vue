<template>
  <div>
    <div class="container mx-auto">
      <PageHeading :title="$route.params.slug" />
      <div>
        <!-- <Breadcrumb /> -->
      </div>
      <div
        v-if="isLoading"
        class="h-64 w-full flex justify-center items-center"
      >
        <Loader />
      </div>
      <div class="flex justify-start flex-wrap px-6 sm:px-0" v-else>
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
import Loader from "@/components/Loader";

export default {
  transition: "slide-fade",
  components: {
    PageHeading,
    ProductCard,
    Breadcrumb,
    Loader
  },

  data: () => ({
    pageTitle: "",
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
        related_ids: [52, 17, 49, 26, 25],
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
        related_ids: [43, 13, 25, 26, 49],
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
        related_ids: [46, 64, 43, 17, 25],
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
        related_ids: [26, 25, 43, 13, 55],
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
        related_ids: [43, 64, 26, 55, 25],
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
        related_ids: [52, 13, 26, 46, 49],
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
        related_ids: [20, 12, 14, 31, 11],
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
        related_ids: [11, 16, 20, 12, 34],
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
        related_ids: [43, 13, 17, 25, 64],
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
        related_ids: [17, 46, 13, 64, 55],
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
    ],
    isLoading: false
  }),
  head() {
    return {
      title: "Purple People Eater",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  }
};
</script>
