import React from 'react';
import './featureInfo.css';

import {ArrowDownward, ArrowUpward} from '@material-ui/icons'

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue/Ingresos</span>
                <div className="featuredMoneyContainer">
                    <span className="featureMoney">$2,415</span>
                    <span className="featureMoneyRate">-11.4 
                    <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Sales/Ventas</span>
                <div className="featuredMoneyContainer">
                    <span className="featureMoney">$2,415</span>
                    <span className="featureMoneyRate">-1.4 
                    <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost/Costo</span>
                <div className="featuredMoneyContainer">
                    <span className="featureMoney">$2,415</span>
                    <span className="featureMoneyRate">+2.4 
                    <ArrowUpward  className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}
