
// Action Types
export const UPDATE = "UPDATE";

// Action Creators
export const updateCart = (payload) => {
    return {
        type: UPDATE,
        payload: payload
    }
}