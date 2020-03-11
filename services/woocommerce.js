var WooCommerceAPI = require("@woocommerce/woocommerce-rest-api");

const WooCommerce = new WooCommerceAPI({
  url: "http://64.227.41.179",
  consumerKey: process.env.WOOCOMMERCE_KEY,
  consumerSecret: process.env.WOOCOMMERCE_SECRET,
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
