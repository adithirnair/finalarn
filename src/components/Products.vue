<template>
    <main>
      <!-- List of products in the "Products" component -->
      <section id="product-listings">
        <!-- Individual Product Card 1 -->
        <div class="product-card">
          <img src="images/product1.jpg" alt="Product 1">
          <h2>HOT PINK LIPGLOSS</h2>
          <p class="description">Beautiful glossy shimmery gloss perfect for your glam look.</p>
          <p class="price">$25.99</p>
          <button @click="askToAddToCart(1)">Add to Cart</button>
        </div>
        
        <!-- Individual Product Card 2 -->
        <div class="product-card">
          <img src="images/product2.jpg" alt="Product 2">
          <h2>DEEP RED LIPGLOSS</h2>
          <p class="description">Make a statement with this deep red shade.</p>
          <p class="price">$25.99</p>
          <button @click="askToAddToCart(2)">Add to Cart</button>
        </div>
        
        <!-- Repeat for other products -->
      </section>
    </main>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Data for products (you can replace this with your actual product data)
  const products = [
    { id: 1, name: 'HOT PINK LIPGLOSS', description: 'Beautiful glossy shimmery gloss perfect for your glam look.', price: 25.99 },
    { id: 2, name: 'DEEP RED LIPGLOSS', description: 'Make a statement with this deep red shade.', price: 25.99 },
  ];
  
  // Function to add a product to the cart
  const addToCart = (productId) => {
    // Implement your cart logic here
    console.log(`Added product with ID ${productId} to the cart.`);
  };
  
  // Function to ask for confirmation before adding to the cart
  const askToAddToCart = (productId) => {
    if (confirm('Do you want to add this to the cart?')) {
      addToCart(productId);
    }
  };
  </script>
  
  <style scoped>
  /* Component-specific styles */
  .product-card {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(234, 174, 234, 0.2);
    width: 200px;
    height: auto;
    padding: 1rem;
    margin: 1rem;
    align-items: center;
    text-align: center;
  }
  
  .product-card img {
    max-width: 100%;
    height: auto;
    width: 100%;
    aspect-ratio: 1;
  }
  
  .price {
    font-weight: bold;
    color: #009688;
  }
  
  button {
    background-color: #009688;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #00796b;
  }
  </style>
  