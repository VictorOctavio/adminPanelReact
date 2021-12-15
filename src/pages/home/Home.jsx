import React from 'react'
import './home.css'

import {userData} from '../../dummyData';

//Components
import WidgetSm from '../../components/widgetSm/WidgetSm';
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import WidgetLg from '../../components/widgetLg/WidgetLg';

export default function Home() {


    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart legend="Sales Analytics" data={userData} grid={true} dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}
