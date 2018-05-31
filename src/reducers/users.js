import constans from "../utils/constans"

export function fetchUsers(state=null, action) {
    console.log("Reducer", action.payload);
    switch(action.type) {
        case constans.actionType.FETCH_USERS:
            return action.payload
        default:
            return state;
    }
}