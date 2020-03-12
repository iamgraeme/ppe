var WooCommerceAPI = require("@woocommerce/woocommerce-rest-api");

const WooCommerce = new WooCommerceAPI({
  url: "https://api.purplepeopleeater.co.uk",
  consumerKey: "ck_8d450139382c5dc8293107cd7e3710c80ef962c1",
  consumerSecret: "cs_40ab04189e95016e6b646d5ee5aae0a0801959e5",
  wpAPI: true,
  version: "wc/v3"
});

function products() {
  return WooCommerce.getAsync("products").then(result => {
    console.log("products", JSON.parse(result.toJSON().body));

    return JSON.parse(result.toJSON().body);
  });
}
function categories() {
  return WooCommerce.getAsync("products/categories").then(result => {
    console.log("categories", JSON.parse(result.toJSON().body));
    return JSON.parse(result.toJSON().body);
  });
}

function productsByCategory(id) {
  return WooCommerce.getAsync(`products?category=${id}`).then(result => {
    console.log("productsByCategory", JSON.parse(result.toJSON().body));
    return JSON.parse(result.toJSON().body);
  });
}

export default {
  products,
  categories,
  productsByCategory
};