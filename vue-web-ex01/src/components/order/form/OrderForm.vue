<template>
  <div class="container">
    <form @submit.prevent="addOrder" class="form-control ordr-form">
      <div class="input-div">
        <label for="order-date">Date</label>
        <input v-model="orderDate" type="date" id="order-date" class="order-inputs">
      </div>
      <div class="input-div">
        <label for="customer-select">Customer</label>
        <Autocomplete
          v-model="customer"
          :api-url="customerApiUrl"
          field-name="name"
          placeholder="Search for customer..."
          
        />
      </div>
      <div class="input-div">
        <label for="order-quantity-product">Quantity</label>
        <input v-model="orderQuantity" type="number" id="order-quantity-product" min="1" class="order-inputs"/>
      </div>
      <div class="input-div">
        <label for="order-product">Product</label>
        <Autocomplete
          v-model="product"
          :api-url="productApiUrl" 
          field-name="name"
          placeholder="Search for product..."
        />
      </div>
      <div class="input-div">
        <button class="btn btn-dark button-order-input" type="submit">Order!</button>
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
    const store = useStore()

    const customer = ref({});
    const product = ref({});

    const customerApiUrl = 'http://localhost:8080/api/customer/search';
    const productApiUrl = 'http://localhost:8080/api/product/search';

    const orderQuantity = ref(0);
    const orderDate = ref(null);

    const addOrder = () => {
      const newOrder = {
        date: orderDate.value,
        customer: customer.value?.name,
        product: product.value?.name,
        quantity: orderQuantity.value
      };
      store.commit('ADD_ORDER', newOrder);
    };

    return {
      addOrder,
      customer,
      product,
      customerApiUrl,
      productApiUrl,
      orderQuantity,
      orderDate
    };
  }
};
</script>

<style>
@import url('../form/OrderFormStyle.css');
</style>
