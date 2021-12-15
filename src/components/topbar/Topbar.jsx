import React from 'react'
import './topbar.css'

//Material ui icons
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Topbar() {

    const woman = 'https://image.freepik.com/free-photo/african-american-business-woman-working-cafe_1303-10862.jpg';
    
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <span className="logo">ADDMINPAGE</span>
                </div>
                <div className="topbarRight">
                    <div className="topbarIconsContainer">
                        <NotificationsNone />
                        <spatn className="topIconBag">2</spatn>
                    </div>

                    <div className="topbarIconsContainer">
                        <Language />
                    </div>

                    <div className="topbarIconsContainer">
                        <Settings />
                    </div>

                    <img src={woman} alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
