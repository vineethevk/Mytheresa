import { UPDATE } from "./action";

const init = {
    cart: []
}

export const reducer = (store = init, { type, payload }) => {
    switch (type) {
        case UPDATE:
            return { ...store, cart: [...store.cart, payload] }
        default:
            return store
    }
}