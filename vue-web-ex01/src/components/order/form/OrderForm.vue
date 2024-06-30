<template>
  <div class="container">
    <form>
        <div>
            <label>date</label>
            <input v-model="orderDate" type="date" @keypress="addOrder"/>
        </div>
        <div>
            <label>customer</label>
            <select v-model="orderCustomer" name="customer" id="customer-select" @keypress="addOrder">
                <option value="">--select customer--</option>
                <option :value="customer">{{ customer.name }}</option>
            </select>
        </div>
        <div>
            <label>quantity</label>
            <input v-model="quantity" type="number" @keypress="addOrder"/>
        </div>
        <div>
            <label>product</label>
            <input v-model="product" type="text" @keypress="addOrder"/>
        </div>
        <div>
            <button class="btn btn-dark" @click="addOrder"></button>
        </div>
    </form>
  </div>
</template>

<script>
export default {
    data(){
        orderDate :''
        orderCustomer : ''
        quantity : 0
        product : ''

    },
    methods:{
        addOrder(){
            if(this.date && this.customer && this.quantity && this.product){
                const newOrder = {
                    
                }
            }
        }
    }
}
</script>

<style>

</style>