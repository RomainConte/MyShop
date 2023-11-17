  <template>
    <p>{{ getProducts.data["hydra:member"]}}</p>
    <RouterView />
  </template>

<script>
import { useProducts } from '../stores/counter.js';
import { mapActions, mapState } from "pinia";

  export default {
    data() {
      return {
        products: []
      };
    },
    async mounted() {
      await this.fetchProduct;
    },
    computed: {
      ...mapActions(useProducts, ["fetchProduct"]),
      ...mapState(useProducts, ["getProducts"]),
    },
    methods: {
    }
 };

</script>


<style>
</style>