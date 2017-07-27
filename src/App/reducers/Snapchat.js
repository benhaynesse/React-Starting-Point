import {GET_USERNAMES} from '../constants/';

//Default User State to prevent state being null when calling map.
const defaultUserState = ()=>{
    let users = [{id:0, username:"",age:0, gender:""}];
    return users;
}


const users = (state = defaultUserState(), action) => {    
    let users = null;
    switch(action.type){
        case GET_USERNAMES:
            console.log("GET USERNAMES REDUCER", action);
            return action.users;
        default:            
            return state;
    }
}

export default users;