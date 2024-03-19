import React from "react";


class Status extends React.Component {
    state = {
        myId:this.props.myId,
        userId:this.props.userId,
        editMode: true,
        status: ""
    }

   activateStatus=()=>{
        this.setState({
            editMode: false,
            status:this.props.status
        })
    }
    deActivateStatus=()=>{
        this.setState({
            editMode: true
        })
        this.props.updateStatusUser(this.state.status)


    }

    onStateChange=(e)=>{
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {

        return <>
            {this.state.editMode && <div onClick={this.state.userId===this.state.myId ? this.activateStatus: null } >
                Статус: {this.props.status}
            </div>}
            {!this.state.editMode &&
                <div >
                    <input  onChange={this.onStateChange} autoFocus={true} onBlur={this.deActivateStatus}  value={this.state.status} />
                </div>
            }

        </>
    }
}

export default Status;
