import {GET_USERNAMES} from '../constants';
import axios from 'axios';

export const  getUsers = () => {    
    const request = axios.get('http://localhost:3000/snapchats');

    return(dispatch) => {
        request
        .then((users) => {            
            dispatch({
                type:GET_USERNAMES,
                users: users.data
            })
            console.log("GET USERNAMES ACTION CREATOR", users);
        });
    }
    
    
}