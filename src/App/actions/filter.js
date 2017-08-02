import { SHOW_FILTER} from '../constants/index';

export const showFilter = (filter) => {
    filter = !filter;    
   return({type:SHOW_FILTER, payload:filter})
}