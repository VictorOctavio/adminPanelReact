import React from 'react'
import './newuser.css'

const inputUpdate = (name, value, type) => {
        
    const styles = {
        userItemInput: {
            "display": "flex",
            "flex-direction": "column",
            "margin": "10px 0",
            "width": "50%"
        },
  
        updateUserLabel: {
            "text-transform": "capitalize",
            "color": "rgb(53, 53, 53)",
            "font-weight": 600,
            "font-size": "15px",
            "padding": "5px 0"
        },
  
        updateUserInput: {
            "border": "1px solid #e5e5e5",
            "border-radius": '5px',
            "padding": "10px 5px",
            "font-weight": 300,
            "font-size": "14px",
            "margin-right": "40px"
        }
  
    }
  
  return(
      <div style={styles.userItemInput}>
        <label for={name}  style={styles.updateUserLabel}>{name}</label>
        <input style={styles.updateUserInput} type={type||'text'} name={name} placeholder={value}/>
      </div>
  )
  }

export default function NewUser() {
    return (
        <div className="newUser">
            <div className="newUserTitle">New User</div>
            <form className="newUserForm">
                {inputUpdate('username', 'username')}
                {inputUpdate('email', 'email')}
                {inputUpdate('password', "password", "password")}
                {inputUpdate('phone', 'phone')}
                {inputUpdate('fullname', "Full Name")}
                {inputUpdate('address', "address")}

                <div className="newUserInputItem">

                    <label className="newUserLabel"> Gender</label>

                     <div className="genderOptions">        

                        <input type="radio" id="male" name="gender" value="male"/> 
                        <label for="male">male</label>
                       
                        <input type="radio" id="famele" name="gender" value="famele"/>
                        <label for="famele">femele</label>
                       
                        <input type="radio" id="other" name="gender" value="other"/>
                        <label for="other">other</label>
                       
                    </div>    
                </div>

                <div className="newUserInputItem">
                    <label className="newUserLabel"> Active</label>
                    <select className="newUserSelect" id="active" name="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <button className="sumbitCreate">Create</button>
                
            </form>
        </div>
    )
}
