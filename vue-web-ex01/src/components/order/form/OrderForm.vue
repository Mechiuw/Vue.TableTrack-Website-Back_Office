<template>
  <div class="container">
    <form @submit.prevent="addOrder" class="form-control">
        <div>
            <label for="order-date">Date</label>
            <input v-model="orderDate" type="date" id="order-date">
        </div>
        <div>
            <label for="customer-select">customer</label>
            <autocomplete
                v-model="selectedCustomer"
                :api-url="customerOptions"
                field-name="name"
                placeholder="Search for customer..."
            />
        </div>
        <div>
            <label for="order-quantity-produc">quantity</label>
            <input v-model.number="orderQuantity" type="number" id="order-quantity-product" min="1"/>
        </div>
        <div>
            <label for="order-product">product</label>
            <autocomplete
                v-model="selectedProduct"
                :api-url="productOptions"
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
import Autocomplete from '@/components/Autocomplete.vue';
export default {
    components:{
        Autocomplete,
    },
    setup(){
        const selectedCustomer = ref('');
        const selectedProduct = ref('');
        const customerApiUrl = 'API_URL/customers';
        const productApiUrl = 'API_URL/products';
        
        const orderQuantity = ref(1);
        const orderDate = ref(null);

        const addOrder = () =>{
            if(selectedCustomer && selectedProduct && orderQuantity.value > 0 && orderDate){
                const newOrder = {
                  date : orderDate.value ,
                  customer : selectedCustomer.value,
                  quantity : orderQuantity.value,
                  product : selectedProduct.value
                }
                this.$store.commit('ADD_TASK',newOrder)
                console.log(newOrder);
                orderDate.value = ''
                selectedCustomer.value = ''
                orderQuantity.value = 1
                selectedProduct.value = ''
            }
        }

        return {
            selectedCustomer,
            selectedProduct,
            customerApiUrl,
            productApiUrl,
            orderQuantity,
            orderDate,
            addOrder
        }
    },
}
</script>

<style>
@import url('./OrderFormStyle.css');
</style>