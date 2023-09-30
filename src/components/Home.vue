<template>
    <main>
      <section id="welcome">
        <h1>Welcome to ARN</h1>
        <p class="tagline">BE BOLD AND EXPRESS</p>
      </section>
  
      <section id="featured-products">
        <h2>Featured Products</h2>
        <div class="product">
          <img src="images/feature1.jpg" alt=" SKINCARE MASK">
          <h3>SKINCARE MASK 1</h3>
          <p class="description">FOR THAT FRESH GLOWY LOOK.</p>
          <p class="price">$49.99</p>
          <button>Add to Cart</button>
        </div>
        <div class="product">
          <img src="images/feature2.jpg" alt="Featured Product 2">
          <h3>JADE ROLLER</h3>
          <p class="description">STAY UP TO DATE WITH THE LATEST TRENDS .</p>
          <p class="price">$59.99</p>
          <button>Add to Cart</button>
        </div>
        <!-- Add more featured products as needed -->
      </section>
    </main>
  </template>
  
  <script setup>
  // You can import any necessary components or variables here
  </script>
  
  <style scoped>
  /* Component-specific styles */
  #welcome {
    text-align: center;
    margin: 3rem auto;
  }
  
  h1 {
    font-size: 2.5rem;
    color: #009688;
  }
  
  .tagline {
    font-size: 1.2rem;
    color: #555;
  }
  
  #featured-products {
    text-align: center;
    margin: 2rem auto;
  }
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #009688;
  }
  
  .product {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(234, 174, 234, 0.2);
    width: 250px;
    padding: 1rem;
    margin: 1rem;
    display: inline-block;
    text-align: center;
    transition: transform 0.2s;
  }
  
  .product:hover {
    transform: translateY(-5px);
  }
  
  .product img {
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #009688;
  }
  
  .description {
    font-size: 1rem;
    color: #555;
    margin-bottom: 0.5rem;
  }
  
  .price {
    font-weight: bold;
    color: #009688;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
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
  