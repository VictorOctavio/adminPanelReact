import React, {useState} from 'react'
import './topbar.css'

//Material ui icons
import {NotificationsNone, Language, Settings, AttachMoney, Autorenew} from '@material-ui/icons';

export default function Topbar() {

    const woman = 'https://image.freepik.com/free-photo/african-american-business-woman-working-cafe_1303-10862.jpg';
    const [notification, setNotification] = useState(false);

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <span className="logo">ADDMINPAGE</span>
                </div>
                <div className="topbarRight">
                    <div className="topbarIconsContainer" onClick={()=>setNotification(true)}>
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

                <div className={`topbarNotificationWindow ${notification ? 'active':''}`}>
                    <button className='topbarwindowClose' onClick={()=>setNotification(false)}>x</button>
                    <div className='topbarnotifications'>
                        <div className='topbarnotification'>
                            <h4><AttachMoney /> NUEVA VENTA</h4> 
                            <p>Alex Ronney a realizado una compra</p>
                            <span>hace 3 horas</span>
                        </div>

                        <div className='topbarnotification'>
                            <h4><Autorenew /> REEMBOLSO</h4> 
                            <p>brant Fabian a solicitado un reembolso</p>
                            <span>hace 8 horas</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
