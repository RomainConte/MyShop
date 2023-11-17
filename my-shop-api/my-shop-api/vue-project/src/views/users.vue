<template>
    <div id="app">
        <header>
            <div class="logo-container">
                <img src="@/assets/logo.svg" alt="Logo" class="logo" />
                <span class="shop-name">MyShop</span>
            </div>
            <div class="search-container">
                <input v-model="searchQuery" type="text" placeholder="Rechercher..." class="search-input" />
                <button @click="search">Rechercher</button>
            </div>
        </header>

        <main>
            <h1>Products :</h1>
            
            <div class="products">
                
                <div class="product-row">
                    <div class="product-card" v-for="product in filteredProducts" :key="product.id">
                        <div class="product-info">
                            <div>{{ product.name }}</div>
                            <div class="price">{{ product.price }} $</div>
                            <div class="category">{{ product.categories }}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <router-link to="/admin">cliquez ici pour retourner sur la page admin</router-link>
                </div>
            </div>
        </main>
        
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
            searchQuery: "",
            selectedCategory: ""
        };
    },
    created() {
        this.fetchProducts();
    },
    computed: {
        filteredProducts() {
            // Filtrez les produits en fonction de la recherche et de la catégorie sélectionnée
            return this.products.filter(product =>
                product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
                (this.selectedCategory === "" || product.category === this.selectedCategory)
            );
        },
        categories() {
            // Récupérez toutes les catégories uniques des produits
            return [...new Set(this.products.map(product => product.category))];
        }
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
        search() {
            // Logique de recherche
            alert("Recherche en cours pour : " + this.searchQuery);
        }
    }
};
</script>

<style scoped>
/* Ajoutez des styles globaux si nécessaire */

  
#app {
    margin-top: 60px;
    width: max-content;
    height: max-content;
}

header {
    padding: 1px;
    background: #242222;
    text-align: left;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 999;
}

.logo-container {
    display: flex;
    align-items: center;
}

.logo {
    width: 1in;
    height: 40px;
    margin-right: 2cm;
}
.product-info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    top: 75%;
}
router-link{
    margin-top: 15em;
}
.product-card {
    display: inline-block;
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    width: 20em;
    height: 20em;
}
.product-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
  .shop-name {
    font-size: 24px;
    font-weight: bold;
  }
  
  .search-container {
    display: flex;
    align-items: center;
    
  }
  
  .search-input {
    margin-right: 2em;
    width: 15ezm;
  }
  h1{
    position: fixed;
  }
</style>