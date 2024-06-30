<template>
  <div class="container">
    <form @submit.prevent="addOrder">
        <div>
            <label for="order-date">date</label>
            <input v-model="orderDate" type="date" id="order-date">
        </div>
        <div>
            <label for="customer-select">customer</label>
            <autocomplete
                v-model="selectedCustomer"
                :data="customerOptions"
                field-name="name"
                placeholder="Search for customer..."
                @input="handleCustomerInput"
            />
        </div>
        <div>
            <label for="order-quantity-produc">quantity</label>
            <input v-model="orderQuantity" type="number" id="order-quantity-product" min="1"/>
        </div>
        <div>
            <label for="order-product">product</label>
            <autocomplete
                v-model="selectedProduct"
                :data="productOptions"
                field-name="name"
                placeholder="Search for product..."
                @input="handleProductInput"
            />
        </div>
        <div>
            <button class="btn btn-dark" type="submit">Order!</button>
        </div>
    </form>
  </div>
</template>

<script>
import Autocomplete from ''

export default {
    components:{
        Autocomplete
    },
    data(){
        return{
            orderDate :'',
            orderCustomer : '',
            orderQuantity : 0,
            orderProduct : '',
            customers : [],
            products : []
        }
    },
    methods:{
        addOrder(){
            if(this.date && this.customer && this.quantity && this.product){
                const newOrder = {
                  date : this.orderDate,
                  customer : this.orderCustomer,
                  quantity : this.orderQuantity,
                  product : this.orderProduct
                }
                this.$store.commit('ADD_TASK',newOrder)
                this.orderDate = ''
                this.orderCustomer = ''
                this.orderQuantity = 0
                this.orderProduct = ''
            }
        }
    }
}
</script>

<style>
@import url('./OrderFormStyle.css');
</style>