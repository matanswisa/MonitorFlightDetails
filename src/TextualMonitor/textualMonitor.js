import React, { Component } from 'react';
import TextualMonitorCard from './TextMonitorCard/textualMonitorCard.js';

/** 
 * Returns array with json objects
 * 
 * @param {jsonObject} jsonObject the javascript object who contains keys and values pairs
 * @param {jsonObjectsArray} jsonObjectsArray the array with all the keys and valus pairs from the json object
 * 
 * **/
const convertJsonToArray = (jsonObject) => {
    const jsonObjectsArray = [];
    for (var key in jsonObject) {
        if (jsonObject.hasOwnProperty(key)) {
            var val = jsonObject[key];
            console.log(key, val);
            jsonObjectsArray.push({ key: key, val: val })
        }
    }
    return jsonObjectsArray;
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
