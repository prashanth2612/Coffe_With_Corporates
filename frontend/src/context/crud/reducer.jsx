import * as actionTypes from './types'


export const initialState = {
    isModalOpen: false,
    isPanelClose: true,
    isBoxCollapsed: false,
    isReadBoxOpen: false,
    isAdvancedBoxOpen: false,
    isEditBoxOpen: false,
  };

export default function contextReducer(state,action){

    switch(action.type){
        case actionTypes.OPEN_MODAL:
            return{
                ...state,
                isModalOpen: true ,
                
            };

        case actionTypes.CLOSE_MODAL:
            return{
                ...state,
                isModalOpen:false,
            }
    }

}