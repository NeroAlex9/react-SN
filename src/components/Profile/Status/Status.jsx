import React, {useEffect, useState} from "react";


const Status =(props)=> {
    let myId = props.myId
    let userId = props.userId

    const [editMode, setEditMode] = useState(true)
    const [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const handleStatus = (event)=>{
        setStatus(event.target.value);
        props.updateStatusUser(event.target.value)
    }


        return <>
            {editMode && <div onClick={userId===myId ? ()=>setEditMode(false) : null } >
                Статус: {status}
            </div>}
            {!editMode &&
                <div >
                    <input  onChange={handleStatus} autoFocus={true} onBlur={()=>setEditMode(true)}  value={status} />
                </div>
            }

        </>

}

export default Status;
