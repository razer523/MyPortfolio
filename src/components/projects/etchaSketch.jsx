import React, { Component } from "react";
import './projects.css';

export default class EtchaSketch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: 4,
            color: "red",
            array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        }
        this.handleClear = this.handleClear.bind(this);
        this.handleColor = this.handleColor.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
    }

    handleClear() {
        let l;
        const prom = (string) => {
            l = prompt(string, 16);
        }
        let x = 0
        let newArray = [];
        let primary = "How many squares across?"
        let secondary = "Sorry has to be a number between 4 and 40"
        while(Number.isNaN(parseInt(l))  || parseInt(l) < 4 || parseInt(l) > 40) {
            if(x === 0) {
                x++;
                prom(primary, 16)
            }else{prom(secondary, 16)};
        }
        for(let i = 0; i < l**2; i++) {
            newArray.push(i);
        }
        this.setState({columns: l, array: newArray})
    }

    handleColor() {
        let newColor ='#'+Math.floor(Math.random()*16777215).toString(16);
        this.setState({color: newColor})
    }

    handleMouseOver(evt) {
        evt.target.style.backgroundColor = this.state.color
    }

    render() {
        const divGrid = (x) => {
            return(
                {display: 'grid',
                gridTemplateColumns: `repeat(${x}, 1fr)`,
                gridTemplateRows: `repeat(${x}, 1fr)`,
                border: '2px solid black',
                padding: 'auto'}
            )
        }
            
        return(
            <div>
                <div id = "header">
                    <div>
                        <h3>React Etch-A-Sketch</h3>
                        <h4>Use the options below to change the box size or change the color!</h4>
                    </div>
                    <div id="buttonDiv">
                        <button id = "clear" onClick={this.handleClear}>Change Box</button>
                        <button id="color" onClick={this.handleColor}>Change Color</button>
                    </div>
                </div>
                <div id="etchContainer" style={divGrid(this.state.columns)}>
                    {this.state.array.map(i => <div key ={i} id={i} onTouchMove={e=> this.handleMouseOver(e)} onTouchStart = {e => this.handleMouseOver(e)} onMouseOver={e => this.handleMouseOver(e)} style={{backgroundColor: "white"}} ></div>)}</div>
            </div>
        )
    }
}