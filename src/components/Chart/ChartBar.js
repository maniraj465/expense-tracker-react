import React from 'react';
import './ChartBar.css';

const ChartBar = props => {
    let barValue = '0%';
    if (props.maxValue > 0) {
        barValue = Math.round(( props.value / props.maxValue ) * 100) + '%';
    }
    console.log(barValue + ' : ' + props.label);
    return <div className="chart-bar">
        <div className="chart-bar-inner">
            <div className="chart-bar-fill" style={ { height: barValue } }></div>
        </div>
        <div className="chart-bars">
            <p className="chart-bar-label">{props.label}</p>
        </div>
    </div>
};

export default ChartBar;