import React from "react";


class Status extends React.Component {
    state = {
        editMode: true
    }

   activateStatus=()=>{
        this.setState({
            editMode: false
        })
    }
    deActivateStatus=()=>{
        this.setState({
            editMode: true
        })
    }

    render() {
        return <>
            {this.state.editMode && <div onClick={this.activateStatus} >
                {this.props.status}
            </div>}
            {!this.state.editMode &&
                <div >
                    <input autoFocus={true} onBlur={this.deActivateStatus}  value={this.props.status}/>
                </div>
            }

        </>
    }
}

export default Status;
