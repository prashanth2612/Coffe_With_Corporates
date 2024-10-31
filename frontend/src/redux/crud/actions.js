import * as actionTypes from "./types";

export const crud = {
  resetState: () => async (dispatch) => {
    dispatch({
      type: actionTypes.RESET_STATE,
    });
  },

  resetAction:
    ({ actionType }) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.RESET_ACTION,
        keyState: actionType,
        payload: null,
      });
    },
  currentItem:
    ({ data }) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.CURRENT_ITEM,
        payload: { ...data },
      });
    },

  currentAction:
    ({ actionType, data }) =>
    async (dispatch) => {
      dispatch({
        type: actionTypes.CURRENT_ACTION,
        keyState: actionType,
        payload: { ...data },
      });
    },

  list:
    ({ entity, options = { page: 1, items: 10 } }) =>
    async (disptach) => {
      disptach({
        type:actionTypes.REQUEST_LOADING,
        keyState:'list',
        payload:null,
      });

      let data = await request.list({entity,options});

      if(data.success===true){

        
      }
    },
};
