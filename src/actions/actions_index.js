import constans from "../utils/constans";
import axios from "axios";

export function fetchUsers(options) {
    const config = {
        number: 20, // res
        gender: "male", //?gender=male
        nat: "br", //?nat=gb AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IR, NL, NZ, TR, US
        ...options
    }
    
    const request = axios.get(`https://randomuser.me/api/?results=${config.number}&gender=${config.gender}&nat=${config.nat}`).then(request => request.data.results);

    // if (callback) {
    //     console.log("JEST CALLBACK ACTION");
    // }

    return {
        type: constans.actionType.FETCH_USERS,
        payload: request
    }
}

export const getUsersByGender = (gender) => {
    return function(dispatch) {
        axios.get(`https://randomuser.me/api/?gender=${gender}`).then(
            response => dispatch({
                type: constans.actionType.GET_GENDER,
                payload: response.data.results
            })
        )   
    }
};