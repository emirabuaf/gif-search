import { SHOW_MODAL,HIDE_MODAL} from '../actions';

const INITIAL_STATE = {
  isModalVisible:false,
  selectedItem:null
}

export default function(state=INITIAL_STATE,action){
  switch (action.type) {
    case SHOW_MODAL:
      return{...state,isModalVisible:true,selectedItem:action.payload.selectedItem}
    case HIDE_MODAL:
      return{...state,isModalVisible:false,selectedItem:null}
    default:
      return state;
  };
};
