<template>
    <div class="container">
      <form @submit.prevent="addOrder">
        <div>
          <label for="order-date">Date</label>
          <input v-model="orderDate" type="date" id="order-date">
        </div>
        <div>
          <label for="customer-select">Customer</label>
          <autocomplete
            v-model="selectedCustomer"
            :api-url="customerApiUrl"
            field-name="name"
            placeholder="Search for customer..."
          />
        </div>
        <div>
          <label for="order-quantity-product">Quantity</label>
          <input v-model="orderQuantity" type="number" id="order-quantity-product" min="1"/>
        </div>
        <div>
          <label for="order-product">Product</label>
          <autocomplete
            v-model="selectedProduct"
            :api-url="productApiUrl" 
            field-name="name"
            placeholder="Search for product..."
          />
        </div>
        <div>
          <button class="btn btn-dark" type="submit">Order!</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    setup() {
      const store = useStore();
      const selectedCustomer = ref(null);
      const selectedProduct = ref(null);
      const customerApiUrl = 'API_URL/customers'; // Define your API URLs
      const productApiUrl = 'API_URL/products'; // Define your API URLs
      const orderQuantity = ref(0);
      const orderDate = ref(null);
  
      const addOrder = () => {
        const newOrder = {
          date: orderDate.value,
          customer: selectedCustomer.value,
          quantity: orderQuantity.value,
          product: selectedProduct.value
        };
        store.commit('ADD_ORDER', newOrder);
      };
  
      return {
        addOrder,
        selectedCustomer,
        selectedProduct,
        customerApiUrl,
        productApiUrl,
        orderQuantity,
        orderDate
      };
    }
  };
  </script>
  
  <style>
  /* Your component styles */
  </style>
  