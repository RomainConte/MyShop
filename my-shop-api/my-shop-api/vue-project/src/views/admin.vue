<template>
    <div>
        <h1>Welcome to MyShop Admin Panel</h1>
        <p>Here you can manage your products and orders.</p>
         <router-link to="/products">cliquez ici pour voir les produits en tant qu'admin</router-link>
        <router-link to="/users">cliquez ici pour allez sur la page users</router-link>

    </div>
</template>

<script>

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