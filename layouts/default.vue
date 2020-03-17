<template>
  <div class="relative">
    <Header />
    <nuxt />
    <Footer />
    <script type="text/javascript" data-cfasync="false">
      window.purechatApi = {
        l: [],
        t: [],
        on: function() {
          this.l.push(arguments);
        }
      };
      (function() {
        var done = false;
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = "https://app.purechat.com/VisitorWidget/WidgetScript";
        document
          .getElementsByTagName("HEAD")
          .item(0)
          .appendChild(script);
        script.onreadystatechange = script.onload = function(e) {
          if (
            !done &&
            (!this.readyState ||
              this.readyState == "loaded" ||
              this.readyState == "complete")
          ) {
            var w = new PCWidget({
              c: "af8fe901-b7d9-4c84-8973-11b49c7ccab5",
              f: true
            });
            done = true;
          }
        };
      })();
    </script>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
