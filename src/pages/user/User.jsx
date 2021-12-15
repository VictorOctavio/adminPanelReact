import "./user.css";

import { Link } from 'react-router-dom';
import { PermIdentity, CalendarToday, PhoneAndroid, EmailOutlined, LocationOn, Publish } from "@material-ui/icons";


const inputUpdate = (name, value, type) => {
        
  const styles = {
      userItemInput: {
          "display": "flex",
          "flex-direction": "column",
          "margin": "10px 0"
      },

      updateUserLabel: {
          "text-transform": "capitalize",
          "color": "rgb(53, 53, 53)",
          "font-weight": 600,
          "font-size": "18px",
          "padding": "5px 0"
      },

      updateUserInput: {
          "border": "none",
          "border-bottom": "1px solid #555",
          "padding": "10px 0",
          "font-weight": 300,
          "font-size": "16px",
          "width": "65%"
      }

  }

return(
    <div style={styles.userItemInput}>
      <label for={name}  style={styles.updateUserLabel}>{name}</label>
      <input style={styles.updateUserInput} type={type||'text'} name={name} placeholder={value}/>
    </div>
)
}


export default function User() {
//   const id = window.location.pathname.split("/")[2];
  const woman =
    "https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/natalie-portman-top-20-sexiest-hottest-women-2021-202003-1585584116.jpg";

  const spanShow = (Icon, info) => {
    return (
      <span className="userShowItem">
        <Icon className="userShowIcon" /> {info}
      </span>
    );
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/new-user">
            <button className="userAddButton">Create</button>
        </Link>
      </div>

      <div className="userContainer">
        <div className="userShow">
          <div className="userShowData">
            <img className="userShowImg" src={woman} alt=""/>
            <div className="userShowDescription">
              Anna Becker <span className="userShowProffesion">Software Engineer</span>
            </div>
          </div>

          <div className="userShowDetails">
            <h6 className="userShowTitleDetails">Acount Details</h6>
            {spanShow(PermIdentity, "annabeck99")}
            {spanShow(CalendarToday, "10.12.1999")}
          </div>

          <div className="userShowContact">
            <h6 className="userShowTitleContact">Contact</h6>
            {spanShow(PhoneAndroid, "+1 952 369 451")}
            {spanShow(EmailOutlined, "annabeck99@yahoo.com")}
            {spanShow(LocationOn, "New York | USA")}
          </div>
        </div>

        <div className="userUpdate">
            <div className="userUpdateTitle">Edit</div>
            <div className="userUpdateWrapper">
                <form className="userUpdateForm">

                    <div className="userUpdateFormLeft">
                        {inputUpdate('username', 'annabeck99')}
                        {inputUpdate('fullname', 'Anna Belkenson')}
                        {inputUpdate('email', 'annabeannabeck99@yahoo.comck99')}
                        {inputUpdate('phone', '+1 952 369 451')}
                        {inputUpdate('address', 'New York | USA')}
                    </div>
                   
                    <div className="userUpdateFormRight">
                        <div className="userUpdateImage">
                            <img className="userUpdateImg" src={woman} alt="" width="80px"/>
                            <label htmlFor="file">    
                                <Publish className="upserUpdateIcon"/>
                            </label>
                            <input type="file" id="file" style={{display: 'none'}}/>
                        </div>

                        <button className="userUpdateBTN">Update</button>
                    </div>

                </form>

            </div>
        </div>

      </div>
    </div>
  );
}
