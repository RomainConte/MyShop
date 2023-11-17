<template>
    <section>
        <h1>Welcome to MyShop</h1>
        <div v-if="getStatus =='done'">
           <article>
                <h2>Products :</h2>
                <ul>
                     <li v-for="product in getProducts.data['hydra:member']" :key="product.id">
                           {{product.name}}
                           <ul>
                            <li>
                                {{product.description}}
                            </li>
                            <li>
                                {{product.price}}
                            </li>
                           </ul>
                     </li>
                </ul>
           </article>
        </div>

        <div v-else>
            ... Loading
        </div>
        <!-- <div id="app">
            <app-nav>
            </app-nav>
        </div> -->

    </section>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useproducts } from '../stores/products';
// import { usecategories } from '../stores/products';
export default { 
    name: 'Home',
    data() {
        return {
            products: [],
            // categories: [],
        }
    },
    mounted() {
        this.fetchProduct;
        // this.fetchcategories;
    },
    computed: {

        ...mapActions(useproducts, ['fetchProduct']),
        ...mapState(useproducts, ['getProducts', 'getStatus']),
        // ...mapActions(usecategories, ['fetchcategories']),
        // ...mapState(usecategories, ['getcategories', 'getStatus']),
    },
    methods: {
        //fonction comme js base 
    },

  
}

</script>

<style>
/* Add your styles here */
</style>
