export const state = () => ({
    orders : []
})

export const mutations = {
    ADD_ORDER(state,order){
        state.order = [order,...state.orders]
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
    },
    GET_ALL_ORDER(state,order){
        if(isEmpty(state.orders) != true){
            return [...state.orders]
        }
    },
    GET_BY_ID(state,order){
        const index = state.orders.indexOf(order)
        if(index !== -1){
            return [...state.orders]
        }
    }

}

function isEmpty(arx){
    return arx === 0;
}
