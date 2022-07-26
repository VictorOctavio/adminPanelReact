import React from 'react';
import './widgetLg.css';

export default function WidgetLg() {

    const woman = 'https://i.pinimg.com/736x/97/ed/6b/97ed6b370803649addbf66144c18c194.jpg'
    const woman2= 'https://woman.forumdaily.com/wp-content/uploads/2019/07/shutterstock_1842593794.jpg'
    const man = 'https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXNpYW58ZW58MHx8MHx8&w=1000&q=80'

    const Button = ({type}) => {
        return <button className={`widgetLgBtn + ${type}`}>{type}</button>
    }

    return (
        <div className="widgetLg">
            <div className="widgetLgTitle">Transacciones Recientes</div>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Cliente</th>
                    <th className="widgetLgTh">Fecha</th>
                    <th className="widgetLgTh">Monto</th>
                    <th className="widgetLgTh">Pago</th>
                </tr>

                <tr className="widgetLgTr">
                    
                    <td className="widgetLgTd customer">
                         <img src={woman} alt="" className="widgetLgTrImg" />
                         <span className="widgetLgCustomerTitle">
                         Mia Acosta
                        </span>
                    </td>
                    <td className="widgetLgTd">23 May 2021</td>
                    <td className="widgetLgTd">$9250</td>
                    
                    <td className="widgetLgTd">
                        <Button type="Approved"/>
                    </td>
                </tr>

                <tr className="widgetLgTr">
                    
                    <td className="widgetLgTd customer">
                         <img src={man} alt="" className="widgetLgTrImg" />
                         <span className="widgetLgCustomerTitle">
                         Eric Bailey
                        </span>
                    </td>
                    <td className="widgetLgTd">5 Jun 2021</td>
                    <td className="widgetLgTd">$1750</td>
                    <td className="widgetLgTd">
                        <Button type="Pending"/>    
                    </td>
                </tr>

                <tr className="widgetLgTr">
                    
                    <td className="widgetLgTd customer">
                         <img src={woman2} alt="" className="widgetLgTrImg" />
                         <span className="widgetLgCustomerTitle">
                         Martina Roma
                        </span>
                    </td>
                    <td className="widgetLgTd">26 NOv 2021</td>
                    <td className="widgetLgTd">$2550</td>
                    <td className="widgetLgTd">
                        <Button type="Rejected"/>   
                    </td>
                </tr>
            
            </table>
        </div>
    )
}
