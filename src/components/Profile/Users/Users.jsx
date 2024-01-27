import React from "react";
import style from "./Users.module.css";
import axios from "axios";


class Users extends React.Component {

  componentDidMount() {

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}&count=${this.props.totalUsersCount}`)
      .then((respons) => {
        this.props.setUsers(respons.data.items);
        this.props.pageSize(respons.data.totalCount);
      }
      );

  };

  updatePage(e){
      this.props.activePageUpdate(e);
      axios
          .get(`https://social-network.samuraijs.com/api/1.0/users?page=${e}&count=${this.props.totalUsersCount}`)
          .then((respons) => {
                  this.props.setUsers(respons.data.items);
                  this.props.pageSize(respons.data.totalCount);
              }
          )
  };


  render() {

        let pages = Math.ceil(this.props.pages / this.props.totalUsersCount)
      let pagesArrey = []
      for(let i =1; i <= pages; i++ ){
          pagesArrey.push(i)
      }



    return (

      <div>
          <div>
              {pagesArrey.map((e)=> {
                  return <span onClick={()=>{this.updatePage(e)}} className = {this.props.activePage === e ? style.active : style.page}>{` ${e}`}</span>
              })}
          </div>


          {this.props.users.map((u) => (

          <div key={u.id}>
            <span>
              <img
                className={style.avatar}
                src={
                  u.photos.small != null
                    ? u.photos.small
                    : "https://cdn.icon-icons.com/icons2/1390/PNG/512/atom_96224.png"
                }
                alt="Ava"
              />
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unFollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
                    follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
