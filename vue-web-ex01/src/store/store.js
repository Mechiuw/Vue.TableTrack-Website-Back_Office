
export default {
state : () => ({
    orders:[]
}),
mutations : {
    ADD_ORDER(state,order){
        console.log('ORDER',order);
        state.orders = [order,...state.orders]
    },
    REMOVE_ORDER(state,order){
        const index = state.orders.indexOf(order)
        if(index !== -1){
            state.orders.splice(index,1);
        }
    },
    UPDATE_ORDER(state,order){
        const index = state.orders.indexOf(order)
        if(index !== -1){
            state.orders[index] = order;
        }
    }
},

getters : {

    GET_ORDER_BY_ID: (state) => (id) => {
        return state.orders.find(order => order.id === id);
    }
}

}