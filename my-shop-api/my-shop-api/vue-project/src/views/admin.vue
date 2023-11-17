<template>
    <div>
        <h1>Welcome to MyShop Admin Panel</h1>
        <p>Here you can manage your products and orders.</p>
         <router-link to="/products">cliquez ici</router-link>
<!-- 
        <div v-if="showProducts">

            <div v-if="getStatus == 'done'">
                <h2>Products</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in getProducts.data['hydra:member']" :key="product.id">
                            <td>{{ product.name }}</td>
                            <td>{{ product.price }}€</td>
                            <td>{{ product.description }}</td>
                            <td>
                                <button @click="deleteProduct(product.id)">Delete</button>
                                <button @click="console.log(product.id)">Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p v-if="status == deleting">deleting</p>
            </div>
            <div v-else>
                <p>... loading</p>
            </div>
        </div> -->

    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useproducts } from '../stores/products';


// export default {
    // name: 'admin',
    // data() {
    //     return {
    //         showProducts: false,
    //         products: [],
    //         categories : [],
    //         status: "init",
    //     };
    // },
    // mounted() {
    //     this.fetchProduct;
    //     this.fetchCategories;
    // },
    // computed: {
    //     ...mapActions(useproducts, ['fetchProduct', 'fetchCategories', 'editProduct']),
    //     ...mapState(useproducts, ['getProducts','getCategories', 'getStatus']),
    // },
    // methods: {
    //     gottoProduct() {
    //         this.$router.push('/products');
    //     },

    //   fetchCategories(){
    //       const yourToken2 = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAwODA5MjUsImV4cCI6MTcwMDA4NDUyNSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImNfcm9tYWluQG91dGxvb2suZnIifQ.Kzv444uljIB_uvQD2VYRHmqmAOPiXGooNVRleDNtdBDU5hP24tL4gdJQikPW5h53He4hHN-IggVkUmk9EdsloL0iCHLoG9Ggur04a7HfhzpnANaEU2duOZSt5vwSUx-ALxu_VHcsPkPaGSM5vZe8tjH8OO-Rk0cJalFvkioK01xc7hj3hzIUTQcSj81YQKsWvSrPvi2bf5GK-ySzP6wlCSrbRBzjkQ84CaE-lbFjs53XhKE8tq_MwJJfzxjI-sUMvDg_UYo9C76CzaouijwN_TObVxIEaHT-UOiqdFo9PaAcD_X0atwqR6-dh14aI-ROvzMIR0BOpSuK8gpACR8fxQ"
    //       this.status = "fetching"
    //       this.categories = fetch(`http://localhost/api/categories`, { method: 'get', 
    //       headers: {
    //             'Authorization': `Bearer${yourToken2}`,
    //             'Content-Type': 'application/json'
    //         }});
    //       this.status = "done2"
    //     },


// }
// }
</script>

<style>
h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #ddd;
}

button {
    margin-right: 5px;
    background-color: aquamarine;
}
</style>