import React, { Component } from 'react';
import imgSrc from './arrowUp.png'

class HISComponent extends Component {
    constructor(props) {
        super(props);
        this.ctx = this.canvas = this.upperArrowImg = this.radius = null;
    }

    componentDidMount() {
        this.upperArrowImg = this.refs.image;
        this.canvas = this.refs.canvas;
        this.ctx = this.canvas.getContext("2d");

        this.radius = this.canvas.height / 2;
        this.ctx.translate(this.radius, this.radius);
        this.radius = this.radius * 0.90;

        this.drawHISMonitor(-this.props.HIS, this.ctx);
    }

    drawHISMonitor(his, ctx) {
        ctx.save();
        this.rotateHISMonitor(ctx, this.radius, his);
        this.drawAngels(ctx, this.radius);
        ctx.restore();
        this.drawUpperArrow(ctx, this.upperArrowImg)
    }

    rotateHISMonitor(ctx, radius, his) {
        ctx.beginPath();
        this.drawHISBorder(ctx, radius)
        ctx.rotate(his * Math.PI / 180)
    }

    drawAngels(ctx, radius) {
        var ang;
        ctx.fillStyle = '#333'
        ctx.font = radius * 0.15 + "px arial";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        for (let angel = 0; angel < 360; angel += 90) {
            ang = angel * Math.PI / (-12);
            ctx.rotate(ang);
            ctx.translate(0, -radius * 0.85);
            ctx.rotate(-ang);
            ctx.fillText(angel.toString(), 0, 0);
            ctx.rotate(ang);
            ctx.translate(0, radius * 0.85);
            ctx.rotate(-ang);
        }
    }

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
