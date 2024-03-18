import React from "react";
import style from "./Profileinfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import Status from "../Status/Status";



const Profileinfo = (props) => {
    if (!props.profileUser) {
        return <Preloader/>
    }
    return (
        <div className={style.content}>
            {/*<div>*/}
            {/*    <img*/}
            {/*        className={style.photo}*/}
            {/*        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEx4L-JbwplX3RtXxdrjygft007LGEiZrDuuEY6VhnvoYc5rq7euLKsx7_4oo353d-sHs&usqp=CAU"*/}
            {/*        alt="headerPhoto"*/}
            {/*    />*/}
            {/*</div>*/}
            <div className={style.description}>
                <img className={style.ava} src={props.profileUser.photos.small
                    ? props.profileUser.photos.small
                    : "https://cdn.icon-icons.com/icons2/1390/PNG/512/atom_96224.png"} alt="ava"/>
                <div className={style.name}>
                    {props.profileUser.fullName}
                    <div>
                        <Status status={"Hello"}/>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Profileinfo;
