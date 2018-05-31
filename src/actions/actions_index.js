import constans from "../utils/constans";
import axios from "axios";

export function fetchUsers() {
    const request = axios.get("https://randomuser.me/api/?results=20").then(request => request.data.results);
    return {
        type: constans.actionType.FETCH_USERS,
        payload: request
    }
}