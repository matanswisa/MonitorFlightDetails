import React, { Component } from 'react';
import imgSrc from './arrowUp.png'

class HISComponent extends Component {
    constructor(props) {
        super(props);
        this.ctx = this.canvas = this.upperArrowImg = this.radius = null;
    }

    /**
     * Draws the HIS monitor
     */
    componentDidUpdate(){
        this.drawHISMonitor(this.props.HIS,this.ctx);
    }

    /**
     * Initilaize the canvas 
     */
    componentDidMount() {
        this.upperArrowImg = this.refs.image;
        this.canvas = this.refs.canvas;
        this.ctx = this.canvas.getContext("2d");

        this.radius = this.canvas.height / 2;
        this.ctx.translate(this.radius, this.radius);
        this.radius = this.radius * 0.90;

        this.forceUpdate();
    }

    /**
     * Draws the HIS monitor
     * @param {*} his the HIS angle value
     * @param {*} ctx the object that responsible to draw on canvas
     */
    drawHISMonitor(his, ctx) {
        ctx.save();
        this.rotateHISMonitor(ctx, this.radius, his);
        this.drawAngles(ctx, this.radius);
        ctx.restore();
        this.drawUpperArrow(ctx, this.upperArrowImg)
        
    }

    /**
     * Rotates the monitor by the HIS value
     * 
     * @param {*} ctx the object that responsible to draw on canvas
     * @param {*} radius the radius of the monitor circle
     * @param {*} his the HIS angle value
     */
    rotateHISMonitor(ctx, radius, his) {
        ctx.beginPath();
        this.drawHISBorder(ctx, radius)
        ctx.rotate(his * Math.PI / 180)
    }

    /**
     * Draws all the angles on the HIS monitor
     * @param {*} ctx the object that responsible to draw on canvas
     * @param {*} radius the radius of the monitor circle
     */
    drawAngles(ctx, radius) {
        var calculatedAngle;
        ctx.fillStyle = '#333'
        ctx.font = radius * 0.15 + "px arial";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        for (let angle = 0; angle < 360; angle += 90) {
            calculatedAngle = angle * Math.PI / (-12);
            ctx.rotate(calculatedAngle);
            ctx.translate(0, -radius * 0.85);
            ctx.rotate(-calculatedAngle);
            ctx.fillText(angle.toString(), 0, 0);
            ctx.rotate(calculatedAngle);
            ctx.translate(0, radius * 0.85);
            ctx.rotate(-calculatedAngle);
        }
    }

    /**
     * Draws the border of the HIS monitor
     * @param {*} ctx the object that responsible to draw on canvas
     * @param {*} radius the radius of the monitor circle
     */
    drawHISBorder(ctx, radius) {
        ctx.arc(0, 0, radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        let grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
        grad.addColorStop(0, '#333');
        grad.addColorStop(0.5, 'white');
        grad.addColorStop(1, '#333');
        ctx.strokeStyle = grad;
        ctx.lineWidth = radius * 0.1;
        ctx.stroke();
        ctx.beginPath();
    }

    /**
     * Draw upper arrow image in the center of the monitor
     * @param {*} ctx the object that responsible to draw on canvas
     * @param {*} img the upper arrow img
     */
    drawUpperArrow(ctx, img) {
        ctx.drawImage(img, -img.width / 2, -img.height / 2, 50, 50);
    }

    render() {
        return (
            <div>
                <canvas ref="canvas" id="canvas" width="275" height="275">
                </canvas>
                <div style={{ display: "none" }}>
                    <img ref="image" id="arrow" width="50" height="50" src={imgSrc} style={{ position: "static" }} className="hidden" />
                </div>
            </div>
        );
    }
}

export default HISComponent;
