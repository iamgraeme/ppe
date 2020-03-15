<script>
export default {
  name: "Modal",
  props: {
    productType: String
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<template>
  <div class="modal-backdrop">
    <div class="modal relative">
      <button type="button" class="btn-close w-4 h-4 absolute right-20 top-0 z-30" @click="close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          class="fill-current w-4 h-4 text-black hover:text-gray-600"
        >
          <path
            d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
          />
        </svg>
      </button>
      <section class="modal-body">
        <img
          style="max-width: 600px"
          src="https://api.purplepeopleeater.co.uk/wp-content/uploads/2020/03/image-040.png"
        />
      </section>
    </div>
  </div>
</template>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  border-radius: 10px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>
