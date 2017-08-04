import {SET_ACTIVE_TAB} from '../constants/index';


//Set the active tab when users go to direct urls.
export const setActiveTab = (tabId) => {
    return({
        type:SET_ACTIVE_TAB,
        payload:tabId
    })
}