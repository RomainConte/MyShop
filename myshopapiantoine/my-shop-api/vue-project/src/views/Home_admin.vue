<template>
    <div class="button">
        <a href=# class="category">Product</a>
        <a href=# class="category">Categories</a>
        <a href=# class="category">Users</a>
    </div>
    <section class="menu">
        <p class="col">Product</p>
        <p class="col">Description</p>
        <p class="col">Price</p>
        <p class="col">ID</p>
        <p class="col">Category</p>
        <p class="col">Actions</p>
    </section>
    <article  v-for="product in getProducts.data['hydra:member']" :key="product.id" class="colonne">
        <!-- <article  v-for="product in getProducts.data" :key="product.id" class="colonne"> -->
    <section class="menu">
        <p class="col">{{product.name}}</p>
        <p class="col">{{ product.description }}</p>
        <p class="col">{{ product.price }}</p>
        <p class="col">{{product.id}}</p>
        <p class="col">{{product.categories}}</p>
        <button>EDIT</button>
        <button @click="delete_product(product.id)">DELETE</button>
    </section>
    </article>
</template>

<script>
import { useProducts } from '../stores/counter.js';
import { mapActions, mapState } from "pinia";


const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDAxMjM0MjgsImV4cCI6MTcwMDEyNzAyOCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImNfcm9tYWluQG91dGxvb2suZnIifQ.LV3KH53OjP6sb3N1NzFTLjKtLpK0E0MB7JQE7KhrPQ_qCZ8nKSNOz8-v4Elg7ije7GDCsIfN1ixU9Vqiyl3ArPhJB5CvPEe_Uy4YnmB65rxPc1lL9hKqlhxq_y7gandFkbilgjraiPB0RpQ8eqrm4qeyrvu6_RLvxBl1bPKAgTqTy-T0F53678wrrSjnIy6LyyH56PjelabSkp7e2m6MmZwKd7guG5NG7OXe6m8LH1sB2U3X5Ed1TnKqkxKy4ToJCclN0QEQz7bJMz7vo0r6aaBvzyeJBE-dsCq9Hglb_QV0GvgwKO1CbMa0MqoaPZkbPYmWG-E2C2OIjwPrroYw1w';

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
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
            async delete_product(id) {
                try {
                    const response = await fetch(`http://localhost/api/products/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                    });
                    if (!response.ok) {
                        throw new Error(`Request failed with status ${response.status}`);
                    }
                    location.reload();
                } catch (error) {
                    console.error('Error deleting product:', error.message);
                }
            },
        }
    }
</script>
<!-- FIN HTML -->


<!-- FIN JS -->

<style>

.button {
    padding-top: 100px;
    padding-left: 35%;
}
.category {
    padding: 50px
}
.menu {
    display: flex;
    padding-top: 40px;
}

.col {
    width: 200px;
    border: solid 1px black;
}
</style>

<!-- FIN CSS -->