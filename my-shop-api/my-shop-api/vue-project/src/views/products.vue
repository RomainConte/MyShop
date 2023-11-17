<template>
    <div>
        <div>
            <router-link to="/admin">cliquez ici pour retourner sur la page admin</router-link>
        </div>
        <h1>Liste des produits</h1>
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Prix</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.name }}</td>
                    <td>{{ product.description }}</td>
                    <td>{{ product.price }}</td>
                    <td>
                        <button @click="deleteProduct(product.id)">Supprimer</button>
                        <button @click="editProduct(product)">Modifier</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="addProduct">Ajouter un produit</button>
        <div v-if="showForm">
            <h2>{{ formTitle }}</h2>
            <form @submit.prevent="submitProduct">
                <label for="name">Nom:</label>
                <input type="text" id="name" v-model="newProduct.name" required>
                <label for="description">Description:</label>
                <input type="text" id="description" v-model="newProduct.description" required>
                <label for="price">Prix:</label>
                <input type="number" id="price" v-model="newProduct.price" required>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
axios.interceptors.request.use(config => {
  // Ajoute le token d'authentification à chaque requête sortante
config.headers.Authorization = localStorage.getItem('token');
  return config;
});

export default {
    data() {
        return {
            products: [],
            showForm: false,
            formTitle: '',
            formButton: '',
            newProduct: {
                name: '',
                description: '',
                price: 0,
            }
        };
    },
    mounted() {
        this.fetchProducts();
    },
    computed: {

    },
    methods: {
        fetchProducts() {
            axios.get('http://localhost/api/products')
                .then(response => {
                    this.products = response.data['hydra:member'];
                })
                .catch(error => {
                    console.error(error);
                });
        },
        deleteProduct(productId) {
            const yourToken = localStorage.getItem('token');

            fetch(`http://localhost/api/products/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${yourToken}`,
                    'Content-Type': 'application/json'
                },
            })
                .then(() => {
                    this.fetchProducts();
                })
                .catch(error => {
                    console.error(error);
                });
        },
        editProduct(product) {
            this.formTitle = 'Modifier le produit';
            this.newProduct = {
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
                categories: product.categories,
            };
            this.showForm = true;
            this.formButton = 'Modifier';
        },
        addProduct() {
            this.formTitle = 'Ajouter un produit';
            this.newProduct = {
                name: '',
                description: '',
                price: 0,
                
            };
            this.showForm = true;
            this.formButton = 'Ajouter';
        },
        submitProduct() {
            if (this.formButton === 'Modifier') {
                // Call the API to update the product
                axios.put(`http://localhost/api/products/${this.newProduct.id}`, this.newProduct)
                    .then(() => {
                        this.fetchProducts();
                        this.showForm = false;
                    })
                    .catch(error => {
                        console.error(error);
                    });
            } else if (this.formButton === 'Ajouter') {
                // Call the API to create a new product
                axios.post('http://localhost/api/products', this.newProduct)
                    .then(() => {
                        this.fetchProducts();
                        this.showForm = false;
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        }
    }
};
</script>
   