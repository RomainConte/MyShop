import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useProducts = defineStore("product", {
  state: () => {
    return {
      products: [],
    };
  },
  getters: {
    getProducts: (state) => state.products,
  },
  actions: {
    async fetchProduct() {
      this.products = await axios({
        url: "http://localhost/api/products",
        method: "get",
      });
    },
  },
});
