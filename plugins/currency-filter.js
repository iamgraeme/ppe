import Vue from "vue";

Vue.filter("pound", function(value) {
  // Using a template literal here, that's why there are two dollar signs.
  // The first is an actual dollar.
  return value.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP"
  });
});

Vue.filter("VatAmountFromGross", function(value) {
  var vat = 0.2;
  const subtotal = value / (1 + 1 / vat);

  return subtotal.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP"
  });
});

Vue.filter("VatAmountFromNet", function(value) {
  var vat = 0.2;
  const subtotal = value / (1 + 1 / vat);
  const total = value - subtotal;

  return total.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP"
  });
});
