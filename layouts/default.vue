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

<style>
.owl-theme .owl-dots .owl-dot.active span {
  background: #b794f4 !important;
}

.owl-theme .owl-nav {
  z-index: 50;
  position: absolute !important;
  right: 100px;
  bottom: 50px;
}

.owl-theme .owl-nav button {
  width: 70px;
  height: 70px;
}

.owl-carousel .owl-nav button.owl-prev,
.owl-carousel .owl-nav button.owl-next {
  background: rgba(255, 255, 255, 0.7) !important;
}

.owl-carousel .owl-nav button.owl-prev:focus,
.owl-carousel .owl-nav button.owl-next:focus {
  outline: none;
}

.owl-theme .owl-nav button span {
  font-size: 40px;
}

.owl-carousel .owl-nav button.owl-next:hover,
.owl-carousel .owl-nav button.owl-prev:hover {
  background: rgba(0, 0, 0, 0.7) !important;
  color: #fff;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
