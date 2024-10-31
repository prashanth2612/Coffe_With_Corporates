import * as actionTypes from './types'

const contextActions = (dispatch)=>{
    return{
        modal:{
            open:()=>{
                dispatch({type:actionTypes.OPEN_MODAL})
            },

            close: ()=>{
                dispatch({type:actionTypes.CLOSE_MODAL})
            }

        },
        advancedBox:{
            open: ()=>{
                dispatch({type:actionTypes.OPEN_ADVANCED_BOX});
            },
            close:()=>{
                dispatch({type:actionTypes.CLOSE_ADVANCED_BOX})
            },
        },
    }
}

export default contextActions;