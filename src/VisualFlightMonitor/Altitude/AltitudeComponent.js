import React, { Component } from 'react';

class AltitudeComponent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <canvas ref="canvas" id="canvas" width="275" height="275">
                </canvas>
            </div>
        );
    }
}

export default AltitudeComponent;
