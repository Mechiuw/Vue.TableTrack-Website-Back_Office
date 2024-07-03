<template>
  <div class="container">
    <form @submit.prevent="addOrder" class="form-control ordr-form">
      <div>
        <label for="order-date">Date</label>
        <input v-model="orderDate" type="date" id="order-date" class="order-inputs">
      </div>
      <div>
        <label for="customer-select">Customer</label>
        <Autocomplete
          v-model="selectedCustomer"
          :api-url="customerApiUrl"
          field-name="name"
          placeholder="Search for customer..."
        />
      </div>
      <div>
        <label for="order-quantity-product">Quantity</label>
        <input v-model="orderQuantity" type="number" id="order-quantity-product" min="1" class="order-inputs"/>
      </div>
      <div>
        <label for="order-product">Product</label>
        <Autocomplete
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
import Autocomplete from '@/components/Autocomplete.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  
  components:{
    Autocomplete
  },
  setup() {
    const store = useStore();
    const selectedCustomer = ref(null);
    const selectedProduct = ref(null);
    const customerApiUrl = 'http://localhost:8080/api/customer/search';
    const productApiUrl = 'http://localhost:8080/api/product/search';
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
.ordr-form {
  padding: 30px;
  width: 100%;
  height: 100%;
}
.order-inputs {
  width: 100%;
}
</style>
