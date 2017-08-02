import { SHOW_FILTER } from '../constants/index';

const showFilter = (state = false, action) => {
    switch(action.type){
        case SHOW_FILTER:            
            return action.payload;
        default:
            return state;
    }
}

export default showFilter;