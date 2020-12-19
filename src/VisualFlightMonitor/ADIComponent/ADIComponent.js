import React, { Component } from 'react';
import './ADI.css'

class ADIComponent extends Component {
    constructor(props) {
        super(props);
        this.maxAdi = 100;
        this.minAdi = -100;
        this.percentageResult = 0;
    }

    /**
     * Returns calculate percentage for linear-gardient background color
     * 
     */
    getCalculatePercantageResult() {
        var difference = this.maxAdi - this.minAdi;
        var percentageResult = Number((this.props.ADI * 100 / difference) + 50);
        return percentageResult;
    }


    render() {
        this.percentageResult = this.getCalculatePercantageResult();
        return <div className="adi-border" style={{background:`linear-gradient(  rgb(0,113,255)
                ${this.percentageResult}%, rgb(75,255,50) ${this.percentageResult}% )`}}>
        </div>
    }
}
export default ADIComponent;
