import React, { Component } from 'react';
import TextualMonitorCard from './TextMonitorCard/textualMonitorCard.js';

const fakeData = { altitude: '100', his: '80', adi: '-50' };
const convertJsonToArray = (fakeData) => {
    const array = [];
    for (var key in fakeData) {
        if (fakeData.hasOwnProperty(key)) {
            var val = fakeData[key];
            console.log(key, val);
            array.push({ key: key, val: val })
        }
    }
    return array;
}

class TextualMonitor extends Component {
    constructor(props){
        super(props);
        
    }

    render() {
        return (
            <div className="textual">

                 
                        <div className="container" style={{margin:"0 auto"}}>
                            <h1 className="display-5" style={{marginBottom:"2.5rem"}}>Textual Monitor</h1>
                           <div class="row" style={{margin:"0 auto" ,marginLeft: "10%"}}>
                            {convertJsonToArray(this.props.FlightCords).map(el => {
                                return <TextualMonitorCard name={el.key} value={el.val} />
                            })}
                           </div>
                        </div>
                 
            </div>
        );
    }
}


export default TextualMonitor;
