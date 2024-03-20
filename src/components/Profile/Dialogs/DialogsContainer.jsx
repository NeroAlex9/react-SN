import {
  addMessageActionCreator,
} from "../../../redux/dialog_reucer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps =(state)=>{
  return{
    dialogData:state.dialogPage.dialogData,
    messagesData: state.dialogPage.messagesData,
    isAuth: state.auth.isAuth
  }
}


let mapDispatchToProps = (dispatch)=>{
  return{
    addMesage: (messageText)=>dispatch(addMessageActionCreator(messageText)),

  }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);
