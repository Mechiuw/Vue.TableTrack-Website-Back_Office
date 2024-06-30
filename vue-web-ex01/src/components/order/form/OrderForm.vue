<template>
  <div class="container">
    <form>
        <div>
            <label>date</label>
            <input type="date"/>
        </div>
        <div>
            <label>customer</label>
            <select name="customer" id="customer-select">
                <option value="">--select customer--</option>
                <option :value="customer">{{ customer.name }}</option>
            </select>
        </div>
        <div>
            <label>quantity</label>
            <input type="number"/>
        </div>
        <div>
            <label>product</label>
            <input type="text"/>
        </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>