import {CONTROL_SECTION_ACTIVE} from "./actionTypes";

export const controlSectionActive = dispatch => {
        //Make API Call
        setTimeout(() => {
            dispatch({ type: CONTROL_SECTION_ACTIVE });
        }, 2000);
};