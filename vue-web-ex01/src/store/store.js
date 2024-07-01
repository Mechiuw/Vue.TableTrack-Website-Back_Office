export const state = () => ({
    orders : []
})

export const mutations = {
    ADD_ORDER(state,order){
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
}

export const getters = {
    GET_ALL_ORDERS(state) {
        return state.orders;
    },
    GET_ORDER_BY_ID: (state) => (id) => {
        return state.orders.find(order => order.id === id);
    }
}

