import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

axios.interceptors.request.use(config => {
  // Ajoute le token d'authentification à chaque requête sortante
  config.headers.Authorization = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAwODA5MjUsImV4cCI6MTcwMDA4NDUyNSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImNfcm9tYWluQG91dGxvb2suZnIifQ.Kzv444uljIB_uvQD2VYRHmqmAOPiXGooNVRleDNtdBDU5hP24tL4gdJQikPW5h53He4hHN-IggVkUmk9EdsloL0iCHLoG9Ggur04a7HfhzpnANaEU2duOZSt5vwSUx-ALxu_VHcsPkPaGSM5vZe8tjH8OO-Rk0cJalFvkioK01xc7hj3hzIUTQcSj81YQKsWvSrPvi2bf5GK-ySzP6wlCSrbRBzjkQ84CaE-lbFjs53XhKE8tq_MwJJfzxjI-sUMvDg_UYo9C76CzaouijwN_TObVxIEaHT-UOiqdFo9PaAcD_X0atwqR6-dh14aI-ROvzMIR0BOpSuK8gpACR8fxQ';
  return config;
});

export const useproducts = defineStore('products', {
    state: () => {
        return{
          products: [],
          
          status: "init"
        }
      },
      getters: {
        getProducts : state => state.products,
        getStatus : state => state.status
      },

      actions: {
        async fetchProduct(){
          this.status = "fetching"
          this.products = await axios({url: "http://localhost/api/products", method: "get"})
          this.status = "done"
        },

    }

})

